import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
import { useRouter } from "next/router";
import { useAuthState } from 'react-firebase-hooks/auth'
import { useState } from "react";
import { useRef } from "react/cjs/react.production.min";
import { auth } from "../firebase"

function Header() {
    const router = useRouter();
    const [user] = useAuthState(auth);


    const signOff = () => {
        signOut(auth).then(() => {
            router.push('/')
        }).catch((error) => {
            alert(error.message);
        });
    }

    return (
        <div className='shadow-sm flex justify-between p-6 items-center border-b bg-white sticky top-0 z-50'>
            <p className='bg-black text-white rounded-lg hover:text-black p-3 transition-all ease-in-out hover:bg-white'>
                {`Hello, ${user?.email}`}
            </p>
            <button className='bg-black text-white rounded-lg hover:text-black p-3 transition-all ease-in-out hover:bg-white text-sm font-bold' onClick={signOff}>
                Logout
            </button>
        </div>
    )
}

export default Header
