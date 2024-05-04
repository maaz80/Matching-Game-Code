import { useEffect, useState } from 'react';
import DynamicBar from './Bar';
import { Link } from 'react-router-dom';
import Fruits from '../Data/Fruits';
import AnimatedPage from './Pageanimation';

export default function Game() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [fruit, setFruit] = useState([]);
    const [clickedCardImg, setClickedCardImg] = useState(null);
    const [clickedCardName, setClickedCardName] = useState(null);
    const [isPinkTurn, setIsPinkTurn] = useState(true);
    const [matchedPairs, setMatchedPairs] = useState([]);

    async function fetchData() {
        setLoading(true);
        try {
            setFruit(Fruits);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    function handleClickedImage(fruitItem) {
        if (isPinkTurn && !matchedPairs.includes(fruitItem.name)) {
            setClickedCardImg(fruitItem.name);
            setIsPinkTurn(false);
            if (clickedCardName === fruitItem.name) {
                setMatchedPairs([...matchedPairs, clickedCardName, fruitItem.name]);
                setClickedCardName(null);
                setClickedCardImg(null);
            }
        }
    }

    function handleClickedName(fruitItem) {
        if (!isPinkTurn && !matchedPairs.includes(fruitItem.name)) {
            setClickedCardName(fruitItem.name);
            setIsPinkTurn(true);
            if (clickedCardImg === fruitItem.name) {
                setMatchedPairs([...matchedPairs, clickedCardImg, fruitItem.name]);
                setClickedCardName(null);
                setClickedCardImg(null);
            } else {
                setTimeout(() => {
                    setMatchedPairs([]);
                    setClickedCardImg(null);
                    setClickedCardName(null);
                    setIsPinkTurn(true);
                }, 500); // Hide cards after 1 second if not matched
            }
        }
    }
        function BackButton() {
            return (
                <Link to="/page4" class=" absolute top-0 left-0 mt-4 ml-4  cursor-pointer "><img class="md:w-24 md:h-24 w-16 h-16 hover:w-[100px] hover:h-[100px]" src="https://www.pngall.com/wp-content/uploads/12/Previous-Button-PNG-Images.png" alt="Back" /></Link>
            );
        }

        return (
            <AnimatedPage>
                <div>
                    <BackButton />
                    <div className='flex justify-center items-center absolute top-20 left-20 md:top-0 md:left-[570px]'>
                        <DynamicBar matchedPairs={matchedPairs} />
                    </div>

                    {/* Cards  */}
                    <div className="flex mt-12">
                        {/* Red Cards */}
                        <div className="main1 w-[50%] flex flex-wrap md:gap-10 gap-2 md:ml-32 ml-6 ">
                            {fruit.map((fruitItem) => (
                                <div key={fruitItem.id} className='flex flex-wrap'>
                                    <div className="red md:h-52 md:w-40 h-24 w-[70px] bg-gradient-to-r from-pink-500 to-pink-300 border-4 rounded-md flex-wrap border-white shadow-lg shadow-black mt-10 flex justify-center items-center  hover:shadow-md hover:border-pink-300" onClick={() => handleClickedImage(fruitItem)}>
                                        {(clickedCardImg === fruitItem.name || matchedPairs.includes(fruitItem.name)) ? (
                                            <img src={fruitItem.image} alt={fruitItem.name} className='md:w-20 md:h-20 w-10 h-10 drop-shadow-md' />
                                        ) : <img src="https://em-content.zobj.net/source/emojipedia/328/light-blue-heart_.png" alt="Heart" className='h-8 w-8 md:h-14 md:w-14' />}
                                    </div>

                                </div>
                            ))}
                        </div>

                        {/* Blue Cards */}
                        <div className="main2 w-[50%] flex flex-wrap md:gap-10 gap-2 md:ml-32 mx-0">
                        {fruit.slice().reverse().map((fruitItem) => (
                            <div key={fruitItem.id} className='flex flex-wrap'>
                                <div className="blue md:h-52 md:w-40 h-24 w-[70px] bg-gradient-to-r from-blue-500 to-blue-300 border-4 rounded-md flex-wrap border-white shadow-lg shadow-black mt-10 flex justify-center items-center hover:shadow-md hover:border-blue-300" onClick={() => handleClickedName(fruitItem)}>
                                    {(clickedCardName === fruitItem.name || matchedPairs.includes(fruitItem.name)) ? (
                                        <span className='poetsen-one-regular  md:text-3xl text-sm drop-shadow-md drop-shadow-black'>{fruitItem.name}</span>
                                    ) : <img src="https://pnghq.com/wp-content/uploads/download-pink-vibrating-hearts-png-sharp-details-300x266.png" alt="Heart" className='h-7 w-8 md:h-12 md:w-14' />}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </AnimatedPage>
    );
}