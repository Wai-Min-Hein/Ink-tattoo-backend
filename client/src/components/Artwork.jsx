import axios from "axios";
import { useEffect, useState,  } from "react";
import { useMediaQuery } from "react-responsive";

import { useDisclosure } from "@mantine/hooks";
import { Button, Modal, Select, Text } from "@mantine/core";

import "@mantine/core/styles.css";
import { LayoutGrid } from "./ui/layout-grid";

const Artwork = () => {
  const [fetchData, setFetchData] = useState([]);

  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("https://fakestoreapi.com/products");
      setFetchData(data.data);
    };

    getData();
  }, []);

  const artWorks = [
    {
      id: 1,
      img: "https://i.pinimg.com/236x/13/3c/51/133c511bbb2cd84c8b20ca39b2d5a868.jpg",
    },
    {
      id: 2,
      img: "https://i.pinimg.com/236x/61/f0/9f/61f09fb8203fbf83ceb706eed26c8ced.jpg",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/236x/c1/f7/3b/c1f73b4b3059ecd78bd61543aa3f8431.jpg",
    },
    {
      id: 4,
      img: "https://i.pinimg.com/236x/84/db/24/84db24cb7353b32cb45775fefc71e8f2.jpg",
    },
    {
      id: 5,
      img: "https://i.pinimg.com/236x/1f/85/4b/1f854ba7a3410ddc9b6194113170055c.jpg",
    },
    {
      id: 6,
      img: "https://i.pinimg.com/236x/91/32/22/9132228cf2420304f9f6726e627330ea.jpg",
    },
    {
      id: 7,
      img: "https://i.pinimg.com/236x/c4/93/9d/c4939d5cf6251a0547927e219f62ffc2.jpg",
    },
    {
      id: 8,
      img: "https://i.pinimg.com/236x/55/4c/1f/554c1f4907951081f314cbe101a4f50d.jpg",
    },
    {
      id: 9,
      img: "https://i.pinimg.com/236x/25/a0/fe/25a0feb0480de428f3b250ad60ae6c5e.jpg",
    },
    {
      id: 10,
      img: "https://i.pinimg.com/236x/ae/b0/63/aeb0635bbcb824d2a249dd0e3805c525.jpg",
    },
    {
      id: 11,
      img: "https://i.pinimg.com/236x/90/60/6d/90606d13aeb7ef53ab8f944062a27969.jpg",
    },
    {
      id: 12,
      img: "https://i.pinimg.com/236x/3a/dd/d4/3addd46f3713beef0c43a953279f2ce8.jpg",
    },
    {
      id: 13,
      img: "https://i.pinimg.com/236x/3a/dd/d4/3addd46f3713beef0c43a953279f2ce8.jpg",
    },
    {
      id: 14,
      img: "https://i.pinimg.com/236x/3a/dd/d4/3addd46f3713beef0c43a953279f2ce8.jpg",
    },
    {
      id: 15,
      img: "https://i.pinimg.com/236x/c4/93/9d/c4939d5cf6251a0547927e219f62ffc2.jpg",
    },
  ];

  const [currentImg, setCurrentImg] = useState("");

  // const xl = useMediaQuery({ query: "(min-width: 1280px)" });
  const lg = useMediaQuery({ query: "(min-width: 1024px)" });
  const md = useMediaQuery({ query: "(min-width: 768px)" });
  const sm = useMediaQuery({ query: "(min-width: 640px)" });
  // const ssm = useMediaQuery({ query: "(min-width: 560px)" });

  // const numChunks = (md && 5) || 3;
  const numChunks = (md && 5) || (sm ?4:3) ;
  const chunkSize = Math.ceil(artWorks.length / numChunks);

  // Split the array into chunks
  const chunkedArrays = [];
  for (let i = 0; i < artWorks.length; i += chunkSize) {
    const chunk = artWorks.slice(i, i + chunkSize);
    chunkedArrays.push(chunk);
  }

  // const xxl = useMediaQuery({
  //   query: "(min-width: 1537px)",
  // });

  return (
    <section className="xl:container px-4 xl:px-0 mx-auto mt-12 relative ">
      <div className="text-center">
        <p className="text-[1.05rem] md:text-[1.1rem] lg:text-xl  italic font-[400]">
          some of our
        </p>
        <h1 className="mt-2 mb-4   uppercase text-xl ssm:text-3xl sm:text-[2.5rem] md:text-5xl lg:text-7xl font-semibold tracking-widest py-4">
          Amazing Artworks
        </h1>
        <p className="sm:w-full px-3 sm:px-6 md:px-0 md:w-4/5 lg:w-2/3 mx-auto text-xl tracking-wider">
          Immerse yourself in our gallery of stunning tattoos, each a testament
          to our artists`s creativity, skill, and dedication to craft
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-5 min-h-[380vh] md:min-h-[200vh] lg:min-h-[160vh] mt-12 ">
        {chunkedArrays?.map((array, index) => (
          <div key={index} className="flex flex-col gap-y-4 h-auto">
            {/* {array.map((art, index) => (
              <div key={index} className="rounded-md">

                <img
                  onClick={(e) => (open(), setCurrentImg(e.target.src))}
                  className="w-full object-cover object-center grayscale-50 rounded-md cursor-pointer"
                  src={art.img}
                  alt="gallery-photo"
                />

                <Modal opened={opened} onClose={close} className=" overflow-y-hidden">
                  <img
                    onClick={() => open()}
                    className="w-full object-cover h-screen"
                    src={currentImg}
                    alt="gallery-photo"
                  />
                </Modal>
              </div>
            ))} */}
            <LayoutGrid key={index} cards={array} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Artwork;
