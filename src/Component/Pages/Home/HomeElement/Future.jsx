
import { TbAugmentedReality2 } from 'react-icons/tb';
import {RiLiveFill} from 'react-icons/ri';
import {MdNotificationsActive} from 'react-icons/md';
import {BsPeopleFill} from 'react-icons/bs';
const Future = () => {
    return (
        <div className='py-10'>
                 <h1 className='text-3xl font-medium underline text-center mt-10'>Our Features</h1>
                <div className='flex justify-center '>
                <div className='m-5 p-5 bg-red-300 w-[20%] rounded-xl'>
                        <TbAugmentedReality2 className=' text-5xl'></TbAugmentedReality2>
                       <h1 className='text-2xl font-semibold'>Augmented Reality Concert Previews</h1>
                 </div>
                 <div className='m-5 p-5 bg-blue-300 w-[20%] rounded-xl'>
                        <RiLiveFill  className=' text-5xl'></RiLiveFill>
                       <h1 className='text-2xl font-semibold'>Live Streaming and Interactive Chat</h1>
                 </div>
                 <div className='m-5 p-5 bg-yellow-300 w-[20%] rounded-xl'>
                        <MdNotificationsActive  className=' text-5xl'></MdNotificationsActive>
                       <h1 className='text-2xl font-semibold'>Personalized Event Calendars and Notifications</h1>
                 </div>
                 <div className='m-5 p-5 bg-gray-300 w-[20%] rounded-xl'>
                       <BsPeopleFill className=' text-5xl'></BsPeopleFill>
                       <h1 className='text-2xl font-semibold'>Fan-Generated Content and Contests</h1>
                 </div>
                </div>

        </div>
    );
};

export default Future;