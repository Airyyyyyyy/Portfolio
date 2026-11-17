import { useState } from 'react'
import { profile } from '../data/portfolio'

// 1. Create a free form at https://formspree.io
// 2. Paste its endpoint here, e.g. 'https://formspree.io/f/abcdwxyz'
const FORMSPREE_ENDPOINT = ''

export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    if (!FORMSPREE_ENDPOINT) {
      setStatus('error')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      })
      if (!res.ok) throw new Error('Request failed')
      e.target.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className="field" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className="field" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea id="message" name="message" rows="5" required className="field resize-y" />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status === 'sending'} className="btn btn-solid disabled:opacity-60">
          {status === 'sending' && (
            <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" aria-hidden="true" />
          )}
          {status === 'sending' ? 'Sending' : 'Send message'}
        </button>
        <p role="status" aria-live="polite" className="text-sm">
          {status === 'sent' && <span className="text-accent">Message sent. I'll reply by email.</span>}
          {status === 'error' && (
            <span className="text-red-700 dark:text-red-400">
              {FORMSPREE_ENDPOINT ? 'Message not sent. Check your connection and try again, or email ' : 'The form is offline. Email '}
              <a href={`mailto:${profile.email}`} className="underline">
                {profile.email}
              </a>{' '}
              instead.
            </span>
          )}
        </p>
      </div>
    </form>
  )
}
