"use client"

import {
  BsGithub
} from 'react-icons/bs'
import {
  HiArrowNarrowLeft,
  HiArrowNarrowRight,
} from 'react-icons/hi'
import React from 'react'
import Link from 'next/link'
import { TUserauth } from '@/types'
import { useForm } from '@mantine/form'
import { auth } from '@/firebase/firebase'
import { useRouter } from 'next/navigation';
import { validateEmail } from '@/utility/utilities'
import CustomLoader from '@/components/CustomLoader'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify'
import { Button, PasswordInput, TextInput } from '@mantine/core'
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'


export default function Signin() {
  const router = useRouter();
  const [userAuthState, loadingAuthState, errorAuthState] = useAuthState(auth);
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const form = useForm<TUserauth>({
    initialValues: {
      email: "",
      password: ""
    },

    validate: {
      email: (value: string) => (
        validateEmail(value)
          ? null
          : "Invalid email"
      ),
      password: (value: string) => (
        value == ""
          ? "Invalid password"
          : null
      ),
    }
  });

  async function submitUserSignInDetails(values: TUserauth) {
    try {
      const user = await signInWithEmailAndPassword(values.email, values.password)
      if (user) {
        router.push("/problem/set")
      }
    } catch (error: any) {
      console.log(error)
    }

  }

  if (error) {
    if (error?.code == "auth/user-not-found") {
      toast.error(
        `User with email id "${form.values.email}" does not exists`,
        {
          position: toast.POSITION.TOP_CENTER
        }
      );
    }
    if (error?.code == "auth/wrong-password") {
      toast.error(
        "Invalid password, please try again!",
        {
          position: toast.POSITION.TOP_CENTER
        }
      );
    }
  }

  if (userAuthState) {
    router.push("/problem/set")
  }

  return (
    <>
      <ToastContainer
        limit={1}
        theme="dark"
        autoClose={5000}
        position="top-center"
        rtl={false}
        draggable={true}
        pauseOnHover={true}
        newestOnTop={false}
        closeOnClick={true}
        pauseOnFocusLoss={true}
        hideProgressBar={false}
      />
      {
        loadingAuthState || loading && (
          <div className="absolute z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <CustomLoader />
          </div>
        )
      }
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
                <form
                  className="space-y-4 my-3"
                  onSubmit={form.onSubmit((values: TUserauth) => {
                    toast.dismiss()
                    submitUserSignInDetails(values)
                  })}
                >
                  <TextInput
                    id="email"
                    name="email"
                    label="Email"
                    spellCheck={false}
                    withAsterisk={true}
                    autoComplete="off"
                    placeholder="your@email.com"
                    {...form.getInputProps('email')}
                    inputWrapperOrder={['label', 'input', 'error']}
                    classNames={{
                      label: "text-base font-medium text-white",
                      input: "h-10 w-full py-2 px-3 text-sm flex text-white bg-transparent border border-gray-300 rounded-md placeholder:text-gray-400 focus:outline-none focus:border-orange-300"
                    }}
                  />
                  <div className="flex gap-1 flex-col">
                    <PasswordInput
                      id="password"
                      name="password"
                      label="Password"
                      spellCheck={false}
                      withAsterisk={true}
                      autoComplete="off"
                      placeholder="Super secret password"
                      {...form.getInputProps('password')}
                      inputWrapperOrder={['label', 'input', 'error']}
                      classNames={{
                        description: "test-white",
                        label: "text-base font-medium text-white",
                        innerInput: "text-white",
                        input: "h-10 w-full py-2 px-3 text-sm flex bg-transparent border border-gray-300 rounded-md placeholder:text-gray-400 focus:outline-none focus-within:border-orange-300"
                      }}
                    />
                    <Link
                      href="/auth/forgot-password"
                      className="text-sm font-medium self-end text-orange-400 transition-all duration-200 hover:text-orange-500 hover:underline focus:text-orange-500"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <Button
                    type="submit"
                    rightIcon={<HiArrowNarrowRight className="w-4 h-4" />}
                    className="w-full h-12 rounded-md shadow-xl cursor-pointer bg-orange-400 px-3.5 py-3 text-base font-semibold leading-8 text-white hover:bg-orange-500"
                  >
                    Get started
                  </Button>
                </form>
                <div className="my-3 text-center text-xl text-white font-semibold leading-tight">
                  or
                </div>
                <div className="mt-3 space-y-3">
                  <Button
                    type="button"
                    leftIcon={<BsGithub className="w-5 h-5" />}
                    className="w-full h-12 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border border-gray-500 rounded-md shadow-xl hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                  >
                    Sign in with Github
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
