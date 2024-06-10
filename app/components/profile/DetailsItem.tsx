"use client";
import React, { useContext } from 'react';
import ValueFlex from '@/app/components/profile/ValueFlex'
import MyContext from '@/context/MyContext';
const DetailsItem = ({session}:any) => {
  const { selectedValue, setSelectedValue} = useContext(MyContext);
  return (
    <div>
      {selectedValue === 0 &&<>
        <ValueFlex title={session?.user?.name}  value="نام و نام خواندگی" />
        <ValueFlex title={session?.user?.email}  value="email" />
        <ValueFlex title={session?.user?.email}  edite={true}  value="شماره همراه" />
      </>}
      {selectedValue === 1 &&<p>item{selectedValue}</p>}
      {selectedValue === 2 &&<p>item{selectedValue}</p>}
      {selectedValue === 3 &&<p>item{selectedValue}</p>}
    </div>
  )
}

export default DetailsItem