import React from 'react'
import {MyContextProvider} from '@/context/MyContext'
import MenuItems from '@/app/components/profile/MenuItems';
import DetailsItem from './DetailsItem';
export default function Profile({session}:any) {
    return (
      <MyContextProvider>
       <div className="col-span-1  h-44">
        <MenuItems />
        </div>
        <div className="col-span-3 rounded-2xl border border-pink-700">
        <DetailsItem session={session}/>
        </div>
      </MyContextProvider>
    );
  }