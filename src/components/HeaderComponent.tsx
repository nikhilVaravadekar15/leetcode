import {
    AiOutlineLogout
} from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { auth } from '@/firebase/firebase';
import { toast, ToastContainer } from 'react-toastify';
import { Avatar, Button, Tooltip } from '@mantine/core';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';

export default function HeaderComponent() {
    const router = useRouter()
    const [signOut, loadingSignOut, errorSignOut] = useSignOut(auth);
    const [userAuthState, loadingAuthState, errorAuthState] = useAuthState(auth);

    async function signOutUser() {
        try {
            const success = await signOut();
            if (success) {
                router.push("/auth/sign-in")
            }
        } catch (error: any) {
            console.log(error)
            toast.error(
                "Something went wrong, please try again!",
                {
                    position: toast.POSITION.TOP_CENTER
                }
            );
        }
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
            <header className="w-full h-[8vh] py-2 flex items-center justify-between">
                <Link href={userAuthState ? "/problem/set" : "/"} className="cursor-pointer">
                    <Image
                        width={128} height={64} draggable={false}
                        src="/assets/images/logo-full.png" alt="logo" />
                </Link>
                {
                    userAuthState ? (
                        <div className="w-1/3 flex gap-2 items-center justify-end">
                            <Tooltip label={`${userAuthState?.email}`}>
                                {
                                    userAuthState?.photoURL ? (
                                        <Image
                                            width={48}
                                            height={48}
                                            alt={`${userAuthState?.displayName}`}
                                            draggable="false"
                                            className="border border-gray-200 cursor-pointer rounded-full"
                                            src={`${userAuthState?.photoURL}`}
                                        />
                                    ) : (
                                        <Avatar
                                            color="orange" size={'md'} radius="xl"
                                            className="cursor-pointer"
                                        ></Avatar>
                                    )
                                }
                            </Tooltip>
                            <Tooltip label="Logout">
                                <Button
                                    onClick={() => signOutUser()}
                                    className="p-1 flex gap-2 items-center justify-center cursor-pointer text-orange-500 bg-dark-label-2 border border-orange-500 rounded-lg shadow-xl hover:text-white hover:bg-orange-500"
                                >
                                    <AiOutlineLogout className="w-6 h-6" />
                                </Button>
                            </Tooltip>
                        </div>
                    ) : (
                        <div className="flex gap-4 items-center">
                            <Link
                                href={"/auth/sign-in"}
                                className="px-3 py-2 sm:px-5 sm:py-3 font-bold rounded-full text-white shadow-xl cursor-pointer bg-orange-400 hover:bg-orange-500"
                            >
                                sign in
                            </Link>
                        </div >
                    )
                }

            </header >
        </>
    )
}
