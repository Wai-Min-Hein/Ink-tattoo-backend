import { FaCalendarAlt } from "react-icons/fa";

import bg from "/images/hero-image.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./components/Loader";

const Blog = () => {
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("https://fakestoreapi.com/products");
      setFetchData(data.data);
    };

    getData();
  }, []);
  const blogs = [
    {
      id: 1,
      img: "https://i.pinimg.com/236x/21/35/25/21352534f6b565147691a6570dce33d3.jpg",
      title: "THE MOST EXCLUSIVE TATTOO IN THE WORLD",
      para: "My Bonnie lies over the ocean. My Bonnie lies over the sea. My Bonnie lies over the ocean. Oh, bring back my Bonnie to me",
    },
    {
      id: 2,
      img: "https://i.pinimg.com/236x/21/35/25/21352534f6b565147691a6570dce33d3.jpg",
      title: "THE MOST EXCLUSIVE TATTOO IN THE WORLD",
      para: "My Bonnie lies over the ocean. My Bonnie lies over the sea. My Bonnie lies over the ocean. Oh, bring back my Bonnie to me",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/236x/21/35/25/21352534f6b565147691a6570dce33d3.jpg",
      title: "THE MOST EXCLUSIVE TATTOO IN THE WORLD",
      para: "My Bonnie lies over the ocean. My Bonnie lies over the sea. My Bonnie lies over the ocean. Oh, bring back my Bonnie to me",
    },
    {
      id: 4,
      img: "https://i.pinimg.com/236x/21/35/25/21352534f6b565147691a6570dce33d3.jpg",
      title: "THE MOST EXCLUSIVE TATTOO IN THE WORLD",
      para: "My Bonnie lies over the ocean. My Bonnie lies over the sea. My Bonnie lies over the ocean. Oh, bring back my Bonnie to me",
    },
  ];

  const nav = useNavigate();

  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, []);
  return (

    <>

    {loader ? <Loader />:(
       <main className="">
       <section
         style={{
           backgroundImage: `url(${bg})`,
         }}
         className={`relative h-[40vh] object-cover bg-center bg-cover z-20 `}
       >
         <div className="overlay absolute top-0 right-0 z-30 bg-black opacity-40 w-full h-full"></div>
 
         <div className="relative z-40 grid place-items-center h-full">
           <div className="">
             <h1>Our Services</h1>
             <p className="text-center">Home/ Blogs</p>
           </div>
         </div>
       </section>
 
       <section className="container mx-auto mt-16">
         <div className="text-center pb-16">
           <p className="text-[1.05rem] md:text-[1.1rem] lg:text-xl font-[500] italic capitalize">
             Check out ours
           </p>
           <h1 className="uppercase text-xl ssm:text-3xl sm:text-[2.5rem] md:text-5xl lg:text-7xl font-semibold tracking-widest py-4">
             Blogs & News
           </h1>
 
           <p className="w-3/4 mx-auto text-md text-[1.2rem] tracking-normal leading-tight sm:w-full px-3 sm:px-6 md:px-0 md:w-4/5 lg:w-2/3">
             Delve into our insights, trends, and tips curated by our experts.
             Stay informed, inspired, and connected with the latest in the tattoo
             world
           </p>
         </div>
 
         <div className="photo flex-1 flex items-center justify-between flex-wrap gap-8">
           {blogs.map((blog) => (
             // <div className="basis-full ssm:basis-[48%] md:basis-[32%]" key={blog.id}>
             //   <div className="">
             //     <img
             //       src={blog.img}
             //       className="w-full h-60 object-cover mb-4 rounded-md"
             //       alt=""
             //     />
             //   </div>
             //   <h6 className="my-4 text-lg font-[500] px-4 tracking-wider">
             //     {blog.title}
             //   </h6>
 
             //   <div className="flex gap-3 items-center justify-start px-4">
             //     <FaCalendarAlt />
             //     <p className="tracking-wide">September 12, 2022</p>
             //   </div>
             //   <p className="text-lg font-normal tracking-wide leading-tight px-4 py-4">
             //     {blog.para}
             //   </p>
 
             //   <div className="px-4">
             //     <button
             //       className="px-4 border border-white rounded-sm py-2"
             //       onClick={() => nav(`/blogs/${blog.id}`)}
             //     >
             //       Read More
             //     </button>
             //   </div>
             // </div>
 
             <div
               className="basis-[95%] mx-auto ssm:mx-0 ssm:basis-[46%] lg:basis-[30%]"
               key={blog.id}
             >
               <div className="">
                 <img
                   src={blog.img}
                   className="w-full h-80 object-cover mb-4 rounded-md"
                   alt=""
                 />
               </div>
               <h6 className="my-4 text-lg font-[500] md:px-4 tracking-wider">
                 {blog.title}
               </h6>
 
               <div className="flex gap-3 items-center justify-start md:px-4">
                 <FaCalendarAlt />
                 <p className="tracking-wide">September 12, 2022</p>
               </div>
               <p className="text-lg font-normal tracking-wide leading-tight md:px-4 py-4">
                 {blog.para}
               </p>
 
               <div className="px-4">
                 <button
                   className="px-4 border border-white rounded-sm py-2"
                   onClick={() => nav(`/blogs/${blog.id}`)}
                 >
                   Read More
                 </button>
               </div>
             </div>
           ))}
         </div>
       </section>
     </main>
    )}
   

    </>
  );
};

export default Blog;
