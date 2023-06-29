"use client"

import { IoMdSearch } from 'react-icons/io'
import React, { useState } from 'react'
import DataTable from '@/components/DataTable'
import HeaderComponent from '@/components/HeaderComponent'
import { auth } from '@/firebase/firebase'
import CustomLoader from '@/components/CustomLoader'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Skeleton } from '@mantine/core'
import TableSkeletonRow from '@/components/TableSkeletonRow'


export default function Home() {
  const [userAuthState, loadingAuthState, errorAuthState] = useAuthState(auth);

  return (
    <>
      <main className={`container mx-auto min-h-screen flex flex-col items-center ${loadingAuthState && "pointer-events-none"}`}>
        <HeaderComponent />
        <div className="container h-[90vh] w-full mx-auto flex flex-col">
          <>
            {
              loadingAuthState ? (
                <div className="mx-auto w-full animate-pulse">
                  {
                    [...Array(12)].map((_, idx) => {
                      return (
                        <TableSkeletonRow key={idx} />
                      )
                    })
                  }
                </div>
              ) : (
                <>
                  <div className="h-[8%] flex items-center justify-between">
                    <h1 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600 tracking-tighter">
                      {"\"Quality over quantity\""}
                    </h1>
                    <div className="relative p-3 bg-white border border-orange-400 rounded-3xl">
                      <input
                        type="text"
                        autoComplete="off"
                        placeholder="Search..."
                        className="text-lg border-none outline-none focus:border-none focus:outline-none"
                      />
                      <IoMdSearch className="absolute top-1.5 right-1 p-2 w-10 h-10 font-black text-white cursor-pointer bg-orange-400 border border-orange-500 rounded-full" />
                    </div>
                  </div>
                  <div className="h-[92%] mt-2">
                    <DataTable></DataTable>
                  </div>
                </>
              )
            }
          </>
        </div>
      </main>
    </>
  )
}
