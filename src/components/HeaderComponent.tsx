import { profileMenuItems } from '@/data';
import { TSlider } from '@/types';
import { Tooltip } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineLogout } from 'react-icons/ai';

export default function HeaderComponent() {
    // const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <header className="w-full h-[8vh] py-2 flex items-center justify-between">
            <Link href="/" className="cursor-pointer">
                <Image
                    width={128} height={64} draggable={false}
                    src="/assets/images/logo-full.png" alt="logo" />
            </Link>
            <div className="w-1/3 flex gap-2 items-center justify-end">
                <Tooltip label="Profile">
                    <button className="p-2 flex gap-2 items-center justify-center cursor-pointer bg-dark-fill-3 border border-orange-500 rounded-lg shadow-xl">
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
                </Tooltip>
                <Tooltip label="Logout">
                    <button className="p-2 flex gap-2 items-center justify-center cursor-pointer text-orange-500 bg-dark-label-2 border border-orange-500 rounded-lg shadow-xl hover:text-white hover:bg-orange-500">
                        <AiOutlineLogout className="w-8 h-8" />
                    </button>
                </Tooltip>
            </div>
        </header>
    )
}
