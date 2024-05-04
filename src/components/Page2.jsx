import { Link } from "react-router-dom";
import AnimatedPage from "./Pageanimation";

function BackButton() {
    return (
        <Link to="/" class=" absolute top-0 left-0 mt-4 ml-4  cursor-pointer "><img class="md:w-24 md:h-24 w-16 h-16 hover:w-[100px] hover:h-[100px]" src="https://www.pngall.com/wp-content/uploads/12/Previous-Button-PNG-Images.png" alt="Back" /></Link>
    );
}

export default function Page2() {
    return (
        <AnimatedPage>
            <div>
                <BackButton />

                {/* Monkey */}
                <span className="monkey flex justify-center items-center mt-32 relative">
                    <img src="https://pngfre.com/wp-content/uploads/monkey-png-image-from-pngfre-2.png" alt="" className="md:w-[450px] md:h-96 w-72 z-10 mr-10 md:mr-10 drop-shadow-2xl shadow-black " />
                </span>
                {/* CLoud */}
                <span className="cloud flex justify-start items-center mt-56 absolute bottom-96 right-56">
                    <img src="https://cdn.pixabay.com/photo/2014/04/02/10/56/cloud-304979_1280.png" alt="" className="md:w-80 md:h-60 w-96 h-36 ml-96 md:ml-0 relative" />
                    <span className="absolute poetsen-one-regular text-center  md:text-2xl text-lg w-60 mb-6 md:ml-10 ml-[368px] mt-[-28px] md:mt-[-40px]">Hi, I am Mizo !</span>
                    <span className="absolute poetsen-one-regular text-center  md:text-2xl text-lg w-60 mb-6 md:ml-10 ml-[393px] mt-4 md:mt-12">and I love Bananas 🍌</span>
                </span>

                {/* Button Next */}
                <Link to="/page3" className='bg-gradient-to-r from-orange-500 to-yellow-400   px-7 py-2 rounded-md border-4 absolute md:bottom-5  bottom-24 md:right-[620px] right-24 md:text-8xl text-5xl poetsen-one-regular border-yellow-200 text-white transition-transform transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 shadow-xl shadow-black'>Next</Link>
            </div>
        </AnimatedPage>
    )
}