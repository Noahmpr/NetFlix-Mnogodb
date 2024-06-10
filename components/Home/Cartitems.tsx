import React from 'react'

const Cartitems = () => {
  return <>
<div
  className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
    <img
      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
      alt="ui/ux review check" />
  </div>
  <div className="p-6">
    <h4 className="block text-lg text-center  tracking-normal text-pink-700">
      نام مدل تستی
    </h4>
    <p className='text-pink-800 pt-2 '>
        توضیحات ویژگی ها برای تست برای تست
    </p>
  </div>
</div> 
  </>
}

export default Cartitems