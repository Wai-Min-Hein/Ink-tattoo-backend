import { AuroraBackground } from "./ui/aurora-background";
import { TypewriterEffect } from "./ui/typewriter-effect";

const words = [
  {
    text: "Ink",
  },
  {
    text: "Tattoo",
  },
  {
    text: "Studio",
  }]

const Hero = () => {
  return (
    <AuroraBackground>
      
      <div className="z-50 relative flex justify-center pt-[16vh]  container mx-auto">
        <div className="text-center">
          <p className="text-[1.05rem] md:text-[1.1rem] lg:text-xl font-[500] italic capitalize">
            We are here for you
          </p>
          <h1 className="uppercase text-xl ssm:text-3xl sm:text-[2.5rem] md:text-5xl lg:text-7xl font-semibold tracking-widest py-4">
            <TypewriterEffect words={words} />
            {/* Ink Tattoo Studio */}
          </h1>
          <p className=" sm:w-full px-3 sm:px-6 md:px-0 md:w-4/5 lg:w-2/3 mx-auto text-xl tracking-wider">
            Discover the artistry of Ink Studio. Where creativity thrives, and
            every tattoo is a masterpiece of self-expression.
          </p>

          <button className="inline-block mt-6 nBtn">See artworks</button>
        </div>
      </div>
    </AuroraBackground>
  );
};

export default Hero;
