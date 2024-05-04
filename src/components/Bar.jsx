import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DynamicBar({ matchedPairs = [] }) {
    const navigate = useNavigate();

    useEffect(() => {
        // Check if progress is 100% and navigate to the winner page
        const progress = (matchedPairs.length / 12) * 100; // Dividing by 6 instead of 12, as each pair counts as 2
        if (progress === 100) {
            navigate('/winner');
        }
    }, [matchedPairs, navigate]);

    return (
        <div className='flex h-5 '>
            <div className="dynamic-bar relative bg-gray-300 text-white flex items-center justify-between overflow-hidden rounded-md md:w-[500px] w-60 p-1 top-10 md:top-16 left-[-30px] border border-black">
                <span className="w-60 absolute px-3 poetsen-one-regular">{matchedPairs.length / 2} / 6</span>
                <div className="progress-bar h-4 bg-gradient-to-r from-pink-700 to-blue-700 rounded-md" style={{ width: `${(matchedPairs.length / 12) * 100}%` }}></div>
            </div>
            <img src="https://static.vecteezy.com/system/resources/previews/009/584/950/non_2x/cute-and-smile-cartoon-fruit-colorful-character-banana-free-png.png" alt="Banana" className='md:w-14 md:h-24 w-8 h-12 z-auto md:right-96  flex absolute left-[200px] md:left-[450px] top-6' />
        </div>
    );
}
