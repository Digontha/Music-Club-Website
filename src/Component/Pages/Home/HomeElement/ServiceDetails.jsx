import { useLoaderData, useParams } from "react-router-dom";


const ServiceDetails = () => {
       
    const data = useLoaderData()
   
    const {id} = useParams()
    

  
    const filter = data.filter(items=> items.id == id)

    console.log(filter);

    return (
        <div className="py-5 w-[70%] mx-auto">
               
               {
                filter.map(service=><>
                  <img className=" rounded-xl w-full" src={service.img} alt="" /> 
                  <h1 className='text-2xl  text-center font-serif font-medium  mt-5 underline'>{service.title}</h1>
                  <p className="mt-8">{service.details}</p>
                </>)
               }

        </div>
    );
};

export default ServiceDetails;