'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

export default function SubscribeForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success('Welcome to Bint Saeed!')
        setFormData({ firstName: '', lastName: '', email: '' })
      } else {
        throw new Error('Failed to subscribe')
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          required
          className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 font-roboto text-sm tracking-[0.1em] focus:outline-none focus:border-brand-rose transition-colors"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          required
          className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 font-roboto text-sm tracking-[0.1em] focus:outline-none focus:border-brand-rose transition-colors"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 font-roboto text-sm tracking-[0.1em] focus:outline-none focus:border-brand-rose transition-colors"
        />
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-3 bg-brand-rose text-brand-darkRed font-roboto text-sm uppercase tracking-[0.2em] hover:bg-white transition-colors disabled:opacity-50"
          data-cursor-hover
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </motion.button>
      </div>
      <p className="text-xs text-brand-stone/70 tracking-wide">
        By subscribing, you agree to our Privacy Policy and consent to receive updates.
      </p>
    </form>
  )
}
