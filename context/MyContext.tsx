"use client";
import React, { createContext, ReactNode } from 'react';

interface MyContextType {
  // define the shape of your context data here
  myData: string;
  selectedValue:number
  setSelectedValue:React.Dispatch<React.SetStateAction<number>>;
  setMyData: React.Dispatch<React.SetStateAction<string>>;
}

const MyContext = createContext<MyContextType>({
  myData: '',
  selectedValue:0,
   setSelectedValue:()=>{},
  setMyData: () => {},
});

interface MyContextProviderProps {
  children: ReactNode;
}

export const MyContextProvider = ({ children }: MyContextProviderProps) => {
  const [myData, setMyData] = React.useState('hi context');
  const [selectedValue, setSelectedValue] = React.useState(0);

  return (
    <MyContext.Provider value={{ myData, setMyData,selectedValue, setSelectedValue }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;