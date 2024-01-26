"use client"
import React from 'react'

import Header1 from '@/components/Header1'
import Header2 from '@/components/Header2'
import Header3 from '@/components/Header3'
import Head from 'next/head';
import Header4 from '@/components/Header4'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div> 
     <Head>
        <title>OYO: India's Best Online Hotel Booking Site For Sanitized Stay.</title>
        <link rel="icon" href="/icon.png" />
      </Head>
     
      <Header1/>
      <Header2/>
      <Header3/>
      <div className='mx-20'>
      <div className=' my-14'>
        <img src="/banner1.avif" alt="banner1" width={200} height={200} className='h-70 w-full' />
      </div>
      <div className='mb-14'>
      <img src="/banner2.avif" alt="banner1" width={200} height={200} className='h-40 w-full' /> 
      </div>
      <Header4/>

    </div>
    <Footer/>
    </div>

  )
}

export default page