"use client";
import React, { useContext } from 'react';
import ItemsProfile from './ItemsProfile'
import MyContext from '@/context/MyContext';
interface DataType {
    id: number;
    title: string;
    value: number;
  }

const data: DataType[] =[{
    id:0,
    title:"تنظیمات کاربری",
    value:0},
    {
        id:1,
        title:"تاریخچه سفارشات",
        value:1},

        {
            id: 2,
            title: 'قوانین و مقررات',
            value: 2,
        },
        {
            id: 3,
            title: 'علاقه مندی ها',
            value: 3,
        },
]


const MenuItems = () => {
  const { selectedValue, setSelectedValue} = useContext(MyContext);
    

    const handleClick = (value: number) => {
      setSelectedValue(value);
    };
    
  return <>
  {data.map((item) => (
        <ItemsProfile
          key={item.id}
          title={item.title}
          value={item.value}
          isSelected={selectedValue === item.value}
          onClick={() => handleClick(item.value)}
        />
      ))}
  </>
}

export default MenuItems