'use client'
import { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"

export default function ClientLayout({
  Component,
  pageProps: { session, ...pageProps },
}: {
  Component: React.ComponentType
  pageProps: {
    session: Session | null
    [key: string]: string | number | boolean | object | null | undefined
  }
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}