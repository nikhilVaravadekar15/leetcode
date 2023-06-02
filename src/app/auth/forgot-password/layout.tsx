import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Leetcode | Forgot Password",
};

export default function SignUpLayout({
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
