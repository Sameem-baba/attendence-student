import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase"
import { useAuthState } from 'react-firebase-hooks/auth';
import { db } from '../firebase';
import { addDoc, collection, serverTimestamp, onSnapshot, query, orderBy, doc, setDoc, deleteDoc } from '@firebase/firestore';
import Header from "../components/Header";
import { useState } from "react";

function Home() {
    const [user] = useAuthState(auth);

    const addPresent = async () => {
        await setDoc(doc(db, 'attendence', 'user', 'present', user.email), {
            username: user?.email,
        }).then((user) => {alert('You Have been marked as present')}).catch((err) => alert(err.message));
    }
    
    const addAbsent = async () => {
         await deleteDoc(doc(db, 'attendence', user.email, 'present', user.uid)).then((user) => {alert('You Have been marked as absent')}).catch((err) => alert(err.message));;
    }
    
    return (
        <div className=''>
            <Header />
            
            <main className="h-full w-full items-center  justify-center flex flex-col">
                <h1 className='mt-5'>Attendence</h1>
                <div className="flex justify-between items-center mt-5 space-x-5">
                    <button onClick={addPresent} className="bg-green-500 p-3 rounded-lg">
                        Present
                    </button>
                    <button onClick={addAbsent} className='bg-red-500 p-3 rounded-lg'>
                        Absent
                    </button>
                </div>
            </main>
        </div>
    )
}

export default Home
