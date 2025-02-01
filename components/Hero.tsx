'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ReactElement, useContext, useEffect, useRef, useState } from 'react';
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';
import { ScrollContext } from './Providers/ScrollProvider';
import { renderCanvas } from './renderCanvas';
import About from './About';

export default function Hero(): ReactElement {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollY } = useContext(ScrollContext);
  const [showAbout, setShowAbout] = useState(false); // State to toggle between Hero and About

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  useEffect(() => {
    renderCanvas();
  }, []);

  // Function to trigger the slide transition to the About page
  const handleNext = () => {
    // Start the animation
    setShowAbout(true);
  };

  return (
    <div id="home">
      <h1 className="sr-only">
        Hello I'm Vedant Sharma, I'm a frontend developer, and I love building
        things for the web.
      </h1>

      {/* Main content for the Hero section */}
      {!showAbout && (
        <motion.div
          className="relative z-10 flex h-[calc(100vh-81px)] items-center md:h-[calc(100vh-116px)]"
          initial={{ x: 0 }}
          animate={{ x: showAbout ? '-100%' : 0 }} // Slide to the left on button click
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">
            <div className="-mt-36">
              <div ref={ref} className="flex cursor-default flex-col space-y-2">
                <h1 className="text-5xl font-semibold sm:text-7xl md:text-8xl xl:text-9xl">
                  Vedant Sharma
                </h1>
                <h2 className="text-3xl font-medium opacity-80 sm:text-6xl md:text-6xl xl:text-7xl">
                  I build things for the future.
                </h2>

                {/* Replace the link with a button that slides to the About page */}
                <AnimatePresence>
                  <motion.button
                    onClick={handleNext}
                    className="underline-magical text-md w-max cursor-pointer sm:text-lg md:text-xl xl:text-2xl"
                    whileTap={{ scale: 0.95 }} // Add a slight tap animation for better UX
                  >
                    Read more about me &rarr;
                  </motion.button>
                </AnimatePresence>
              </div>

              <motion.div
                animate={{
                  transform: `translateY(${progress * 10}vh)`,
                }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 transform md:bottom-8"
              >
                <div
                  role="presentation"
                  className="flex cursor-pointer flex-col items-center justify-center"
                  onClick={() => {
                    const intro = document.querySelector('#intro');
                    intro?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <HiOutlineArrowNarrowDown size={20} />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Slide-in About page content */}
      {showAbout && (
        <motion.div
          className="relative z-10 h-[calc(100vh-81px)] md:h-[calc(100vh-116px)]"
          // initial={{ x: '100%' }} // Start from the right side
          animate={{ x: 0 }} // Animate to the center
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <About />
        </motion.div>
      )}

      <canvas
        className="bg-skin-base pointer-events-none absolute inset-0"
        id="canvas"
      ></canvas>
    </div>
  );
}
