// components/ui/button.tsx
'use client'

import React from 'react'
import Link from 'next/link'

type ButtonProps = {
  /** If provided, renders an <a> inside Next.js Link instead of a <button> */
  href?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>

export function Button({
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const classes = `rounded-lg font-semibold transition ${className}`

  if (href) {
    // Render as a link
    return (
      <Link href={href} {...props} className={classes}>
        {children}
      </Link>
    )
  }

  // Render as a normal button
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
