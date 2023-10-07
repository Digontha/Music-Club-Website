import Banner from "../Home/HomeElement/Banner";
import {BiTargetLock} from 'react-icons/bi';
import {RxValueNone} from 'react-icons/rx';
import {GrAchievement} from 'react-icons/gr';
import Footer from "../Home/HomeElement/Footer";


const About = () => {
    return (
        <div>

            <Banner></Banner>

            <section className="py-10 font-mono">
                <div className="container mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold">About Us</h2>
                        <p className="text-gray-700">Learn more about our organization and what we stand for.</p>
                    </div>
                    <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center">
                        <div className="lg:w-1/2 lg:pr-10 mb-6">
                            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">Our Mission <BiTargetLock className="text-3xl"></BiTargetLock></h3>
                            <p className="text-gray-800">
                            our mission is to revolutionize the way you experience live music events. We strive to bring you closer to your favorite bands and artists by seamlessly organizing and managing concerts that leave you with unforgettable memories. We are dedicated to creating an immersive and electrifying atmosphere that resonates with music enthusiasts, ensuring every event is a euphoric celebration of sound, unity, and shared experiences. Our passion drives us to deliver exceptional events, fostering a community where the love for music thrives, connecting people through the universal language of melody and rhythm."
                            </p>
                        </div>
                        <div className=" lg:pl-10 mb-6">
                            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">Our Values <RxValueNone className="text-3xl"></RxValueNone></h3>
                            <ul className="list-disc pl-6 text-gray-800">
                                <li>Passion for Music and Events:</li>
                                <li>Customer-Centric Approach:</li>
                                <li>Reliability and Professionalism</li>
                                <li>Creativity and Innovation:</li>
                                <li>Community and Inclusivity</li>
                            </ul>
                        </div>
                        <div className=" lg:pl-10 mb-6">
                            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">Our Achieve <GrAchievement className="text-3xl"></GrAchievement></h3>
                            <ul className="list-disc pl-6 text-gray-800">
                                <li>Diverse Artist Lineups</li>
                                <li>Seamless Ticketing and Booking System</li>
                                <li>High Attendance and Engagement:</li>
                                <li>Exceptional Event Experience</li>
                                <li>Community Building and Loyalty</li>
                            </ul>
                        </div>
                    </div>



                    
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-3 text-center underline">Our Team</h3>
                      <div className="flex flex-col lg:flex-row items-center justify-between py-5">
                       <div className="text-center">
                       <img className="w-20 h-20 ml-12  rounded-full" src="https://th.bing.com/th/id/R.42f7fd526cc94b557961a7d3f4d41994?rik=hDivNwvfJygXCA&pid=ImgRaw&r=0" alt="" />
                        <p >Mr.Devid</p>
                        <p>Management department</p>
                       </div>
                       <div className="text-center">
                       <img className="w-20 h-20 ml-10  rounded-full" src="https://i1.wp.com/shoprenewableenergy.com/wp-content/uploads/2020/02/cropped-portrait-photo-of-smiling-man-with-his-arms-crossed-standing-2379004-scaled-1.jpg?ssl=1" alt="" />
                        <p >Mr.Bijoy</p>
                        <p>Music department</p>
                       </div>
                       <div className="text-center">
                       <img className="w-20 h-20 ml-10  rounded-full" src="https://sonichits.com/artist_image/QWRoYW0gTmFidWxzaQ==/Njc5MWExZTkzYjNkOTlmZGY4NmY1ZmM1OTcyZjNhZTY=/extralarge" alt="" />
                        <p >Mr.Jony</p>
                        <p>Theme department</p>
                       </div>
                       <div className="text-center">
                       <img className="w-20 h-20 ml-12  rounded-full" src="https://th.bing.com/th/id/R.2b2fbf647ac130098d2713eb34650f05?rik=PbGc%2fGBw2EV8VQ&riu=http%3a%2f%2fwww2.pictures.zimbio.com%2fgi%2fKIIS%2bFM%2bJingle%2bBall%2b2011%2bArrivals%2bajBC_IMB4hQl.jpg&ehk=je5AG1cs54HnXXO54ZnqSl%2bAGeIHeFuKitZZ%2b18aYhE%3d&risl=&pid=ImgRaw&r=0" alt="" />
                        <p >Marselia</p>
                        <p>Performance department</p>
                       </div >
                       <div className="text-center">
                       <img className="w-20 h-20 ml-12 rounded-full" src="https://freepngimg.com/thumb/man/10-man-png-image.png" alt="" />
                        <p >Mr.Harry</p>
                        <p>Decoration department</p>
                       </div>
                      </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default About;