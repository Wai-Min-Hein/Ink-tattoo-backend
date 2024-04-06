import About from "./components/About";
import Artwork from "./components/Artwork";
import BlogComponent from "./components/BlogComponent";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Whyus from "./components/Whyus";
import Team from "./components/Team";
import { ContainerScroll } from "./components/ui/container-scroll-animation";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

const App = () => {
  const lg = useMediaQuery({ query: "(min-width: 1024px)" });
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, []);


  return (
    <>
      {loader ? <Loader />: (
        <main className="relative z-20">
        <Hero />

        {lg ? (
          <div className="flex flex-col overflow-hidden">
            <ContainerScroll titleComponent={<></>}>
              <About />
            </ContainerScroll>
          </div>
        ) : (
          <About />
        )}

        <Service />
        <Whyus />
        <Artwork />
        <Team />
        <BlogComponent />
      </main>
      )}

      
    </>
  );
};

export default App;
