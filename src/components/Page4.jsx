import DynamicBar from './Bar';
import { Link } from 'react-router-dom';
import AnimatedPage from './Pageanimation';

export default function Page4() {

    function BackButton() {
        return (
            <Link to="/page3" class=" absolute top-0 left-0 mt-4 ml-4  cursor-pointer "><img class="md:w-24 md:h-24 w-16 h-16 hover:w-[100px] hover:h-[100px]" src="https://www.pngall.com/wp-content/uploads/12/Previous-Button-PNG-Images.png" alt="Back" /></Link>
        );
    }

    return (
        <AnimatedPage>
            <div>
                <BackButton />
                <div className='flex justify-center items-center absolute top-20 left-20 md:top-0 md:left-[570px]'>
                    <DynamicBar text="Initial text" />
                </div>
                <div className="cards flex justify-center items-center md:gap-20 gap-2">

                    {/* Card 1 */}

                    <div className="card1 bg-white text-red-500 md:h-80 md:w-60 h-44 w-28 relative rounded-2xl flex justify-center items-start  shadow-2xl shadow-black">
                        <div className="1 md:h-44 md:w-32 h-20 w-14 bg-pink-300 border-4 rounded-md absolute border-white shadow-lg shadow-black  mt-10"></div>
                        <div className="2 md:h-44 md:w-32 h-20 w-14 bg-pink-300 border-4 rounded-md absolute border-white shadow-lg shadow-black rotate-12 mt-10 flex justify-center items-center"><img src="https://pngfre.com/wp-content/uploads/apple-95-270x300.png" alt="Apple" className='md:w-14  md:h-14 w-6 h-6 rotate-12 ' /></div>
                        <div className='absolute bottom-32 left-0  text-white poetsen-one-regular text-2xl bg-yellow-400 pr-1 rounded-r border-1 border-white'>01</div>
                        <div className='poetsen-one-regular absolute md:bottom-14 bottom-7 md:text-xl text-[12px]'>Select a pink card. </div>
                        <div className='text-green-700 absolute md:bottom-7 bottom-2 md:text-md text-[15px] bebas-neue-regular '>It has image. </div>
                    </div>

                    {/* Card 2 */}

                    <div className="card2 bg-white text-red-500 md:h-80 md:w-60 h-44 w-28 rounded-2xl relative flex justify-center items-start  shadow-2xl shadow-black">
                        <div className="1 md:h-44 md:w-32 h-20 w-14 bg-blue-300 border-4 rounded-md absolute border-white shadow-lg shadow-black  mt-10 flex justify-center items-center">
                            <img src="https://em-content.zobj.net/source/emojipedia/328/light-blue-heart_.png" alt="Heart" className='h-8 w-8 md:h-10 md:w-10' />
                        </div>

                        <div className='absolute bottom-32 left-0  text-white poetsen-one-regular text-2xl bg-green-600 pr-1 rounded-r border-1 border-white'>02</div>
                        <div className='poetsen-one-regular absolute md:bottom-14 bottom-7 md:text-xl text-[12px] text-blue-600'>Select a Blue card. </div>
                        <div className='text-green-700 absolute md:bottom-7 bottom-2 md:text-md text-[15px] bebas-neue-regular '>It has Name. </div>
                    </div>

                    {/* Card 3 */}

                    <div className="card3 bg-white text-red-500 md:h-80 md:w-60 h-44 w-28 rounded-2xl relative flex justify-center items-start  shadow-2xl shadow-black">

                        <div className="1 md:h-32 md:w-20 h-16 w-10 bg-pink-300 border-4 rounded-md absolute border-white shadow-lg shadow-black -rotate-12  mt-10 -skew-y-12 left-5 md:left-9 flex justify-center items-center">
                            <img src="https://em-content.zobj.net/source/emojipedia/328/light-blue-heart_.png" alt="Heart" className='h-6 w-6 md:h-10 md:w-10' />
                        </div>
                        <div className="2 md:h-32 md:w-20 h-16 w-10 bg-blue-300 border-4 rounded-md absolute border-white shadow-lg shadow-black rotate-12 mt-10 flex justify-center items-center skew-y-12 right-3 md:right-9">

                            <img src="https://pnghq.com/wp-content/uploads/download-pink-vibrating-hearts-png-sharp-details-300x266.png" alt="Heart" className='h-5 w-6 md:h-8 md:w-10' />
                        </div>

                        <div className='absolute bottom-32 left-0  text-white poetsen-one-regular text-2xl bg-pink-700 pr-1 rounded-r border-1 border-white'>03</div>
                        <div className='text-green-700 absolute md:bottom-20 bottom-10 text-[12px] md:text-[15px] bebas-neue-regular '>If they're same </div>
                        <div className='poetsen-one-regular absolute md:bottom-14 bottom-6 md:text-xl text-[15px]  bg-gradient-to-r from-red-600 to-blue-600 text-transparent bg-clip-text'>It's a match. </div>
                        <div className='text-green-700 absolute md:bottom-7 bottom-2 md:text-[15px] text-[12px] bebas-neue-regular '>otherwise retry. </div>
                    </div>
                </div>

                {/* Dotted lines */}
                <div className="connector absolute  bottom-48 left-[485px] flex justify-center items-center pointer-events-none">
                    <svg height="100%" width="100%">
                        <path d="M 80 80 Q 100 40 160 80" fill="none" stroke="white" strokeWidth="4" strokeDasharray="5 5" />
                    </svg>
                </div>

                <div className="connector absolute  bottom-96 right-[428px] flex justify-center items-center pointer-events-none">
                    <svg height="100%" width="100%">
                        <path d="M 80 80 Q 100 40 160 80" fill="none" stroke="white" strokeWidth="4" strokeDasharray="5 5" />
                    </svg>
                </div>
                <div>

                    {/* Play button */}
                    <Link to="/game" className='bg-gradient-to-r from-orange-500 to-yellow-400   px-7 py-2 rounded-md border-4 absolute md:bottom-5  bottom-24 md:right-[620px] right-24 md:text-8xl text-5xl poetsen-one-regular border-yellow-200 text-white transition-transform transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 shadow-xl shadow-black'>Play</Link>
                </div>
            </div>
        </AnimatedPage>
    )
}