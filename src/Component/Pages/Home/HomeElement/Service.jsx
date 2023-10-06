
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
  
   
    const {id,service_name,img,details,price} = service || {};

    return (
    <>
    <div className="card card-compact  bg-base-100 shadow-xl">
  <figure  className='h-60 m-5'><img className='w-full h-full' src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{service_name}</h2>
    <p className='text-base font-medium font-mono'>{details.slice(0,100)}...</p>
    <p className='text-xl font-medium'>Price: ${price}</p>
    <div className="card-actions justify-center">
      <Link to={`/${id}`}><button className="btn btn-neutral btn-sm">View Details</button></Link>
    </div>
  </div>
</div>
    </>
    );
};

Service.propTypes = {
    service: PropTypes.object
};

export default Service;