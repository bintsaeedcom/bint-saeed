'use client'

import { useEffect, useRef } from 'react'

type Props = {
  className?: string
  intensity?: number
}

/**
 * Lightweight shader layer for the experimental route.
 * No external dependencies; designed to fail gracefully if WebGL is unavailable.
 */
export default function ExperimentalWebGLBackground({ className = '', intensity = 1 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl', { antialias: true, alpha: true })
    if (!gl) return

    const vertexSource = `
      attribute vec2 a_position;
      varying vec2 v_uv;
      void main() {
        v_uv = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `

    const fragmentSource = `
      precision highp float;
      varying vec2 v_uv;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_time;
      uniform float u_intensity;

      float hash(vec2 p) {
        p = fract(p * vec2(123.34, 345.45));
        p += dot(p, p + 34.345);
        return fract(p.x * p.y);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      void main() {
        vec2 uv = v_uv;
        vec2 centered = uv - 0.5;
        centered.x *= u_resolution.x / max(u_resolution.y, 1.0);

        float t = u_time * 0.22;
        float swirl = sin((centered.x * 3.2 + centered.y * 2.4) + t) * 0.5 + 0.5;
        float n1 = noise(centered * 4.8 + vec2(t * 0.9, -t * 0.6));
        float n2 = noise(centered * 9.5 - vec2(t * 0.55, t * 0.35));
        float field = mix(n1, n2, 0.42) * 0.75 + swirl * 0.25;

        vec2 m = u_mouse - 0.5;
        m.x *= u_resolution.x / max(u_resolution.y, 1.0);
        float mouseHalo = smoothstep(0.7, 0.0, length(centered - m));

        vec3 deepWine = vec3(0.070, 0.031, 0.047);     // ~ #12080b
        vec3 burgundy = vec3(0.192, 0.058, 0.086);     // ~ #310f16
        vec3 crimson = vec3(0.498, 0.101, 0.149);      // ~ #7f1a26
        vec3 maroonGlow = vec3(0.415, 0.149, 0.169);   // ~ #6a262b
        vec3 dustyBlue = vec3(0.573, 0.667, 0.757);    // ~ #6a8090
        vec3 clay = vec3(0.756, 0.565, 0.525);         // ~ #e8ddd4
        vec3 plum = vec3(0.321, 0.164, 0.274);         // ~ #522946
        vec3 softWhite = vec3(0.96, 0.94, 0.92);       // warm white lift

        vec3 base = mix(deepWine, burgundy, smoothstep(0.14, 0.86, field));
        float halo = smoothstep(0.55, 0.0, length(centered + vec2(sin(t) * 0.08, cos(t * 1.2) * 0.06)));
        vec3 color = base + crimson * halo * 0.31 * u_intensity;
        color += crimson * mouseHalo * 0.26 * u_intensity;
        color += maroonGlow * mouseHalo * 0.16 * u_intensity;
        color += dustyBlue * halo * 0.09 * u_intensity;
        color += clay * mouseHalo * 0.07 * u_intensity;
        color += plum * halo * 0.1 * u_intensity;
        color = mix(color, softWhite, (0.06 + mouseHalo * 0.05) * u_intensity);

        float scan = sin((uv.y + t * 0.22) * 220.0) * 0.0035;
        color += vec3(scan);

        float vignette = smoothstep(0.88, 0.25, length(centered));
        color *= vignette;

        gl_FragColor = vec4(color, 0.72 * u_intensity);
      }
    `

    const createShader = (type: number, source: string): WebGLShader | null => {
      const shader = gl.createShader(type)
      if (!shader) return null
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader)
        return null
      }
      return shader
    }

    const vertexShader = createShader(gl.VERTEX_SHADER, vertexSource)
    const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentSource)
    if (!vertexShader || !fragmentShader) return

    const program = gl.createProgram()
    if (!program) return
    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program)
      return
    }

    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    )

    const positionLoc = gl.getAttribLocation(program, 'a_position')
    const timeLoc = gl.getUniformLocation(program, 'u_time')
    const resolutionLoc = gl.getUniformLocation(program, 'u_resolution')
    const mouseLoc = gl.getUniformLocation(program, 'u_mouse')
    const intensityLoc = gl.getUniformLocation(program, 'u_intensity')

    let rafId = 0
    let startTime = performance.now()

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const width = Math.floor(canvas.clientWidth * dpr)
      const height = Math.floor(canvas.clientHeight * dpr)
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
      }
      gl.viewport(0, 0, canvas.width, canvas.height)
    }

    const render = (now: number) => {
      resize()
      const elapsed = (now - startTime) * 0.001

      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.useProgram(program)
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
      gl.enableVertexAttribArray(positionLoc)
      gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0)
      gl.uniform1f(timeLoc, elapsed)
      gl.uniform2f(resolutionLoc, canvas.width, canvas.height)
      gl.uniform2f(mouseLoc, mouseRef.current.x, mouseRef.current.y)
      gl.uniform1f(intensityLoc, intensity)
      gl.drawArrays(gl.TRIANGLES, 0, 6)

      rafId = requestAnimationFrame(render)
    }

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId)
      } else {
        startTime = performance.now()
        rafId = requestAnimationFrame(render)
      }
    }

    const onResize = () => resize()
    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      if (rect.width <= 0 || rect.height <= 0) return
      mouseRef.current.x = (event.clientX - rect.left) / rect.width
      mouseRef.current.y = 1 - (event.clientY - rect.top) / rect.height
    }
    window.addEventListener('resize', onResize)
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    document.addEventListener('visibilitychange', onVisibility)
    rafId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('visibilitychange', onVisibility)
      gl.deleteProgram(program)
      gl.deleteShader(vertexShader)
      gl.deleteShader(fragmentShader)
      gl.deleteBuffer(positionBuffer)
    }
  }, [intensity])

  return <canvas ref={canvasRef} className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} aria-hidden />
}

