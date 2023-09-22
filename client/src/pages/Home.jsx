import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import { CustomButton } from '../components';

import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion';

const Home = () => {
    const snap = useSnapshot(state);

    return (
        <AnimatePresence>
            {snap.intro && (     //if u r at home render home page data with the animations sliding from the left
                <motion.section className="home" {...slideAnimation('left')}>
                    <motion.header {...slideAnimation("down")}>
                        <img
                            src='./tt.png'
                            alt="logo"
                            className='w-16 h-12 '
                        />
                    </motion.header>
                    <motion.div className='home-content' {...headContainerAnimation}>
                        <motion.div {...headTextAnimation}>
                            <h1 className='head-text'>
                                LET'S <br className='xl:block hidden' /> DO IT.
                            </h1>
                        </motion.div>
                        <motion.div {...headContentAnimation} className='flex flex-col gap-2'>
                            <p className='max-w-md font-normal text-white text-base hover:bg-sky-700 rounded-lg bg-gradient-to-tr w-fit mx-5 indent-4'>
                                Introducing our one-of-a-kind shirt, crafted exclusively for you, utilizing our cutting-edge <strong> 3D customization tool </strong>. Let your creativity run wild as you delve into a realm of limitless possibilities, allowing you to shape and mold your very own style. Embracing the power of imagination.....
                            </p>

                            <CustomButton
                                type="filled"                       //D
                                title="Customize It"
                                handleClick={() => state.intro = false}
                                customStyles="w-fit px-10  font-bold text-sm "
                            />
                        </motion.div>
                    </motion.div>

                </motion.section>
            )}
        </AnimatePresence>
    )
}

export default Home
