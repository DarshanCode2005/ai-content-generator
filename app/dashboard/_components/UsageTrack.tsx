"use client"
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { AIOutput } from '@/utils/schema'
import { db } from '@/utils/db'
import { eq } from 'drizzle-orm'
import { HISTORY } from '../content/[template-slug]/page'


function UsageTrack() {

    const {user} = useUser()
    const [totalUsage,setTotalUsage] = useState<number>(0)
    
  
    
    useEffect(() => {
        user&&GetData();
    },[user])

    const GetData = async() => {
        {/*@ts-ignore */}
        const result:HISTORY[] = await db.select().from(AIOutput).where(eq(AIOutput.createdBy,user?.primaryEmailAddress?.emailAddress))
        GetTotalUsage(result)
    }

    
    
    const GetTotalUsage=(result:HISTORY[]) => {
        let totalWords:number = 0
        result.forEach(() => {
            totalWords = result.reduce((acc, element) => {
                return acc + (element.aiResponse?.split(' ').length ?? 0);
            }, 0);
        })

        console.log(`Total words count: ${totalWords}`)
        setTotalUsage(totalWords)

    }
  
    return (

    <div className='m-5'>
      <div className='bg-primary text-white p-3 rounded-lg'>
        <h2 className='font-medium'>Credits</h2>
        <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3'>
            <div className='h-2 bg-white rounded-full' style={{
                width: `${totalUsage/100}%`
            }}></div>
        </div>
        <h2 className='text-sm my-2'>{totalUsage}/10,000 credits used</h2>
      </div>
    <Button className='w-full my-3' onClick={() => window.location.href = '/dashboard/billing'}>Upgrade</Button>
    </div>
  )
}

export default UsageTrack
