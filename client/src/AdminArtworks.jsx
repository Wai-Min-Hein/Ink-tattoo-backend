



import { MdMenu, MdClose } from "react-icons/md";

import { Link } from "react-router-dom";
// import logo from "/images/white-logo.png";
import logo from "../public/images/golden-logo.png";
import { useState } from "react";


const AdminArtworks = () => {
  const [nav, SetNav] = useState(false)

  return (
    <main>

<nav className="flex items-center justify-between sm:container sm:mx-auto px-4 md:px-8 lg:px-0 py-2 relative">
      <div className="flex items-center justify-start gap-3">
      <Link to={'/'}>

<img src={logo} alt="" className="h-14  object-cover" />
</Link>
        {/* <div className="">
          <h6>Ink Tattoo Stuido</h6>
        </div> */}
      </div>

      <div className="sm:flex items-center justify-between flex-1 hidden ">
        <ul className=" flex  items-center justify-center gap-6 lg:gap-12 flex-1 mx-auto text-[1.2] font-semibold leading-3 tracking-wider">
          
          <Link onClick={() => SetNav(false)}  to={"/admin/artists"}>
            <li className="cursor-pointer">Artists</li>
          </Link>
          

          

          <Link onClick={() => SetNav(false)}  to={"/admin/blogs"}>
            <li className="cursor-pointer">Blogs</li>
          </Link>

          <Link onClick={() => SetNav(false)}  to={"/admin/artworks"}>
            <li className="cursor-pointer">Art works</li>
          </Link>
        </ul>
        <div className="">
          <Link   to={''}> 
          
          <button className="px-2 py-1 border border-white rounded-sm">
            Log out
          </button>
          </Link>
        </div>
      </div>
      <div className="block sm:hidden cursor-pointer">
        <MdMenu onClick={() => SetNav(true)} size={24} />
      </div>

      <div className={` sm:hidden  flex-col gap-y-6 justify-center flex-1 absolute top-0 right-0 overflow-auto z-50 bg-black w-full  py-8 ${nav? 'flex': 'hidden'}`}>
        <div className="text-right ml-auto pr-12">
          <MdClose onClick={() => SetNav(false)} size={24} className="cursor-pointer" />
        </div>

        <ul className=" flex  flex-col items-center justify-center gap-6 lg:gap-12 flex-1 mx-auto text-[1.2] font-semibold leading-3 tracking-wider">
        <Link onClick={() => SetNav(false)}  to={"/admin/artists"}>
            <li className="cursor-pointer">Artists</li>
          </Link>
          

          

          <Link onClick={() => SetNav(false)}  to={"/admin/blogs"}>
            <li className="cursor-pointer">Blogs</li>
          </Link>

          <Link onClick={() => SetNav(false)}  to={"/admin/artworks"}>
            <li className="cursor-pointer">Art works</li>
          </Link>
        </ul>
        <div className="mx-auto">
        <Link  to={''}> 
          
          <button className="px-2 py-1 border border-white rounded-sm">
            Log out
          </button>
          </Link>
        </div>
      </div>
    </nav>


    </main>
  )
}

export default AdminArtworks