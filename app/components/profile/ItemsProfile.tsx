"use client";
import React from 'react';
import Person2Icon from '@mui/icons-material/Person2';
import HistoryIcon from '@mui/icons-material/History';
import InfoIcon from '@mui/icons-material/Info';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import { pink } from '@mui/material/colors';

interface IconMapType {
  [key: string]: JSX.Element;
}

const iconMap: IconMapType = {
  'تنظیمات کاربری': <Person2Icon />,
  'تاریخچه سفارشات': <HistoryIcon />,
  'قوانین و مقررات': <WorkHistoryIcon />,
  'علاقه مندی ها': <InfoIcon />,
};

interface ItemsProfileProps {
  title: string;
  value: number;
  isSelected: boolean;
  onClick: () => void;
}

const ItemsProfile = ({ title, value, isSelected, onClick }: ItemsProfileProps) => {
  const iconColor = isSelected ? '#fce4ec' : pink[700];
  const textColor = isSelected ? 'text-white' : 'text-pink-700';

  return (
    <div
      className={`my-2 w-full flex items-center gap-5 p-2 rounded-xl hover:text-white ${
        isSelected ? 'bg-pink-600' : ''
      }`}
      onClick={onClick}
    >
      <div className="relative w-7 h-7">
        {React.cloneElement(iconMap[title], { sx: { color: iconColor } })}
      </div>
      <p
        className={`hover:underline hover:underline-offset-8 hover:cursor-pointer ${textColor} `}
      >
        {title}
      </p>
    </div>
  );
};

export default ItemsProfile;