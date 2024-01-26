import React from 'react'
import Block from './Block'

const Header1 = () => {
  return (
    <div className='flex justify-between border-b-2 border-gray-300 items-center h-20 px-10'>
     <img src="/logo.png" alt="logo" width={200} height={200} className='w-28 h-24'/>
     
     
      <div className='border-r-2 border-gray-200 h-full flex '>

        <Block title={'Become a member'} para={'additional 10% off on stay. '}/>
        <Block  title={'OYO for business'} para={'Trusted by 5000 corporates. '} />
        <Block  title={'List your property'} para={'start earning in 30 min. '}/>
        <Block  title={'9131005392'} para={'Call us to book now. '}/>
        <div className='flex items-center px-2 gap-2' >
         <img src={"./demo.svg"} alt="demo" width={200} height={200}  className='w-10 h-10 rounded-full'/>
         <h3 className='font-bold'>Login/Signup</h3>
        </div>
      </div>
     </div>

  )
}

export default Header1