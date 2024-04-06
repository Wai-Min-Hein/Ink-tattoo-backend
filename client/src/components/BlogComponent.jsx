import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BlogComponent = () => {
  const nav = useNavigate();

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

  const selectedBlogs = blogs.slice(0, 2);
  return (
    <section className="flex flex-col lg:flex-row items-start justify-between md:container md:mx-auto px-4 md:px-0 mt-32 gap-4">
      <motion.div 
       initial={{ y: "100%", opacity: 0 }}
       whileInView={{
         y: 0,
         opacity: 1,
       }}
       viewport={{ once: true }}
       transition={{ duration: 2 }}
      className="basis-[35%]">
        <p className="text-[1.05rem] md:text-[1.1rem] lg:text-xl font-[500] italic capitalize">
          Checkout our
        </p>
        <h1 className="uppercase text-xl ssm:text-3xl sm:text-[2.5rem] md:text-5xl lg:text-7xl font-semibold tracking-widest py-4">
          Blogs & News
        </h1>
        <p className="sm:w-full px-3 sm:px-6 md:px-0  mx-auto text-xl tracking-wider">
          Delve into our insights, trends, and tips curated by our experts. Stay
          informed, inspired, and connected with the latest in the tattoo world
        </p>
        <button className="nBtn mt-4">View all News</button>
      </motion.div>
      <motion.div
       initial={{ y: "-100%", opacity: 0 }}
       whileInView={{
         y: 0,
         opacity: 1,
       }}
       viewport={{ once: true }}
       transition={{ duration: 2 }}
       className="photo flex-1 flex items-center justify-between flex-wrap gap-y-6">
        {selectedBlogs.map((blog) => (
          <div className="basis-full mx-auto ssm:mx-0 ssm:basis-[49%]" key={blog.id}>
            <div className="">
              <img
                src={blog.img}
                className="w-full h-60 object-cover mb-4 rounded-md"
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
      </motion.div>
    </section>
  );
};

export default BlogComponent;
