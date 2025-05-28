'use client'
import { SessionProvider } from "next-auth/react"

export default function ClientLayout({
  Component,
  pageProps: { session, ...pageProps },
}: any) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}