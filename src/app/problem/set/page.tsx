"use client"

import Link from 'next/link'
import Image from 'next/image'
import { IoMdSearch } from 'react-icons/io'
import React, { useEffect, useState } from 'react'
import { profileMenuItems } from '../../../data'
import { TSlider } from '../../../types'
import DataTable from '@/components/DataTable'


export default function Home() {

  return (
    <main className="container mx-auto min-h-screen flex flex-col items-center">
      <HeaderComponent></HeaderComponent>
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
  )
}

function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="w-full h-[8vh] px-6 py-2 flex items-center justify-between">
      <Link href="/" className="cursor-pointer">
        <Image
          width={128} height={64} draggable={false}
          src="/assets/images/logo-full.png" alt="logo" />
      </Link>
      <div className="relative">
        <button
          onClick={() => setIsMenuOpen((prevData: boolean) => !prevData)}
          className="p-2 flex gap-2 items-center justify-center cursor-pointer bg-transparent border border-orange-500 rounded-lg shadow-xl"
        >
          <Image
            width={32}
            height={32}
            alt="elon_musk"
            className="border border-gray-200 rounded-full"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <span className="text-white tracking-tighter">
            elon musk
          </span>
        </button>
        {
          isMenuOpen && (
            <div className="absolute w-48 z-20 top-16 -right-8 p-4 flex flex-col bg-white border rounded-md shadow-xl">
              {
                profileMenuItems.map((item: TSlider, index: number) => {
                  const isLastItem = index === profileMenuItems.length - 1;
                  return (
                    <div
                      key={index}
                      className={`my-1 p-2.5 flex gap-2 items-center cursor-pointer rounded ${isLastItem ? "text-red-500 hover:bg-red-50" : "hover:bg-slate-100"}`}
                    >
                      {item.icon}
                      <span className="font-normal">
                        {item.title}
                      </span>
                    </div>
                  );
                })
              }
            </div>
          )
        }
      </div>
    </header>
  )
}
