// app/components/InstallBanner.tsx
'use client'

import { useEffect, useState } from 'react'

declare global {
  interface WindowEventMap {
    beforeinstallprompt: any
  }
}

export default function InstallBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setVisible(true)
    }
    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const onInstall = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const choice = await deferredPrompt.userChoice
    if (choice.outcome === 'accepted') {
      setVisible(false)
      setDeferredPrompt(null)
    }
  }

  // iOS Safari fallback tip (no beforeinstallprompt)
  const isiOS = typeof window !== 'undefined' && /iphone|ipad|ipod/i.test(window.navigator.userAgent)

  if (!visible && !isiOS) return null

  return (
    <div className="fixed left-1/2 top-2 z-[60] -translate-x-1/2">
      <div className="flex items-center gap-3 rounded-full bg-white px-4 py-2 shadow-soft border">
        <span className="text-sm font-medium">Install AFZ Affiliates</span>
        {isiOS ? (
          <span className="text-xs text-gray-600">
            Tap Share → Add to Home Screen
          </span>
        ) : (
          <button
            onClick={onInstall}
            className="rounded-full bg-brand-primary px-3 py-1 text-sm text-white hover:bg-[#0046A9]"
          >
            Install
          </button>
        )}
        <button onClick={() => setVisible(false)} className="text-xs text-gray-500 hover:text-gray-800">
          Dismiss
        </button>
      </div>
    </div>
  )
}