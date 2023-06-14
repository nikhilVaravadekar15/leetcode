"use client"

import { IoMdSearch } from 'react-icons/io'
import React, { useEffect, useState } from 'react'
import DataTable from '@/components/DataTable'
import HeaderComponent from '@/components/HeaderComponent'
import { auth } from '@/firebase/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/navigation'
import CustomLoader from '@/components/CustomLoader'


export default function Home() {
  const router = useRouter()
  const [userAuthState, loadingAuthState, errorAuthState] = useAuthState(auth);

  if (!userAuthState || errorAuthState) {
    // logout user and redirect 
    router.push("/auth/sign-in")
  }

  return (
    <>
      {
        loadingAuthState && (
          <div className="absolute z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <CustomLoader />
          </div>
        )
      }
      <main className="container mx-auto min-h-screen flex flex-col items-center">
        <HeaderComponent />
        <div className="container h-[90vh] w-full mx-auto flex flex-col">
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
        </div>
      </main>
    </>
  )
}
