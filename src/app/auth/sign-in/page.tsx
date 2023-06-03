import React from 'react'
import Link from 'next/link'
import {
  BsGithub
} from 'react-icons/bs'
import {
  HiArrowNarrowLeft,
  HiArrowNarrowRight,
} from 'react-icons/hi'

export default function Signin() {
  return (
    <main className="relative h-screen flex items-center justify-center">
      <div className="flex items-center justify-center my-4">
        <div className="bg-gradient-to-r from-orange-400 via-pink-400 to-teal-400 p-1 rounded-md">
          <div className="flex gap-2 flex-col px-4 py-10 sm:px-6 lg:px-8 sm:py-16 lg:py-24 bg-dark-layer-1 rounded-md">
            <Link href={"/"} className="flex gap-2 items-center cursor-pointer font-bold text-white">
              <HiArrowNarrowLeft className="w-5 h-5" />
              <span className="text-xl leading-tight sm:text-2xl">Home</span>
            </Link>
            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                Sign in
              </h2>
              <p className="mt-2 text-base text-gray-300">
                {"Don't have an account? "}
                <Link
                  href={"/auth/sign-up"}
                  className="font-medium text-orange-400 transition-all duration-200 hover:text-orange-500 hover:underline focus:text-orange-500"
                >
                  Create a free account
                </Link>
              </p>
              <form action="#" method="POST" className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor=""
                      className="text-base font-medium text-white"
                    >
                      Email address
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        placeholder="Email"
                        autoComplete="off"
                        className="flex h-10 w-full rounded-md text-white border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor=""
                        className="text-base font-medium text-white"
                      >
                        Password
                      </label>
                      <Link
                        href="/auth/forgot-password"
                        className="text-sm font-medium text-orange-400 transition-all duration-200 hover:text-orange-500 hover:underline focus:text-orange-500"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <div className="mt-2.5">
                      <input
                        type="password"
                        placeholder="Password"
                        autoComplete="off"
                        className="flex h-10 w-full text-white rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                  </div>
                  <div>
                    <button className="w-full inline-flex gap-2 items-center justify-center rounded-md shadow-xl cursor-pointer bg-orange-400 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-orange-500">
                      Get started
                      <HiArrowNarrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </form>
              <div className="my-3 text-center text-xl text-white font-semibold leading-tight">
                or
              </div>
              <div className="mt-3 space-y-3">
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center cursor-pointer w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border border-gray-500 rounded-md shadow-xl hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                >
                  <div className="absolute left-6">
                    <BsGithub className="w-5 h-5" />
                  </div>
                  Sign in with Github
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
