import Header from '@/components/Header'
import React from 'react'

export default function Page() {
    return (
        <section>
            <Header />
            <div className='grid p-10 md:grid-cols-3 md:p-16 gap-10'>
                <div className='col-span-2 flex justify-center items-center flex-col gap-6'>
                    <div className='flex flex-col items-start w-full'>
                        <label className='mb-2 font-semibold'>PATTERN TYPE</label>
                        <input type="text" className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' />
                    </div>
                    <div className='flex flex-col items-start w-full'>
                        <label className='mb-2 font-semibold'>DRAWING TECHNIQUE</label>
                        <input type="text" className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' />
                    </div>
                    <div className='flex flex-col items-start w-full'>
                        <label className='mb-2 font-semibold'>COLOR PALETTE</label>
                        <input type="text" className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' />
                    </div>
                    <div>
                        <button className='px-8 py-3 bg-black text-white rounded-2xl hover:bg-gray-800 transition-colors'>Generate</button>
                    </div>
                </div>
                <div className='col-span-1 md:p-10'>
                    <p className=' font-bold'>
                        Upload your picture and get a unique, custom design for your products. Transform your style with personalized patterns perfect for clothing, accessories, home decor, and more, Make your mark with our bespoke desgign service today!
                    </p>
                </div>
            </div>
        </section>
    )
}
