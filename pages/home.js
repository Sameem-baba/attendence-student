import { auth } from "../firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import Sidebar from "../components/Sidebar";
import Container from "../components/Container";

function Home() {
    const [user] = useAuthState(auth);
    
    return (
        <div className=''>
            <div className='flex'>
                <Sidebar />
                <div className='w-screen text-center flex flex-col justify-center items-center'>
                    <Container />
                </div>
            </div>
        </div>
    )
}

export default Home
