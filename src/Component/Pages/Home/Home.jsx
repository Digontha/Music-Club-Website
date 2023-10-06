import { useLoaderData, } from "react-router-dom";
import Banner from "./HomeElement/Banner";
import Service from "./HomeElement/Service";
import Future from "./HomeElement/Future";
import Review from "./HomeElement/Review";
import Footer from "./HomeElement/Footer";


const Home = () => {

    const data = useLoaderData()
  


    return (
        <div>
             <Banner></Banner>

             <h1 className='text-2xl text-center font-serif font-medium  mt-5 underline'>Our Service</h1>
             <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-[90%] mx-auto">
             
                {
                    data.map(services=> <Service key={services.id} service={services}></Service>)
                }
             </div>
              <Future></Future>
              <Review></Review>
              <Footer></Footer>
        </div>
    );
};

export default Home;