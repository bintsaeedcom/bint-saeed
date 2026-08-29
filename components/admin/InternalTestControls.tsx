'use client'

import { useCallback, useEffect, useState } from 'react'
import {
  clearInternalTestMode,
  isInternalTestModeActive,
  markInternalTestMode,
} from '@/lib/analytics/internalTestMode'

export default function InternalTestControls() {
  const [active, setActive] = useState(false)

  useEffect(() => {
    setActive(isInternalTestModeActive())
  }, [])

  const enable = useCallback(() => {
    markInternalTestMode()
    setActive(true)
  }, [])

  const disable = useCallback(() => {
    clearInternalTestMode()
    setActive(false)
  }, [])

  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-4 text-sm text-neutral-800">
      <p className="font-medium text-neutral-900">Internal / test browser</p>
      <p className="mt-1 text-xs text-neutral-600">
        Marks this browser only. Abandoned-bag Slack alerts and customer funnel counts are
        suppressed. Does not use IP or location.
      </p>
      <p className="mt-2 text-xs">
        Status:{' '}
        <span className={active ? 'font-medium text-amber-800' : 'text-neutral-700'}>
          {active ? 'Internal/Test ON' : 'Customer mode'}
        </span>
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={enable}
          className="rounded border border-neutral-300 px-3 py-1.5 text-xs hover:bg-neutral-50"
        >
          Mark this browser as internal/test
        </button>
        <button
          type="button"
          onClick={disable}
          className="rounded border border-neutral-300 px-3 py-1.5 text-xs hover:bg-neutral-50"
        >
          Stop marking this browser as internal/test
        </button>
      </div>
    </div>
  )
}
