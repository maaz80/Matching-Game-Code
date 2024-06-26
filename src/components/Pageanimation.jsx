import { motion } from "framer-motion";
import { Children } from "react";

const animations = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition:  {duration: 1.75}
};

const AnimatedPage = ({children})=>{

    return (
        <motion.div variants={animations} initial="initial" animate="animate" transition="transition" >
            {children}
        </motion.div>
    );
};

export default AnimatedPage;