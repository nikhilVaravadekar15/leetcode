import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Leetcode | Problem set",
};

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
