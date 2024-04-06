import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const RenderService = ({ service }) => {
  const { title, text, img } = service;
  return (
    
<div className="basis-full md:basis-[49%] lg:basis-[32%] relative z-20 rounded">
      <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="font-[500] text-[1rem] tracking-wider "
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="py-3  text-lg tracking-wide leading-tight"
        >
          {text}
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <img src={img}
          
          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail" />
          
        </CardItem>
        {/* <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          
        </div> */}
      </CardBody>
    </CardContainer>
      </div>
  );
};

export default RenderService;


