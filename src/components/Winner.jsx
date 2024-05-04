import DynamicBar from './Bar';
import { Link } from 'react-router-dom';
import AnimatedPage from './Pageanimation';

export default function Winner({ matchedPairs }) {
    function BackButton() {
        return (
            <Link to="/game" class=" absolute top-0 left-0 mt-4 ml-4  cursor-pointer "><img class="md:w-24 md:h-24 w-16 h-16 hover:w-[100px] hover:h-[100px]" src="https://www.pngall.com/wp-content/uploads/12/Previous-Button-PNG-Images.png" alt="Back" /></Link>
        );
    }

    return (
        <AnimatedPage>
            <div>
                <BackButton />
                <div className='flex justify-center items-center absolute top-0 left-[33%]'>
                    <div>
                        <div className="dynamic-bar relative bg-gray-300 text-white flex items-center justify-between overflow-hidden rounded-md md:w-[500px] w-60 p-1 top-10 md:top-16 left-[-30px] border border-black">
                            <span className="w-60 absolute px-3 poetsen-one-regular">6 / 6</span>
                            <div className="progress-bar h-4 bg-gradient-to-r from-pink-700 to-blue-700 rounded-md" style={{ width: ` 100%` }}></div>
                        </div>
                        <img src="https://static.vecteezy.com/system/resources/previews/009/584/950/non_2x/cute-and-smile-cartoon-fruit-colorful-character-banana-free-png.png" alt="Banana" className='md:w-14 md:h-24 w-8 h-12 z-auto md:right-96  flex absolute left-[200px] md:left-[450px] top-6' />
                    </div>
                </div>

                {/* Adding bananas over the card */}
                {[...Array(15)].map((_, index) => {
                    // Generate random position and animation delay
                    const left = `${Math.floor(Math.random() * 90)}%`;
                    const delay = `${Math.random() * 3}s`;
                    const top = `${Math.floor(Math.random() * 90)}%`;

                    return (
                        <img
                            key={index}
                            src="https://clipart-library.com/img/2049535.png"
                            alt="Banana"
                            className="md:w-28 md:h-24 w-14 h-12 z-50 absolute animate-drop"
                            style={{
                                left,
                                animationDelay: delay,
                                top,
                                animationName: 'dropRotate', // Apply rotation animation
                                animationDuration: '2s', // Duration of rotation
                                animationIterationCount: 'infinite', // Make the animation repeat indefinitely
                                animationTimingFunction: 'linear', // Make the animation linear
                            }}
                        />
                    );
                })}
                {/* End of additional bananas */}

                {/* Cards  */}
                {/* Glittering yellow light */}

                <div className="winnerCard flex justify-center items-center absolute z-1 shadow-md shadow-black">
                    {/* Top  */}
                    <div className="uper absolute bg-gradient-to-r from-orange-500 to-yellow-400 h-20 w-72 z-10 rounded-3xl top-[-130px] flex flex-col items-center justify-center shadow-2xl">
                        <div className='poetsen-one-regular text-white text-xl text-center'>Earned</div>
                        <div className='poetsen-one-regular text-white text-3xl text-center'>6 Banana's</div>
                    </div>

                    {/* Card  */}
                    <div className='card absolute bg-white h-96 w-72 rounded-3xl top-[-100px] flex justify-center items-center shadow-2xl shadow-black'>
                        <div className="absolute w-[3rem] h-[6rem] rounded-full bg-yellow-300 bg-opacity-10 animate-glitter z-2 left-[120px]
                        top-[180px]"></div>
                        <img src="https://pngfre.com/wp-content/uploads/monkey-png-image-from-pngfre-2.png" alt="" className="w-52 h-52 bottom-24 left-7 absolute drop-shadow-2xl shadow-black z-10" />

                        {/* Button  */}
                        <Link
                            to="/"
                            className='bg-gradient-to-r from-orange-500 to-yellow-400 px-5 py-2 rounded-md border-4 absolute bottom-5 text-4xl poetsen-one-regular border-yellow-200 text-white transition-transform transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50'
                        >
                            Yes Ok
                        </Link>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
}
