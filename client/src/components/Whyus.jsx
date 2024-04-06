import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";

import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Whyus = () => {
  const ref = useRef(null);

  const ifView = useInView(ref);

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  const count2 = useMotionValue(0);
  const rounded2 = useTransform(count2, Math.round);

  const count3 = useMotionValue(0);
  const rounded3 = useTransform(count3, Math.round);

  useEffect(() => {
    ifView && animate(count, 90, { duration: 2 });
  }, [count, ifView]);

  useEffect(() => {
    ifView && animate(count2, 74, { duration: 2 });
  }, [count2, ifView]);

  useEffect(() => {
    ifView && animate(count3, 64, { duration: 2 });
  }, [count3, ifView]);

  const lg = useMediaQuery({ query: "(min-width: 1024px)" });
  const md = useMediaQuery({ query: "(min-width: 768px)" });
  const sm = useMediaQuery({ query: "(min-width: 640px)" });

  return (
    <section
      ref={ref}
      className="flex  flex-col-reverse lg:flex-row  items-start justify-start gap-12 px-4 xl:px-0 xl:container  xl:mx-auto mt-20"
    >
      <motion.div
        initial={lg ? { x: "100%", opacity: 0 } : { y: "80%", opacity: 0 }}
        whileInView={
          lg
            ? {
                x: 0,
                opacity: 1,
              }
            : {
                y: 0,
                opacity: 1,
              }
        }
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="photo flex-1 self-center relative"
      >
        <div className="relative z-10">
          <img
            src="/images/why-us.png"
            className="w-full  md:h-[90vh] object-cover"
            alt=""
          />
        </div>

        <div className="absolute z-20 border border-white bg-black px-6 py-16 w-1/2 top-20 lg:left-[-6rem] ">
          <h6 className="text-center">
            <span>
              {" "}
              1,250 <sup>+</sup>
            </span>
            <span className="block">SATISFY CUSTOMERS</span>
          </h6>
        </div>
      </motion.div>
      <motion.div
        initial={lg ? { x: "-100%", opacity: 0 } : { y: "-80%", opacity: 0 }}
        whileInView={
          lg
            ? {
                x: 0,
                opacity: 1,
              }
            : {
                y: 0,
                opacity: 1,
              }
        }
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="content  lg:basis-1/2 "
      >
        <p className="text-xl italic font-[400]">Why Choose us</p>
        <h1 className="my-4 leading-[1.2] tracking-wider text-xl sm:text-2xl md:text-4xl xl:text-[2.5rem] 2xl:text-5xl font-[500]">
          ALWAYS PROVIDE SATISFACTORY WORK
        </h1>
        <p className="text-[1.2rem] tracking-wide leading-tight">
          Exceptional artistry, personalized service, and a dedication to
          exceeding your tattoo expectations define our commitment From design
          to execution, we maintain the highest standards of artistry and
          hygiene for your safety and satisfaction.
          <br />
          <br />
          We go above and beyond to ensure your satisfaction, providing a
          welcoming atmosphere and attentive service from start to finish.Your
          vision is our priority. We collaborate closely with you to ensure your
          tattoo reflects your unique style and personality.
        </p>

        <div className="mt-6 overflow-x-hidden">
          <div className="">
            <h6 className="mb-2 text-lg font-[500] tracking-widest">
              Experience
            </h6>
            <div className="p-[.2rem]  w-full bg-transparent relative z-10">
              <motion.span
                initial={{ x: 0 }}
                whileInView={{
                  x: "90%",
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 2,
                }}
                className="absolute z-30 top-[-2rem] w-full flex items-start gap-1"
              >
                <motion.span className="">{rounded}</motion.span>
                <span> %</span>
              </motion.span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{
                  width: "90%",
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 2,
                }}
                className="bg-white w-[90%] h-full absolute z-20 top-0 left-0 rounded-sm"
              ></motion.div>
            </div>
          </div>

          <div className="my-4">
            <h6 className="mb-2 text-lg font-[500] tracking-widest">Tattoo</h6>
            <div className="p-[.2rem]  w-full bg-transparent relative z-10">
              <motion.div
                initial={{ x: 0 }}
                whileInView={{
                  x: "74%",
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 2,
                }}
                className="absolute z-30 top-[-2rem] w-full flex items-start gap-1"
              >
                <motion.span className="">{rounded2}</motion.span>
                <span> %</span>
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{
                  width: "76%",
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 2,
                }}
                className="bg-white w-[76%] h-full absolute z-20 top-0 left-0 rounded-sm"
              ></motion.div>
            </div>
          </div>

          <div className="">
            <h6 className="mb-2 text-lg font-[500] tracking-widest">Price</h6>
            <div className="p-[.2rem]  w-full bg-transparent relative z-10">
              <motion.div
                initial={{ x: 0 }}
                whileInView={{
                  x: "64%",
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 2,
                }}
                className="absolute z-30 top-[-2rem] w-full flex items-start gap-1"
              >
                <motion.span className="">{rounded3}</motion.span>
                <span> %</span>
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{
                  width: "64%",
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 2,
                }}
                className="bg-white w-[64%] h-full absolute z-20 top-0 left-0 rounded-sm"
              ></motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Whyus;
