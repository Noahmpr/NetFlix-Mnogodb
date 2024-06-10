import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

import Profile from "@/app/components/profile/Profile";

const page = async () => {

    const session = await getServerSession(authOptions);

  return (
    <div className='grid grid-cols-4 gap-4 text-black h-full'>
        <Profile session={session} />
    </div>
  )
}

export default page