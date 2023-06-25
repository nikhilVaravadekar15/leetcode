"use client"

import React, { useEffect, useState } from 'react'
import HeaderComponent from '@/components/HeaderComponent'
import Split from 'react-split'
import ProblemDescription from '@/components/ProblemDescription'
import PreferenceNav from '@/components/PreferenceNav'
import CodePlayground from '@/components/CodePlayground'
import TestCaseArea from '@/components/TestCaseArea'
import { useRouter } from 'next/navigation'
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase/firebase'
import CustomLoader from '@/components/CustomLoader'
import { problemMap } from '@/problems'
import { TProblemLocal } from '@/types'

type TProblemPageProps = {
  params: {
    id: string
  }
}

export default function ProblemId({ params }: TProblemPageProps) {
  const router = useRouter()
  const [signOut, loadingSignOut, errorSignOut] = useSignOut(auth);
  const [userAuthState, loadingAuthState, errorAuthState] = useAuthState(auth);

  const { id } = params
  const problem: TProblemLocal = problemMap[id]

  if (!problem) {
    router.push("/404")
  } else {
    problem.handlerFunction = problem.handlerFunction.toString()
  }

  useEffect(() => {
    async function handleAuth() {
      if (errorAuthState) {
        try {
          const success = await signOut();
          if (success) {
            router.push("/auth/sign-in")
          }
        } catch (error: any) {
          console.log(error)
        }
      }
    }

    handleAuth()
  }, [])

  return (
    <>
      {
        loadingAuthState && (
          <div className="absolute z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <CustomLoader />
          </div>
        )
      }
      <main className={`mx-auto min-h-screen flex flex-col items-center overflow-y-hidden ${loadingAuthState && "pointer-events-none"}`}>
        <div className="w-full px-4 bg-dark-layer-1 shadow-xl">
          <HeaderComponent />
        </div>
        <Split
          minSize={0}
          direction="horizontal"
          className="split h-[91.8vh] w-full mx-auto flex flex-col overflow-hidden"
        >
          <ProblemDescription problem={problem} />
          <div className="h-10 w-full mx-auto">
            <PreferenceNav />
            <Split
              minSize={60}
              direction="vertical"
              className="h-[calc(91.8vh-40px)]"
              sizes={[60, 40]}
            >
              <CodePlayground code={problem.starterCode} />
              <TestCaseArea problem={problem} />
            </Split>
          </div>
        </Split>
      </main>
    </>
  )
}


export async function generateStaticParams() {
  const paths = Object.keys(problemMap).map((key) => ({
    params: { id: key }
  }))

  console.log(paths)
  return {
    paths,
    fallback: false
  }
}
