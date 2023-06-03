import { profileMenuItems } from '@/data';
import { TSlider } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

export default function HeaderComponent() {
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
