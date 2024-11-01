"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { GoHome } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";

const Sidebar = () => {
    // const [nav, setNav] = useState([]);
    const navs = [
        { title: "Home", icon: <GoHome className='size-6' />, href: "/" },
        { title: "Search", icon: <IoSearchOutline className='size-6' />, href: "/s" },
        { title: "Notifications", icon: <GoHome className='size-6' />, href: "/d" },
        { title: "Templates", icon: <GoHome className='size-6' />, href: "/s" },
    ]

    console.log(usePathname())

    return (
        <aside className='bg-[#000000]'>
            <nav className='px-12 py-6'>
                <ul className='flex flex-col gap-4'>
                    {navs?.map((nav) => (
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        <li key={nav.title}><Link href="/" className={`font-medium px-4 py-2 rounded-2xl flex items-center gap-2 group text-[#787878] hover:text-[#FFFFFF] hover:bg-[#242529] w-fit ${usePathname() === nav.href && "bg-[#242529] text-[#FFFFFF]"}`}>{nav.icon}{nav.title}</Link></li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar