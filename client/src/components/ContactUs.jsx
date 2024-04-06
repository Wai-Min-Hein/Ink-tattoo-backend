import { IoEarthOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { SlEnvolopeLetter } from "react-icons/sl";
import { GrMapLocation } from "react-icons/gr";

import contact from "./../../public/images/contact.svg";

const ContactUs = () => {
  return (
    <section className="lg:container lg:mx-auto px-6 lg:px-0  flex flex-col md:flex-row items-start justify-between gap-4 mt-10">
      <div className="basis-[45%]">
        <div className="">
          <p className="text-xl italic font-[500] capitalize">Contact us</p>
          <h1 className="my-4 leading-[1.2] tracking-wider text-5xl font-[500]">
            Get in touch
          </h1>
          <p className="text-md text-[1.2rem] tracking-wide leading-tight">
            Ready to start your tattoo journey? Reach out for appointments,
            questions, or consultations. We are here to make your vision a
            reality.
          </p>
        </div>

        <div className="flex items-start justify-between mt-8">
          <div className="basis-1/2">
            <div className="flex  flex-col sm:flex-row items-center md:items-start text-center sm:text-start justify-start gap-2 basis-2/5 mb-6">
              <LuPhoneCall className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl" />
              <div className="">
                <h6 className="text-lg font-[500] tracking-wide">Phone</h6>
                <p className="text-lg tracking-normal">09876543212</p>
              </div>
            </div>

            <div className="flex  flex-col sm:flex-row items-center md:items-start text-center sm:text-start justify-start gap-2">
              <GrMapLocation className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl" />
              <div className="">
                <h6 className="text-lg font-[500] tracking-wide">Address</h6>
                <p className="text-lg tracking-normal">
                  99 Roving St., Big City, PKU 23456
                </p>
              </div>
            </div>
          </div>

          <div className="basis-1/2">
            <div className="flex  flex-col sm:flex-row items-center md:items-start text-center sm:text-start justify-start gap-2 basis-2/5 mb-6">
              <IoEarthOutline className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl" />
              <div className="">
                <h6 className="text-lg font-[500] tracking-wide">Website</h6>
                <p className="text-lg tracking-normal">
                  https://inktattoo.vercel.app/
                </p>
              </div>
            </div>

            <div className="flex  flex-col sm:flex-row items-center md:items-start text-center sm:text-start justify-start gap-2">
              <SlEnvolopeLetter className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl" />
              <div className="">
                <h6 className="text-lg font-[500] tracking-wide">Email</h6>
                <p className="text-lg tracking-normal">info@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h6 className="mb-4 px-8 text-4xl">Thank for intresting</h6>
          <div className="px-8 text-xl">
            <p>We will be in touch.</p>
            <p>Shortly!</p>
          </div>
        </div>

        {/* <div className="mt-8">
          <div className="flex items-center justify-between border-b-2 border-dashed py-5">
            <h6>Mon - Fri</h6>

            <div className="">
              <p>09:00 - 20:00</p>
            </div>
          </div>

          <div className="flex items-center justify-between border-b-2 border-dashed py-5">
            <h6>Saturday</h6>

            <div className="">
              <p>09:00 - 20:00</p>
            </div>
          </div>

          <div className="flex items-center justify-between py-5">
            <h6>Sunday</h6>

            <div className="">
              <p>09:00 - 20:00</p>
            </div>
          </div>
        </div> */}
      </div>
      <div className="basis-full md:basis-1/2 mx-auto w-full h-full">
        <div className="w-full h-full ">
          <img src={contact} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="w-4/5 mx-auto">
          <div className="flex items-center justify-between border-b-2 border-dashed py-5">
            <h6>Mon - Fri</h6>

            <div className="">
              <p>09:00 - 20:00</p>
            </div>
          </div>

          <div className="flex items-center justify-between border-b-2 border-dashed py-5">
            <h6>Saturday</h6>

            <div className="">
              <p>09:00 - 20:00</p>
            </div>
          </div>

          <div className="flex items-center justify-between py-5">
            <h6>Sunday</h6>

            <div className="">
              <p>09:00 - 20:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
