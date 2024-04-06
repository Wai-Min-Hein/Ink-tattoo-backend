import { FaFacebook } from "react-icons/fa6";
import { SiViber } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BackgroundGradient } from "./ui/background-gradient";

const Team = () => {

  const[artists, setArtists] = useState([])

  useEffect(() => {

    const getData = async () => {
    const res =  await axios.get('http://localhost:7000/api/artist')
    setArtists(res.data.data);
    }

 

    getData()
  }, [])

  console.log(artists);



  // const artists = [
  //   {
  //     id: 1,
  //     name: "Wai Yan",
  //     position: "Founder",
  //     img: "https://i.pinimg.com/236x/b9/f8/49/b9f849fea8d82f9ddffdd8ae3f0cb266.jpg",
  //     fb: "https://i.pinimg.com/236x/6e/fb/ae/6efbae21c15932e6741cb250e4dad38c.jpg",
  //     viber:
  //       "https://i.pinimg.com/236x/6e/fb/ae/6efbae21c15932e6741cb250e4dad38c.jpg",
  //     phone: "098765432123",
  //     artWorks: [
  //       {
  //         img: "https://i.pinimg.com/236x/13/3c/51/133c511bbb2cd84c8b20ca39b2d5a868.jpg",
  //         title: "CAUCASIAN GUY WITH FULL TATTOO",
  //       },
  //       {
  //         img: "https://i.pinimg.com/236x/61/f0/9f/61f09fb8203fbf83ceb706eed26c8ced.jpg",
  //         title: "CAUCASIAN GUY WITH FULL TATTOO",
  //       },
  //       {
  //         img: "https://i.pinimg.com/236x/c1/f7/3b/c1f73b4b3059ecd78bd61543aa3f8431.jpg",
  //         title: "CAUCASIAN GUY WITH FULL TATTOO",
  //       },
  //       {
  //         img: "https://i.pinimg.com/236x/84/db/24/84db24cb7353b32cb45775fefc71e8f2.jpg",
  //         title: "CAUCASIAN GUY WITH FULL TATTOO",
  //       },
  //       {
  //         img: "https://i.pinimg.com/236x/1f/85/4b/1f854ba7a3410ddc9b6194113170055c.jpg",
  //         title: "CAUCASIAN GUY WITH FULL TATTOO",
  //       },
  //       {
  //         img: "https://i.pinimg.com/236x/91/32/22/9132228cf2420304f9f6726e627330ea.jpg",
  //         title: "CAUCASIAN GUY WITH FULL TATTOO",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: "Wai Yan",
  //     position: "Founder",
  //     img: "https://i.pinimg.com/236x/a9/54/61/a954615927bf9b6a57d283f8c53ead5f.jpg",
  //     fb: "https://i.pinimg.com/236x/6e/fb/ae/6efbae21c15932e6741cb250e4dad38c.jpg",
  //     viber:
  //       "https://i.pinimg.com/236x/6e/fb/ae/6efbae21c15932e6741cb250e4dad38c.jpg",
  //     phone: "098765432123",
  //     artWorks: [
  //       {
  //         img: "https://i.pinimg.com/236x/13/3c/51/133c511bbb2cd84c8b20ca39b2d5a868.jpg",
  //         title: "CAUCASIAN GUY WITH FULL TATTOO",
  //       },
  //       {
  //         img: "https://i.pinimg.com/236x/61/f0/9f/61f09fb8203fbf83ceb706eed26c8ced.jpg",
  //         title: "CAUCASIAN GUY WITH FULL TATTOO",
  //       },
  //       {
  //         img: "https://i.pinimg.com/236x/c1/f7/3b/c1f73b4b3059ecd78bd61543aa3f8431.jpg",
  //         title: "CAUCASIAN GUY WITH FULL TATTOO",
  //       },
  //       {
  //         img: "https://i.pinimg.com/236x/84/db/24/84db24cb7353b32cb45775fefc71e8f2.jpg",
  //         title: "CAUCASIAN GUY WITH FULL TATTOO",
  //       },
  //       {
  //         img: "https://i.pinimg.com/236x/1f/85/4b/1f854ba7a3410ddc9b6194113170055c.jpg",
  //         title: "CAUCASIAN GUY WITH FULL TATTOO",
  //       },
  //       {
  //         img: "https://i.pinimg.com/236x/91/32/22/9132228cf2420304f9f6726e627330ea.jpg",
  //         title: "CAUCASIAN GUY WITH FULL TATTOO",
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     name: "Wai Yan",
  //     position: "Founder",
  //     img: "https://i.pinimg.com/236x/5a/10/de/5a10de68cf99c634bc42b375800f4588.jpg",
  //     fb: "https://i.pinimg.com/236x/6e/fb/ae/6efbae21c15932e6741cb250e4dad38c.jpg",
  //     viber:
  //       "https://i.pinimg.com/236x/6e/fb/ae/6efbae21c15932e6741cb250e4dad38c.jpg",
  //     phone: "098765432123",
  //     artWorks: [
  //       {
  //         img: "https://i.pinimg.com/236x/13/3c/51/133c511bbb2cd84c8b20ca39b2d5a868.jpg",
  //         title: "CAUCASIAN GUY WITH FULL TATTOO",
  //       },
  //       {
  //         img: "https://i.pinimg.com/236x/61/f0/9f/61f09fb8203fbf83ceb706eed26c8ced.jpg",
  //         title: "CAUCASIAN GUY WITH FULL TATTOO",
  //       },
  //       {
  //         img: "https://i.pinimg.com/236x/c1/f7/3b/c1f73b4b3059ecd78bd61543aa3f8431.jpg",
  //         title: "CAUCASIAN GUY WITH FULL TATTOO",
  //       },
  //       {
  //         img: "https://i.pinimg.com/236x/84/db/24/84db24cb7353b32cb45775fefc71e8f2.jpg",
  //         title: "CAUCASIAN GUY WITH FULL TATTOO",
  //       },
  //       {
  //         img: "https://i.pinimg.com/236x/1f/85/4b/1f854ba7a3410ddc9b6194113170055c.jpg",
  //         title: "CAUCASIAN GUY WITH FULL TATTOO",
  //       },
  //       {
  //         img: "https://i.pinimg.com/236x/91/32/22/9132228cf2420304f9f6726e627330ea.jpg",
  //         title: "CAUCASIAN GUY WITH FULL TATTOO",
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     name: "Wai Yan",
  //     position: "Founder",
  //     img: "https://i.pinimg.com/236x/d3/d0/0f/d3d00fe65e0f381657a47c8beecfa1a3.jpg",
  //     fb: "https://i.pinimg.com/236x/6e/fb/ae/6efbae21c15932e6741cb250e4dad38c.jpg",
  //     viber:
  //       "https://i.pinimg.com/236x/6e/fb/ae/6efbae21c15932e6741cb250e4dad38c.jpg",
  //     phone: "098765432123",
  //     artWorks: [
  //       {
  //         img: "https://i.pinimg.com/236x/13/3c/51/133c511bbb2cd84c8b20ca39b2d5a868.jpg",
  //         title: "CAUCASIAN GUY WITH FULL TATTOO",
  //       },
  //       {
  //         img: "https://i.pinimg.com/236x/61/f0/9f/61f09fb8203fbf83ceb706eed26c8ced.jpg",
  //         title: "CAUCASIAN GUY WITH FULL TATTOO",
  //       },
  //       {
  //         img: "https://i.pinimg.com/236x/c1/f7/3b/c1f73b4b3059ecd78bd61543aa3f8431.jpg",
  //         title: "CAUCASIAN GUY WITH FULL TATTOO",
  //       },
  //       {
  //         img: "https://i.pinimg.com/236x/84/db/24/84db24cb7353b32cb45775fefc71e8f2.jpg",
  //         title: "CAUCASIAN GUY WITH FULL TATTOO",
  //       },
  //       {
  //         img: "https://i.pinimg.com/236x/1f/85/4b/1f854ba7a3410ddc9b6194113170055c.jpg",
  //         title: "CAUCASIAN GUY WITH FULL TATTOO",
  //       },
  //       {
  //         img: "https://i.pinimg.com/236x/91/32/22/9132228cf2420304f9f6726e627330ea.jpg",
  //         title: "CAUCASIAN GUY WITH FULL TATTOO",
  //       },
  //     ],
  //   },
  // ];

  const location = useLocation();

  const nav = useNavigate();

  const pathname = location.pathname;

  const homeRoute = pathname == "/";

  const limitedArtist = pathname == "/" ? artists.slice(0, 3) : artists;
  return (
    <section className="container mx-auto mt-20">
      <div className="text-center">
        <p className="text-[1.05rem] md:text-[1.1rem] lg:text-xl font-[500] italic capitalize">our team</p>
        <h1 className="uppercase text-xl ssm:text-3xl sm:text-[2.5rem] md:text-5xl lg:text-7xl font-semibold tracking-widest py-4">
          Aweasome Artists
        </h1>
        <p className="w-3/4 mx-auto text-md text-[1.2rem] tracking-normal leading-tight sm:w-full px-3 sm:px-6 md:px-0 md:w-4/5 lg:w-2/3 ">
          Meet our team of skilled artisans, each bringing a unique flair and
          passion to their craft, ensuring your tattoo vision is brought to life
          with unparalleled expertise
        </p>
      </div>

      <div className="flex items-center justify-between mt-8 flex-wrap gap-y-6">
        {limitedArtist.map((artist) => (
          <BackgroundGradient  key={artist._id}>


          <div
            onClick={() => nav(`/team/${artist._id}`)}
            style={{
              backgroundImage: `url(${artist.img})`,
            }}
            className="relative z-10 object-cover w-full h-[30rem]  rounded-3xl bg-center bg-cover bg-no-repeat cursor-pointer overflow-y-hidden grayscale-80 blur-[3px] hover:blur-none duration-500 group "
            // key={artist.id}
          >
            <div className="absolute z-20 w-full h-full bg-black group-hover:opacity-40 translate-y-[80%] opacity-0 group-hover:translate-y-[20%] duration-300 blur-3xl"></div>
            <div className="flex flex-col items-center mt-[80%] tran h-full translate-y-[100%] group-hover:translate-y-0 duration-700 relative z-30">
              <h6 className="text-lg font-semibold uppercase tracking-widest">
                {artist.name}
              </h6>
              <p className="text-lg  font-[500] tracking-wider">
                {artist.position}
              </p>
              <div className="flex gap-4">
                <FaFacebook size={24} />
                <SiViber size={24} />
                <FiPhoneCall size={24} />
              </div>
            </div>
          </div>
          </BackgroundGradient>
        ))}
      </div>
      <div className="grid place-items-center mt-8">
        {homeRoute && (
          <button onClick={() => nav("/team")} className="nBtn">
            View all Team
          </button>
        )}
      </div>


      
    </section>
  );
};

export default Team;
