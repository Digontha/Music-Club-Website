

const Banner = () => {
      
    const BgIMG = {
        backgroundImage: `url('../../../../../public/Banner.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
       

    }


    return (
<div className="hero h-[80vh] " style={BgIMG}>
  <div className="hero-content text-center">
    <div className="bg-[rgba(0,0,0,0.5)]  p-3 rounded-xl ">
      <h1 className="md:text-5xl font-bold text-orange-400 ">Unforgettable Concert Experiences</h1>
      <p className="py-6 md:text-2xl text-white font-medium ">Feel free to customize it to better suit your specific event and branding <br /> with us....</p>
    </div>
  </div>
</div>
    );
};

export default Banner;