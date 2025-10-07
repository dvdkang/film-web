"use client";
import Link from "next/link";
import styles from "./carousel.module.scss";
import { useState } from "react";
import { easeInOut, motion } from "framer-motion";
import { useContext } from "react";
import { ContentContext } from "@/context/ContentContext";

export default function newTeam() {
  const [activeIndex, setActiveIndex] = useState(0);

  const [transitionDirection, setTransitionDirection] = useState("next");

  const handleNext = () => {
    setTransitionDirection("next");
    setActiveIndex((prevIndex) =>
      prevIndex === 4 ? prevIndex : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setTransitionDirection("prev");
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  // EXAMPLE TEXT FOR REFERENCE

  //   const texts = [
  //     {
  //       title: "Immersive gaming experience",
  //       description:
  //         "adipisicing elit. Iure doloremque aut ratione eos! Laudantium ipsum velit, modi quae repudiandae, in quidem iste cupiditate sequi expedita placeat quam rerum, optio facilis. Officia iure quo illo eligendi. Perspiciatis voluptatibus itaque natus maiores alias vitae, reprehenderit distinctio cupiditate libero fugiat aut architecto ratione?",
  //     },
  //     {
  //       title: "On demand support when you need it",
  //       description:
  //         "doloremque aut ratione eos! Laudantium ipsum velit, modi quae repudiandae, in quidem iste cupiditate sequi expedita placeat quam rerum, optio facilis. Officia iure quo illo eligendi. Perspiciatis voluptatibus itaque natus maiores alias vitae, reprehenderit distinctio cupiditate libero fugiat aut architecto ratione?",
  //     },
  //     {
  //       title: "Accessible and inclusive to all",
  //       description:
  //         "Laudantium ipsum velit, modi quae repudiandae, in quidem iste cupiditate sequi expedita placeat quam rerum, optio facilis. Officia iure quo illo eligendi. Perspiciatis voluptatibus itaque natus maiores alias vitae, reprehenderit distinctio cupiditate libero fugiat aut architecto ratione?",
  //     },
  //   ];

  const textVariants = {
    hidden: {
      opacity: 0,
      x: transitionDirection === "next" ? 100 : -100,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const textContainerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const content = useContext(ContentContext);
  if (!content) return;
  const team = content.team;
  // EXAMPLE CODE FOR REFERENCE IF FAIL TO DO

  //   return (
  //     <body className={styles.mybody}>
  //       <div className={styles.carouselContainer}>
  //         <motion.div
  //           className={styles.contentContainer}
  //           key={activeIndex}
  //           variants={textContainerVariants}
  //           initial="hidden"
  //           animate="visible"
  //         >
  //           <div className={styles.titleContainer}>
  //             <motion.h1 variants={textVariants} className={styles.myh1}>
  //               {texts[activeIndex].title}
  //             </motion.h1>
  //           </div>
  //           <div className={styles.descriptionContainer}>
  //             <motion.p variants={textVariants} className={styles.myp}>
  //               {texts[activeIndex].description}
  //             </motion.p>
  //           </div>
  //           <div className={styles.buttonContainer}>
  //             <button className={styles.mybutton}>Learn More</button>
  //           </div>
  //         </motion.div>
  //         <div className={styles.imagesContainer}>
  //           <motion.div
  //             className={styles.firstContainer}
  //             animate={{
  //               opacity: activeIndex === 0 ? 1 : activeIndex === 1 ? 0 : 0,
  //               x:
  //                 activeIndex === 0 ? "0px" : activeIndex === 1 ? "96px" : "96px",
  //               scale: activeIndex === 0 ? 1 : activeIndex === 1 ? 1.2 : 1.2,
  //             }}
  //             transition={{ duration: 0.5, delay: 0, ease: easeInOut }}
  //           >
  //             <img
  //               className={styles.first}
  //               alt="first image"
  //               src="/Testing/image-one.png"
  //             ></img>
  //           </motion.div>
  //           <motion.div
  //             className={styles.secondContainer}
  //             animate={{
  //               opacity: activeIndex === 0 ? 0.66 : activeIndex === 1 ? 1 : 0,
  //               x:
  //                 activeIndex === 0
  //                   ? "-96px"
  //                   : activeIndex === 1
  //                   ? "0px"
  //                   : "96px",
  //               scale: activeIndex === 0 ? 0.8 : activeIndex === 1 ? 1 : 1.2,
  //             }}
  //             transition={{ duration: 0.5, delay: 0, ease: easeInOut }}
  //           >
  //             <img
  //               className={styles.second}
  //               alt="second image"
  //               src="/Testing/image-two.png"
  //             ></img>
  //           </motion.div>
  //           <motion.div
  //             className={styles.thirdContainer}
  //             animate={{
  //               opacity: activeIndex === 0 ? 0.33 : activeIndex === 1 ? 0.66 : 1,
  //               x:
  //                 activeIndex === 0
  //                   ? "-192px"
  //                   : activeIndex === 1
  //                   ? "-96px"
  //                   : "0px",
  //               scale: activeIndex === 0 ? 0.6 : activeIndex === 1 ? 0.8 : 1,
  //             }}
  //             transition={{ duration: 0.5, delay: 0, ease: easeInOut }}
  //           >
  //             <img
  //               className={styles.third}
  //               alt="third image"
  //               src="/Testing/image-three.png"
  //             ></img>
  //           </motion.div>
  //           <div className={styles.controls}>
  //             <button
  //               className={
  //                 activeIndex === 0
  //                   ? `${styles.disabled}`
  //                   : `${styles.prevContainer}`
  //               }
  //               onClick={handlePrev}
  //             >
  //               <img
  //                 alt="previous button"
  //                 src={
  //                   activeIndex === 0
  //                     ? "Testing/previous-disabled.svg"
  //                     : "Testing/previous-enabled.svg"
  //                 }
  //               ></img>
  //             </button>
  //             <button
  //               className={
  //                 activeIndex === 2
  //                   ? `${styles.disabled}`
  //                   : `${styles.nextContainer}`
  //               }
  //               onClick={handleNext}
  //             >
  //               <img
  //                 alt="next button"
  //                 src={
  //                   activeIndex === 2
  //                     ? "Testing/next-disabled.svg"
  //                     : "Testing/next-enabled.svg"
  //                 }
  //               ></img>
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </body>
  //   );

  return (
    <div className={styles.carouselContainer}>
      <motion.div
        className={styles.contentContainer}
        key={activeIndex}
        variants={textContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.titleContainer}>
          <motion.h1 variants={textVariants} className={styles.myh1}>
            {team.members[activeIndex].name}
          </motion.h1>
        </div>
        <div className={styles.roleContainer}>
          <motion.h2 variants={textVariants} className={styles.myh2}>
            {team.members[activeIndex].role}
          </motion.h2>
        </div>
        <div className={styles.descriptionContainer}>
          <motion.p variants={textVariants} className={styles.myp}>
            {team.members[activeIndex].description}
          </motion.p>
        </div>
        {/* BUTTON IF NEEDED */}
        {/* <div className={styles.buttonContainer}>
            <motion.h2 variants={textVariants}>
              {team.members[activeIndex].role}
            </motion.h2>
          </div> */}
      </motion.div>
      <div className={styles.imagesContainer}>
        <motion.div
          className={styles.firstContainer}
          animate={{
            opacity: activeIndex === 0 ? 1 : activeIndex === 1 ? 0 : 0,
            x: activeIndex === 0 ? "0px" : activeIndex === 1 ? "48px" : "48px",
            scale: activeIndex === 0 ? 1 : activeIndex === 1 ? 1.2 : 1.2,
          }}
          transition={{ duration: 0.5, delay: 0, ease: easeInOut }}
        >
          <img
            className={styles.first}
            alt="first image"
            src={team.members[0].photo}
          ></img>
        </motion.div>
        <motion.div
          className={styles.secondContainer}
          animate={{
            opacity: activeIndex === 0 ? 0.8 : activeIndex === 1 ? 1 : 0,
            x: activeIndex === 0 ? "-48px" : activeIndex === 1 ? "0px" : "48px",
            scale: activeIndex === 0 ? 0.8 : activeIndex === 1 ? 1 : 1.2,
          }}
          transition={{ duration: 0.5, delay: 0, ease: easeInOut }}
        >
          <img
            className={styles.second}
            alt="second image"
            src={team.members[1].photo}
          ></img>
        </motion.div>
        <motion.div
          className={styles.thirdContainer}
          animate={{
            opacity:
              activeIndex === 0
                ? 0.6
                : activeIndex === 1
                ? 0.8
                : activeIndex === 2
                ? 1
                : 0,
            x:
              activeIndex === 0
                ? "-96px"
                : activeIndex === 1
                ? "-48px"
                : activeIndex === 2
                ? "0px"
                : "48px",
            scale:
              activeIndex === 0
                ? 0.6
                : activeIndex === 1
                ? 0.8
                : activeIndex === 2
                ? 1
                : 1.2,
          }}
          transition={{ duration: 0.5, delay: 0, ease: easeInOut }}
        >
          <img
            className={styles.third}
            alt="third image"
            src={team.members[2].photo}
          ></img>
        </motion.div>
        <motion.div
          className={styles.fourthContainer}
          animate={{
            opacity:
              activeIndex === 0
                ? 0.4
                : activeIndex === 1
                ? 0.6
                : activeIndex === 2
                ? 0.8
                : activeIndex === 3
                ? 1
                : 0,
            x:
              activeIndex === 0
                ? "-144px"
                : activeIndex === 1
                ? "-96px"
                : activeIndex === 2
                ? "-48px"
                : activeIndex === 3
                ? "0px"
                : "48px",
            scale:
              activeIndex === 0
                ? 0.4
                : activeIndex === 1
                ? 0.6
                : activeIndex === 2
                ? 0.8
                : activeIndex === 3
                ? 1
                : 1.2,
          }}
          transition={{ duration: 0.5, delay: 0, ease: easeInOut }}
        >
          <img
            className={styles.fourth}
            alt="fourth image"
            src={team.members[3].photo}
          ></img>
        </motion.div>
        <motion.div
          className={styles.fifthContainer}
          animate={{
            opacity:
              activeIndex === 0
                ? 0.2
                : activeIndex === 1
                ? 0.4
                : activeIndex === 2
                ? 0.6
                : activeIndex === 3
                ? 0.4
                : activeIndex === 4
                ? 1
                : 0,
            x:
              activeIndex === 0
                ? "-192px"
                : activeIndex === 1
                ? "-144px"
                : activeIndex === 2
                ? "-96px"
                : activeIndex === 3
                ? "-48px"
                : activeIndex === 4
                ? "0px"
                : "48px",
            scale:
              activeIndex === 0
                ? 0.2
                : activeIndex === 1
                ? 0.4
                : activeIndex === 2
                ? 0.6
                : activeIndex === 3
                ? 0.8
                : 1,
          }}
          transition={{ duration: 0.5, delay: 0, ease: easeInOut }}
        >
          <img
            className={styles.fifth}
            alt="third image"
            src={team.members[4].photo}
          ></img>
        </motion.div>
        <div className={styles.controls}>
          <button
            className={
              activeIndex === 0
                ? `${styles.disabled}`
                : `${styles.prevContainer}`
            }
            onClick={handlePrev}
          >
            <img
              alt="previous button"
              src={
                activeIndex === 0
                  ? "Testing/previous-disabled.svg"
                  : "Testing/previous-enabled.svg"
              }
            ></img>
          </button>
          <button
            className={
              activeIndex === 4
                ? `${styles.disabled}`
                : `${styles.nextContainer}`
            }
            onClick={handleNext}
          >
            <img
              alt="next button"
              src={
                activeIndex === 4
                  ? "Testing/next-disabled.svg"
                  : "Testing/next-enabled.svg"
              }
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
}
