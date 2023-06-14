"use client"

import {
  HiArrowNarrowLeft,
  HiArrowNarrowRight,
} from 'react-icons/hi'
import React, { useState } from 'react'
import Link from 'next/link'
import { TEmail } from '@/types';
import { useForm } from '@mantine/form';
import { useRouter } from 'next/navigation';
import { auth } from '@/firebase/firebase';
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from 'react-toastify';
import { validateEmail } from '@/utility/utilities';
import CustomLoader from '@/components/CustomLoader';
import { Button, Notification, TextInput } from '@mantine/core';
import { useAuthState, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';

const actionCodeSettings = {
  url: process.env.NEXT_PUBLIC_APP_URL + "/auth/sign-in",
};

export default function ForgotPassword() {
  const router = useRouter();
  const [success, setSuccess] = useState<boolean>(false)
  const [userAuthState, loadingAuthState, errorAuthState] = useAuthState(auth);
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

  const form = useForm<TEmail>({
    initialValues: {
      email: ""
    },

    validate: {
      email: (value: string) => (
        validateEmail(value) ? null : "Invalid email"
      )
    }
  });

  async function submitForgotPasswordDetails(values: TEmail) {
    try {
      const success = await sendPasswordResetEmail(
        values.email,
        actionCodeSettings
      );
      if (success) {
        setSuccess(true)
        setTimeout(() => {
          setSuccess(false)
          router.push("/auth/sign-in")
        }, 5000)
      }
    } catch (error: any) {
      console.log(error)
    }
  }

  if (error) {
    if (error.message != "auth/user-not-found") {
      toast.error(
        `User with email id "${form.values.email}" does not exists`,
        {
          position: toast.POSITION.TOP_CENTER
        }
      );
    } else {
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
              icon={<div className="cursor-pointer">✌️</div>}
            >
              <span>{"We'd like to notify you that we've sent a password reset mail to "}</span>
              <span className="font-bold">{form.values.email}</span>
            </Notification>
          </div>
        )
      }
      {
        loadingAuthState || sending && (
          <div className="absolute z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <CustomLoader />
          </div>
        )
      }
      <div className={`relative h-screen flex items-center justify-center ${sending && "pointer-events-none"}`}>
        <div className="flex items-center justify-center my-4">
          <div className="bg-gradient-to-r from-orange-400 via-pink-400 to-teal-400 p-1 rounded-md">
            <div className="flex gap-2 flex-col px-4 py-4 bg-dark-layer-1 sm:px-4 lg:px-6 sm:py-8 lg:py-12">
              <Link href={"/"} className="flex gap-2 items-center cursor-pointer font-bold text-white">
                <HiArrowNarrowLeft className="w-5 h-5" />
                <span className="text-xl leading-tight sm:text-2xl">Home</span>
              </Link>
              <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Forgot password
                </h2>
                <p className="mt-2 text-base text-gray-300">
                  {"Forgotten your password? Enter your e-mail address below, and we'll send you an e-mail allowing you to reset it."}
                </p>
                <form
                  className="space-y-4 my-3"
                  onSubmit={form.onSubmit((values: TEmail) => {
                    toast.dismiss();
                    submitForgotPasswordDetails(values)
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
                  <Button
                    type="submit"
                    rightIcon={<HiArrowNarrowRight className="w-4 h-4" />}
                    className="w-full h-12 rounded-md shadow-xl cursor-pointer bg-orange-400 px-3.5 py-3 text-base font-semibold leading-8 text-white hover:bg-orange-500"
                  >
                    Reset my password
                  </Button>
                </form>
                <div className="mt-3 space-y-3">
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

