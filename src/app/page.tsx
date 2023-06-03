"use client"

import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {
  FaFacebook, FaYoutube, FaTwitter
} from 'react-icons/fa'


export default function Home() {
  const [currentYear, setCurrentYear] = useState<string>()

  useEffect(() => {
    setCurrentYear(new Date().getUTCFullYear().toString())
  }, [])

  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center">
      <header className="w-full px-6 py-2 flex flex-col items-center justify-between sm:flex-row">
        <Link href="/" className="cursor-pointer">
          <Image
            width={128} height={64} draggable={false}
            src="/assets/images/logo-full.png" alt="logo" />
        </Link>
        <div className="flex gap-4 items-center">
          <Link
            href={"/problem/set"}
            className="px-3 py-2 sm:px-5 sm:py-3 font-bold text-orange-400 bg-transparent border border-orange-400 rounded-full shadow-xl hover:text-white hover:bg-orange-500 hover:border-orange-500"
          >
            Problem set
          </Link>
          <Link
            href={"/auth/sign-in"}
            className="px-3 py-2 sm:px-5 sm:py-3 font-bold rounded-full text-white shadow-xl cursor-pointer bg-orange-400 hover:bg-orange-500"
          >
            sign in
          </Link>
        </div>
      </header>
      <div className="container h-[80vh] w-full mx-auto flex flex-col items-center justify-center text-center sm:w-[640px] lg:w-[768px]">
        <div className="relative max-w-5xl mx-auto">
          <h1 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600 tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            A New Way to Learn
          </h1>
          <Image
            alt="guide-sparkle-left"
            width={96} height={96} draggable={false}
            src="/assets/images/guide-sparkle-left.svg"
            className="absolute -top-16 left-0"
          />
          <Image
            alt="guide-sparkle-right"
            width={96} height={96} draggable={false}
            src="/assets/images/guide-sparkle-right.svg"
            className="absolute -top-16 right-0"
          />
        </div>
        <p className="mt-3 w-10/12 text-base text-gray-200 sm:mt-4 sm:w-11/12 sm:text-xl lg:text-lg lg:mt-5 xl:text-xl xl:mt-6">
          LeetCode is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.
        </p>
        <div className="my-4 flex justify-center space-x-6 text-sm">
          <Link
            href={"/auth/sign-up"}
            className="bg-orange-400 hover:bg-orange-500 focus:outline-none text-white text-lg font-bold h-12 px-6 rounded-full w-full flex items-center justify-center sm:w-auto"
          >
            Create account
          </Link>
        </div>
      </div>
      <footer className="py-6 w-full relative flex items-center justify-between">
        <p className="text-gray-50">
          Copyright © {currentYear} All rights reserved
        </p>
        <div className="flex gap-6 justify-center">
          <Link
            href={"/#"} title="Facebook"
            className="w-8 h-8 flex items-center justify-center cursor-pointer rounded-full text-gray-700 bg-[#d2d2d2] hover:text-gray-800 hover:bg-orange-100">
            <FaFacebook />
          </Link>
          <Link
            href={"/#"} title="Youtube"
            className="w-8 h-8 flex items-center justify-center cursor-pointer rounded-full text-gray-700 bg-[#d2d2d2] hover:text-gray-800 hover:bg-orange-100">
            <FaYoutube />
          </Link>
          <Link
            href={"/#"} title="Twitter"
            className="w-8 h-8 flex items-center justify-center cursor-pointer rounded-full text-gray-700 bg-[#d2d2d2] hover:text-gray-800 hover:bg-orange-100">
            <FaTwitter />
          </Link>
        </div>
        <div className="flex gap-2 items-center text-center text-gray-50">
          <Link href={"/#"}>
            <span className="hover:text-blue-400">Contact</span>
          </Link>
          <Link href={"/#"}>
            <span className="hover:text-blue-400">Privacy</span>
          </Link>
          <Link href={"/#"}>
            <span className="hover:text-blue-400">Terms & Conditions</span>
          </Link>
        </div>
      </footer>
    </main>
  )
}
