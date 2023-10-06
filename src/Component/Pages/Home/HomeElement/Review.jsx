

const Review = () => {
    return (
       <>
             <h1 className='text-2xl text-center font-serif font-medium  mt-5 underline'>Review</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-6">

            <div className="card  bg-neutral text-neutral-content">
                <div className="card-body items-center space-y-4">
                    <h2 className="card-title">Review by Music Enthusiast</h2>
                    <p>This website is a music lover's dream come true! The event listings are extensive, making it easy to find concerts and festivals featuring my favorite artists. The search and filter options are robust, allowing me to tailor my search to my preferences. </p>
                    
                </div>
            </div>
            <div className="card  bg-neutral text-neutral-content">
                <div className="card-body items-center space-y-4">
                    <h2 className="card-title">Review by Extraordinaire </h2>
                    <p>Navigating this website was a breeze. I love the personalized event recommendations based on my favorite genres. The online ticketing system is efficient, and I appreciate the seamless checkout process. </p>
                    
                </div>
            </div>
            <div className="card  bg-neutral text-neutral-content">
                <div className="card-body items-center space-y-4">
                    <h2 className="card-title">Review by Concert Critic</h2>
                    <p>As a concert reviewer, I find this website incredibly useful. The event and artist pages are well-organized, offering comprehensive information. The integration of reviews and ratings is a great touch, allowing for valuable user feedback.</p>
                    
                </div>
            </div>
            <div className="card  bg-neutral text-neutral-content">
                <div className="card-body items-center space-y-4">
                    <h2 className="card-title">Review by Social Butterfly</h2>
                    <p>This website is a social butterfly's haven! I love how easy it is to share upcoming events with my friends through social media. The newsletter subscription keeps me in the loop with the latest music news and events. The addition of artist profiles gives me insights into the performers before the event. The interactive features during virtual events make it feel like a real concert. Bravo on creating a platform that truly enhances the music event experience</p>
                    
                </div>
            </div>


        </div>
       </>
    );
};

export default Review;