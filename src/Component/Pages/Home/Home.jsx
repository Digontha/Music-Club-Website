import { useLoaderData } from "react-router-dom";
import Banner from "./HomeElement/Banner";
import Service from "./HomeElement/Service";
import Future from "./HomeElement/Future";


const Home = () => {

    const data = useLoaderData()
    console.log(data);

    return (
        <div>
             <Banner></Banner>

             <h1 className='text-2xl text-center font-serif font-medium  mt-5 underline'>Our Service</h1>
             <div className="grid grid-cols-3 gap-5 w-[90%] mx-auto">
             
                {
                    data.map(services=> <Service key={services.id} service={services}></Service>)
                }
             </div>
              <Future></Future>
        </div>
    );
};

export default Home;