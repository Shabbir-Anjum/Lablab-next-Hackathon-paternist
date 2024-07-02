'use client'
import React from 'react'
import Image from 'next/image';
import { useRouter } from "next/navigation";
export default function Homepage() {
    const router = useRouter();
  return (
    <section className=''>
        <main className='grid grid-cols-1 lg:grid-cols-3'>
            <div className='  p-4 flex flex-col items-center lg:justify-between gap-4'>
            <div className=' md:m-10  pt-2'>
            <Image src="/assets/images/4.png" alt="Image description" width={600} height={300} />
            </div>
            <div className=' p-4 bg-black block rounded-lg '>
            <Image className='rounded-lg' src="/assets/images/3.png" alt="Image description" width={300} height={300} />
            </div>
                <div>
                </div>
            </div>
            <div className='  p-4 flex flex-col items-center gap-8 md:py-16  '>
                <div>
                    <h1 className=' text-3xl font-bold px-10'>Design your Unique patterns</h1>
                </div>
                <div>
                <Image className='rounded-xl' src="/assets/images/2.png" alt="Image description" width={400} height={300} />
                </div>
                <div>
                    <button onClick={()=> {router.push("/generate")}} className='px-8 py-3 bg-black text-white rounded-2xl hover:bg-gray-800 transition-colors'>Generate</button>
                </div>
                <div className=' font-bold pr-10'>
                    Forget the old design rules. Everyone can design professionally with AI-powered printing pattern design tool.
                </div>
              
            </div>
            <div className='  p-4 flex flex-col items-center gap-8 md:py-16 '>
                <div>
                <h1 className=' text-3xl font-bold'>Just Few Clicks.</h1>
                <h1 className=' text-3xl font-bold'>Just in seconds.</h1>
                </div>
                <div>
                <Image className='rounded-xl' src="/assets/images/5.png" alt="Image description" width={300} height={900} />
                </div>
            </div>
        </main>
    </section>
  )
}
