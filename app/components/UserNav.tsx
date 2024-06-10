"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {  User } from "lucide-react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
  

export default function UserNav() {
  const {data:session,status}=useSession()
  console.log('const {data:session,status}=useSession()',session);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full border border-pink-400 p-2">
          <Avatar className="h-8 w-8">
          <User className="w-8 h-8 text-pink-400 cursor-pointer" color="#fb6fc9" />
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Amir</p>
            <p className="text-xs leading-none text-pink-700">
            {session?.user?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>
<span className="text-pink-700">          خروج</span>
          </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}