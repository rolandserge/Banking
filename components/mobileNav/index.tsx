"use client"

import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Footer from '../footer'
  

export default function MobileNav({ user }: MobileNavProps) {

    const pathname = usePathname()

    return (
       <section className='w-full max-w-[264px]'>
            <Sheet>
                <SheetTrigger>
                    <Image
                        src="/icons/hamburger.svg"
                        width={30} height={30}
                        alt='hamburger icon'
                        className='cursor-pointer'
                    />
                </SheetTrigger>
                <SheetContent side="left" className='border-none bg-white'>
                    <Link 
                        href="/"
                        className='cursor-pointer flex items-center gap-1 px-4'
                    >
                        <Image
                            src="/icons/logo.svg"
                            width={34} height={34}
                            alt='The logo at the plateform'
                        />
                        <h1 className='text-26 font-imb-plex-serif font-bold text-black-1'>Horizon</h1>
                    </Link>

                    <div className='mobilenav-sheet'>
                        <SheetClose asChild>
                            <nav className='flex h-full flex-col gap-6 pt-16 text-white'>
                                {sidebarLinks.map((item, index: number) => {

                                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

                                    return (
                                        <SheetClose asChild key={index}>
                                            <Link 
                                                href={item.route}
                                                className={cn("mobilenav-sheet_close w-full", {'bg-bank-gradient': isActive})}
                                            >
                                                <div className='relative size-6'>
                                                    <Image
                                                        src={item.imgURL}
                                                        alt={item.label}
                                                        className={cn({'brightness-[3] invert-0': isActive})}
                                                        height={20} width={20}
                                                    />
                                                </div>
                                                <p className={cn('text-16 font-semibold text-black-2', {'text-white': isActive})}>
                                                    {item.label}
                                                </p>
                                            </Link>
                                        </SheetClose>
                                    )
                                })}

                                USER
                            </nav>
                        </SheetClose>

                        <Footer user={user} type='mobile' />
                    </div>

                </SheetContent>
            </Sheet>
       </section>
    )
}
