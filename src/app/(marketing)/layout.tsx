'use client'

import { useLayoutEffect } from 'react'
import { useTheme } from '@/components/ThemeProvider'
import { MktNav } from '@/components/marketing/MktNav'
import { MktFooter } from '@/components/marketing/MktFooter'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { setTheme } = useTheme()

  // Force light theme synchronously before paint so nav/footer never
  // flash as dark/unstyled on any device including slow mobile browsers.
  useLayoutEffect(() => {
    document.documentElement.classList.remove('dark')
    document.documentElement.classList.add('light')
    setTheme('light')
  }, [setTheme])

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <MktNav />
      <main className="flex-1">{children}</main>
      <MktFooter />
    </div>
  )
}
