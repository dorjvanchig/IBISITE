import Image from 'next/image';
import im1 from '../../../../../public/req.png';

export default function Requirment({ isDetails }) {
    if (isDetails !== 3) {
        return null; 
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <Image 
                src={im1} 
                alt="Centered Image" 
                width={800} 
                height={500} 
                className="object-contain"
            />
        </div>
    );
}
