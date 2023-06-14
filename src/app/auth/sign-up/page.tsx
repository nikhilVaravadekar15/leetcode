"use client"

import {
  BsGithub
} from 'react-icons/bs'
import {
  HiArrowNarrowLeft,
  HiArrowNarrowRight,
} from 'react-icons/hi'
import React, { useState } from 'react'
import Link from 'next/link'
import { TSignup } from '@/types'
import { useForm } from '@mantine/form';
import { auth } from '@/firebase/firebase'
import { useRouter } from 'next/navigation';
import CustomLoader from '@/components/CustomLoader'
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from 'react-toastify'
import { checkSpecialCharacters, validateEmail } from '@/utility/utilities'
import { Button, Notification, PasswordInput, TextInput } from '@mantine/core'
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';


export default function Signup() {
  const router = useRouter();
  const [success, setSuccess] = useState<boolean>(false)
  const [userAuthState, loadingAuthState, errorAuthState] = useAuthState(auth);
  const [sendEmailVerification, sending, emailVerificationError] = useSendEmailVerification(auth);
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

  const form = useForm<TSignup>({
    initialValues: {
      fullname: "",
      email: "",
      password: ""
    },

    validate: {
      fullname: (value: string) => (
        value == "" || checkSpecialCharacters(value)
          ? 'Invalid full name' : null
      ),
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

  async function submitUserSignupDetails(values: TSignup) {
    try {
      const newUser = await createUserWithEmailAndPassword(values.email, values.password)
      if (!newUser) {
        toast.error(
          `User with email id "${form.values.email}" already exists`,
          {
            position: toast.POSITION.TOP_CENTER
          }
        );
      }
      else {
        try {
          const emailVerificationSuccess = await sendEmailVerification()
          if (emailVerificationSuccess) {
            setSuccess(true)
          }
        }
        catch (error: any) {
          console.log(error);
        } finally {
          setTimeout(() => {
            setSuccess(false)
            router.push("/auth/sign-in")
          }, 5000)
        }
      }
    } catch (error: any) {
      console.log(error);
    }
  }

  if (error || emailVerificationError) {
    if (error?.code != "auth/email-already-in-use") {
      toast.error(
        "Something went wrong, please try again!",
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
        success && (
          <div className="absolute z-20 top-4 left-[50%] translate-x-[-50%]">
            <Notification
              title="Horray!!"
              classNames={{
                root: "bg-dark-layer-1",
                title: "text-white",
                body: "text-white"
              }}
              onClose={() => setSuccess(false)}
              icon={<div className="cursor-pointer">🤘</div>}
            >
              <span>{"We'd like to notify you that we've sent a verification mail to "}</span>
              <span className="font-bold">{form.values.email}</span>
            </Notification>
          </div>
        )
      }
      {
        loadingAuthState || loading && (
          <div className="absolute z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <CustomLoader />
          </div>
        )
      }
      <div className={`relative h-screen flex items-center justify-center ${loading && "pointer-events-none"}`}>
        <div className="flex items-center justify-center my-4">
          <div className="bg-gradient-to-r from-orange-400 via-pink-400 to-teal-400 p-1 rounded-md">
            <div className="flex gap-2 flex-col px-4 py-4 bg-dark-layer-1 sm:px-4 lg:px-6 sm:py-8 lg:py-12">
              <Link href={"/"} className="flex gap-2 items-center cursor-pointer font-bold text-white">
                <HiArrowNarrowLeft className="w-5 h-5" />
                <span className="text-xl leading-tight sm:text-2xl">Home</span>
              </Link>
              <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Sign Up
                </h2>
                <p className="mt-2 text-base text-gray-300">
                  Already have an account?{" "}
                  <Link
                    href={"/auth/sign-in"}
                    className="font-medium text-orange-400 transition-all duration-200 hover:text-orange-500 hover:underline focus:text-orange-500"
                  >
                    Sign In
                  </Link>
                </p>
                <form
                  className="space-y-4 my-3"
                  onSubmit={form.onSubmit((values: TSignup) => {
                    toast.dismiss();
                    submitUserSignupDetails(values)
                  })}
                >
                  <TextInput
                    id="fullname"
                    name="fullname"
                    label="Full name"
                    spellCheck={false}
                    withAsterisk={true}
                    autoComplete="off"
                    placeholder="Enter your full name"
                    {...form.getInputProps('fullname')}
                    inputWrapperOrder={['label', 'input', 'error']}
                    classNames={{
                      label: "text-base font-medium text-white",
                      input: "h-10 w-full py-2 px-3 text-sm flex text-white bg-transparent border border-gray-300 rounded-md placeholder:text-gray-400 focus:outline-none focus:border-orange-300"
                    }}
                  />
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
                  <p className="my-1 px-7 text-center">
                    <span className="text-gray-300 text-sm">
                      Read our{" "}
                      <span className="capitalize cursor-pointer text-blue-300 hover:text-blue-400">
                        privacy policy
                      </span>{" "}
                      and{" "}
                      <span className="capitalize cursor-pointer text-blue-300 hover:text-blue-400">
                        terms of service
                      </span>{" "}
                      to learn more
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
