import Image from 'next/image';
import CardDate from './Date';
import ViewAttendence from './ViewAttendence';

function Container() {

    let now = new Date();
	//console.log(now);
	let day = now.getDate();
	let month = now.getMonth()+1;
	let year = now.getFullYear();

    let today = day + "/" + month + "/" + year;
    
    return (
        <div className='relative h-screen'>
            <div className='w-screen'>
                <Image src='https://ak.picdn.net/shutterstock/videos/20344780/thumb/1.jpg'
                    layout='fill'
                />
            </div>
            <div className='absolute px-20 z-20 text-center justify-center w-full py-1 flex items-center space-x-5 mt-5'>
                <p className='text-gray-400 text-lg '>Attendence</p>
                <p className='font-bold text-white text-2xl '>Management</p>
            </div>
            <div className='flex absolute text-center z-20 w-full top-20 justify-center items-center'>
                <CardDate title='Date' description={today}/>
            </div>

            <div className='flex absolute text-center z-20 w-full top-36 justify-center items-center'>
                <ViewAttendence title='Date' description={today}/>
            </div>
            
        </div>
    )
}

export default Container
