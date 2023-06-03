"use client"

import React, { useEffect, useState } from 'react'
import HeaderComponent from '@/components/HeaderComponent'
import Split from 'react-split'
import ProblemDescription from '@/components/ProblemDescription'
// import { ScrollArea } from '@mantine/core'


export default function Home() {

  return (
    <main className="mx-auto min-h-screen flex flex-col items-center overflow-hidden">
      <div className="w-full px-4 bg-dark-layer-1 shadow-xl">
        <HeaderComponent />
      </div>
      <Split
        minSize={0}
        direction="horizontal"
        className="split h-[91.8vh] w-full mx-auto flex flex-col"
      >
        <ProblemDescription />
        <div className="bg-white p-4">
          workspace
        </div>
      </Split>
    </main>
  )
}
