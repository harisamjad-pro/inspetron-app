"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { GoHome } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";

interface NavItem {
    title: string;
    icon: React.ReactNode;
    href: string;
}

const Sidebar: React.FC = () => {
    const navs: NavItem[] = [
        { title: "Home", icon: <GoHome className='size-6' />, href: "/" },
        { title: "Search", icon: <IoSearchOutline className='size-6' />, href: "/s" },
        { title: "Notifications", icon: <IoNotificationsOutline className='size-6' />, href: "/d" },
        { title: "Templates", icon: <GoHome className='size-6' />, href: "/s" },
    ];

    const pathname = usePathname();

    return (
        <aside className='bg-[#000000] w-auto min-h-dvh border-r border-[#171717]'>
            <nav className='px-4 py-12'>
                <ul className='flex flex-col gap-4 min-w-48'>
                    {navs.map((nav) => (
                        <li key={nav.title}>
                            <Link
                                href={nav.href}
                                className={`font-medium px-4 py-3 rounded-2xl flex items-center gap-2 group text-[#787878] hover:text-[#FFFFFF] hover:bg-[#242529] w-full ${pathname === nav.href ? "bg-[#242529] text-[#FFFFFF]" : ""}`}
                            >
                                {nav.icon}
                                {nav.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
