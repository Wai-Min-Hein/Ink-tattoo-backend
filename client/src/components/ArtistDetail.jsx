import { useParams } from "react-router-dom";
import bg from "/images/hero-image.png";
import BlogComponent from "./BlogComponent";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import axios from "axios";


const ArtistDetail = () => {

  const {id}= useParams()


  const[artist, setArtist] = useState([])

  useEffect(() => {

    const getData = async () => {
    const res =  await axios.get(`http://localhost:7000/api/artist/${id}`)
    setArtist(res.data.artistData);
    }

 

    getData()
  }, [])



  const [loader, setLoader] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoader(false);
  //   }, 1500);
  // }, []);

  // const artist = [
  //   {
  //     id: 1,
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
  //   {
  //     id: 2,
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
  //   {
  //     id: 3,
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




 
const {artWorks} = artist






  // Calculate the size of each chunk
  const chunkSize = Math.ceil(artWorks && artWorks.length / 3);

  // Split the array into chunks
  const chunkedArrays = [];
  if(artWorks){

    for (let i = 0; i <  artWorks.length; i += chunkSize) {
     const chunk = artWorks.slice(i, i + chunkSize);
     chunkedArrays.push(chunk);
   }
  }
  


  return (
<>
    {loader ? <Loader />:(
      <main className=" ">
      <section
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className={`relative  h-[40vh] object-cover bg-center bg-cover z-20 `}
      >
        <div className="overlay absolute top-0 right-0 z-30 bg-black opacity-40 w-full h-full"></div>

        <div className="relative z-40 grid place-items-center h-full">
          <div className="">
            <h1>About of {artist.name}</h1>
            <p className="text-center">Home/ {artist.name}</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto">
        <div className="text-center">
          <p>some of  {artist.name} `s</p>
          <h1>Amazing Artworks</h1>
          <p className="w-3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            tempore id quibusdam est, amet dolore nam voluptatem nihil
            temporibus, nesciunt quasi ex eligendi, sed natus cum voluptas
            soluta laudantium voluptatibus!
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 min-h-[130vh] mt-20">
          {chunkedArrays?.map((array, index) => (
            <div key={index} className="grid gap-4">
              {artWorks.map((art, index) => (
                <div key={index} className="rounded-md overflow-hidden">
                  <img
                    className=" w-full object-cover object-center"
                    src={art.img}
                    alt="gallery-photo"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        
      </section>
      <BlogComponent/>
      
    </main>
    )}

    
    </>
  );
};

export default ArtistDetail;
