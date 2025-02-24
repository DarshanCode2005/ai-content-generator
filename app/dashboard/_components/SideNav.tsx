"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import {FileClock, Home, Settings, WalletCards} from 'lucide-react'
import { usePathname } from 'next/navigation'


function SideNav() {
    const MenuList = [
        {
            name: "Home",
            icon: Home,
            path: '/dashboard'
        },
        {
            name: "History",
            icon: FileClock,
            path: '/dashboard/history'
        },
        {
            name: "Billing",
            icon: WalletCards,
            path: '/dashboard/billing'
        },
        {
            name: "Setting",
            icon: Settings,
            path: '/dashboard/setting'
        }
    ]

    const path = usePathname();
    useEffect( () => {
        
    })
  return (
    <div className='h-screen bg-white p-5 shadow-sm border'>
        <div className='flex justify-center items-center'>
                <Image src={'/logo.svg'} alt='logo' width={82} height={82}></Image>
                <p className='ml-1'>SmartScribe</p>
        </div>
        <hr className='my-6 border'/>
        <div className='mt-3'>
            {MenuList.map((menu) => {
                    return (
                        <div className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer ${path == menu.path&& 'bg-primary text-white'}`} key={menu.name}>
                            <menu.icon/>
                            <h2>{menu.name}</h2>
                        </div>
                    )
                })}
        </div>
    </div>
  )
}

export default SideNav
