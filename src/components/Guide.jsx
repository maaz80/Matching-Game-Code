import { Link } from "react-router-dom";

export default function Guide() {
    return (
        <div style={{ backgroundImage: `url('https://plays.org/game/pet-link-kids/img/menu_back.jpg')`, backgroundSize: 'cover' }} className="h-[1000px] md:h-full bg-cover bg-center flex justify-center items-center relative bg-no-repeat mt-72 md:mt-0 md:bg-transparent" >

            <Link to="/" class=" absolute top-0 left-0 mt-4 ml-4  cursor-pointer "><img class="md:w-24 md:h-24 w-16 h-16 hover:w-[100px] hover:h-[100px]" src="https://www.pngall.com/wp-content/uploads/12/Previous-Button-PNG-Images.png" alt="Back" /></Link>

            <div className="container mx-3 px-4 py-8 bg-white  bg-opacity-80 rounded-lg shadow-lg mt-20 ">
                <h1 className="text-3xl text-center mb-6 font-bold text-blue-900">Welcome to the Fruit Matching Game Guide</h1>
                <div className="p-6">
                    <h2 className="text-xl mb-4 font-semibold text-blue-900 underline">How to Play the Fruit Matching Game</h2>
                    <p className="mb-4 text-blue-900">
                        Welcome to the Fruit Matching Game! Here's how to play:
                    </p>
                    <ol className="list-decimal pl-6 mb-4 text-blue-900 gap-5 flex flex-col">
                        <li>Click on any red card to reveal the fruit image.</li>
                        <li>Click on any blue card to reveal the fruit name.</li>
                        <li>Try to match each fruit image with its corresponding name.</li>
                        <li>Keep track of the matched pairs.</li>
                        <li>Remember where each fruit is located, as the cards will be hidden again if they don't match.</li>
                        <li>Continue until all pairs are matched.</li>
                    </ol>
                    <p className="mb-6 text-blue-900">
                        Enjoy playing and have fun!
                    </p>
                </div>
            </div>
        </div>
    );
}
