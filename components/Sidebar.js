import { signOut } from "@firebase/auth"
import { AccountCircleSharp, DonutLargeRounded, ExitToAppRounded, RecentActorsTwoTone } from "@material-ui/icons"
import { useRouter } from "next/router";
import { auth } from "../firebase"

function Sidebar() {
    const router = useRouter();

    const signOff = () => {
        signOut(auth).then(()=>router.push('/'));
    }
   

    return (
        <div className="md:w-1/6 w-1/3 h-screen fixed bg-white shadow-2xl top-0 z-10">
            <div className='border flex justify-around p-5'>
                <p className='text-xl font-semibold'>Elrond</p>
                <p>!</p>
                <p className='text-gray-400 text-lg'>
                    Attendence
                </p>
            </div>
            <div className='p-4 space-y-8'>
                <div className='space-y-6'>
                    <h1 className='text-gray-400'>Menu</h1>
                    <div onClick={() => router.push('/home')} className=''>
                        <div className='flex space-x-4 cursor-pointer'>
                            <DonutLargeRounded className='text-gray-300'/>
                            <p className='text-gray-600 text-lg font-light'>Dashboard</p>
                        </div>
                    </div>
                    <div onClick={() => router.push('/attendence')} className=''>
                        <div className='flex space-x-4 cursor-pointer'>
                            <RecentActorsTwoTone className='text-gray-300'/>
                            <p className='text-gray-600 text-lg font-light' >Attendence</p>
                        </div>
                    </div>
                    <div onClick={() => router.push('/profile')} className=''>
                        <div className='flex space-x-4 cursor-pointer'>
                            <AccountCircleSharp className='text-gray-300'/>
                            <p className='text-gray-600 text-lg font-light'>Profile</p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex space-x-4 cursor-pointer bg-red-600 rounded-md p-3'>
                            <ExitToAppRounded className='text-gray-300'/>
                            <p className='text-gray-200 text-lg font-light' onClick={signOff}>Logout</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
