"use client"

import React, { useEffect, useState } from 'react'
import HeaderComponent from '@/components/HeaderComponent'
import Split from 'react-split'
import ProblemDescription from '@/components/ProblemDescription'
import PreferenceNav from '@/components/PreferenceNav'
import CodePlayground from '@/components/CodePlayground'
import TestCaseArea from '@/components/TestCaseArea'


export default function ProblemId() {

  return (
    <main className="mx-auto min-h-screen flex flex-col items-center overflow-y-hidden">
      <div className="w-full px-4 bg-dark-layer-1 shadow-xl">
        <HeaderComponent />
      </div>
      <Split
        minSize={0}
        direction="horizontal"
        className="split h-[91.8vh] w-full mx-auto flex flex-col overflow-hidden"
      >
        <ProblemDescription />
        <div className="h-10 w-full mx-auto">
          <PreferenceNav />
          <Split
            minSize={60}
            direction="vertical"
            className="h-[calc(91.8vh-40px)]"
            sizes={[60, 40]}
          >
            <CodePlayground />
            <TestCaseArea />
          </Split>
        </div>
      </Split>
    </main>
  )
}
