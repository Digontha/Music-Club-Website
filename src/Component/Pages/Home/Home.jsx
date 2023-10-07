import { useLoaderData, } from "react-router-dom";
import Banner from "./HomeElement/Banner";
import Service from "./HomeElement/Service";
import Future from "./HomeElement/Future";
import Review from "./HomeElement/Review";
import Footer from "./HomeElement/Footer";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Home = () => {

    const data = useLoaderData()
  
   useEffect(() => {
        Aos.init({duration: 1000,})
   },[])
            

    return (
        <div>
             <div>
             <Banner></Banner>
             </div>

             <h1 className='text-2xl text-center font-serif font-medium  mt-5 underline'>Our Service</h1>
             <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-[90%] mx-auto" data-aos="fade-down">
             
                {
                    data.map(services=> <Service key={services.id} service={services}></Service>)
                }
             </div>
              <div data-aos="fade-right">
              <Future></Future>
              </div>
             <div data-aos="fade-left">
                <Review></Review>
             </div>
              <Footer></Footer>
             </div>
    );
};

export default Home;