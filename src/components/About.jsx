import React from 'react';
// import './Gallery.css'; // Import your custom CSS for additional styling
import About1 from "../assests/rhema-kallianpur-uocSnWMhnAs-unsplash.jpg"
import Typewriter from "typewriter-effect";
import Raw27 from "../assests/RAW27.jpg"
import Raw12 from "../assests/RAW12.jpeg"
import { useEffect } from 'react';
import "../style/About.css"

const About = () => {

  // Replace these URLs with your own image URLs

  useEffect(() => {
    // Check if the URL has an anchor (e.g., #section1)
    const hash = window.location.hash;

    if (hash) {
      // Use the section identifier directly
      const sectionId = hash.slice(1);

      // Find the section element by its ID
      const sectionElement = document.getElementById("restro");

      if (sectionElement) {
        // Scroll to the section with smooth behavior
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
 

  return (
    <>
        <div className="bg-white"  id='abouts'>
       <div className=' w-full   '  id='about'>
        <img
          src={About1}
          alt=""
          srcSet=""
          className='w-full object-cover'
          style={{ height: '100%' }}
        />
      </div>
  
 
  
    

 <div className="bg-gray-100 font-gil ">
      <div className="container mx-auto py-16 ">
        <section>
          <h1 className=' text-4xl text-center mb-24 mt-10 font-bold font-serif'>About Us </h1>
        </section>
       
        <section className="mb-12 mx-4 md:mx-0 bg-white md:p-10 p-5 rounded-lg shadow-lg " id='hotel'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl text-gray-00 mb-4">Hotel Excellence</h2>
              <p className="text-gray-600 text-lg">
              Welcome to Mainpuri's most prestigious luxury hotel, where modern comfort seamlessly merges with the timeless charm of traditional hospitality. Situated in the heart of Mainpuri, our hotel offers a truly exceptional experience for both discerning business travelers and those seeking leisure and relaxation.
              </p>
            </div>
            <div className="mx-auto">
              <img src={Raw12} alt="Hotel Exterior" className="rounded-lg shadow-md" />
            </div>
          </div>
        </section>

   
        {/* Amenities Section */}
        <section className="mb-12 mx-4 md:mx-0 " style={{fontFamily:"Gilroy Light"}}>
          <h2 className="text-3xl md:font-semibold font-medium     text-gray-800 mb-4">Our Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Add amenity items with images */}
            <div className="bg-white rounded-lg p-4 shadow-md">
              <img src="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Swimming Pool" className="w-22 h-22 mb-4 mx-auto" />
              <h3 className="text-xl md:font-semibold font-medium     text-gray-800">Swimming Pool</h3>
              <p className="text-gray-600">
                Enjoy a refreshing swim in our pristine pool.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <img src="https://images.unsplash.com/photo-1474898856510-884a2c0be546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Restaurant" className="w-22 h-22 mb-4 mx-auto" />
              <h3 className="text-xl md:font-semibold font-medium    text-gray-800">On-site Restaurant</h3>
              <p className="text-gray-600">
                Savor delicious dishes at our restaurant.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <img src="https://images.unsplash.com/photo-1623874514711-0f321325f318?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Fitness Center" className="w-22 h-22 mb-4 mx-auto" />
              <h3 className="text-xl md:font-semibold font-medium    text-gray-800">Fitness Center</h3>
              <p className="text-gray-600">
                Stay active in our fully-equipped fitness center.
              </p>
            </div>
          </div>
        </section>
<section className='underline'>


        <section className="mb-12 mt-4 md:w-1/2 w-full inline-flex ">
      <div className="bg-white rounded-lg p-6 shadow-md mx-4 md:mx-0 ">
        <h2 className="text-3xl md:font-semibold font-medium    text-gray-800 mb-4">Our Signature Offerings</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Luxurious and spacious accommodations</li>
          <li>World-class dining experiences</li>
          <li>State-of-the-art conference and banquet facilities</li>
          <li>Invigorating swimming pool and well-equipped fitness center</li>
          <li>Round-the-clock concierge and room service</li>
        </ul>
      </div>
    </section>
    <section className="my-12 mt-4 md:w-1/2 w-full inline-flex">
      <div className="bg-white rounded-lg p-6 shadow-md mx-4 md:mx-0">
        <h2 className="text-3xl md:font-semibold font-medium    text-gray-800 mb-4">Commitment to Excellence</h2>
        <ul className="list-disc list-inside text-gray-600">
         <p>At our hotel, we are driven by an unwavering commitment to excellence in every aspect of your stay. Whether you're here for a romantic getaway, an important business meeting, or a family vacation, our mission is to provide you with an unparalleled experience that reflects the essence of Mainpuri's rich culture and heritage.</p>
        </ul>
      </div>
    </section>
    </section>

        {/* Restaurant Section */}
        <section > 

                <section className="mb-12 my-10" id='restro'>
          <h1 className='text-5xl text-center mt-20 mb-16 font-serif ' style={{fontFamily:"'Croissant One', cursive"}}>  <Typewriter className="text-4xl type w-60" options={{
              strings: [" Our Restaurant "],
              autoStart: true,
              loop: true,
              cursor: "|",
              wrapperClassName: "typewriterpara",
             }}
          /></h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white md:p-10 p-5 rounded-lg shadow-lg mx-4 md:mx-0">
            <div className="text-center md:text-left ">

            <div className="mx-auto md:hidden inline-block my-10">
              <img src={Raw27} alt="Restaurant Interior" className="rounded-lg shadow-md" />
            </div>
              <h2 className="text-3xl md:font-semibold font-medium    text-gray-800 mb-4 opacity-100 md:opacity-100 ">Our Restaurant</h2>
            
              
              <p className="text-gray-600 text-lg">
              Discover Mainpuri's pioneering open-air dining destination, where delectable flavors meet the blissful ambiance of the great outdoors. Our culinary team takes immense pride in curating a gastronomic journey that celebrates the diverse and vibrant tastes of Indian cuisine.
                {/* Indulge in a culinary journey at our restaurant. Our chefs are dedicated to delivering exceptional dining experiences with every dish. */}
              </p>
            </div>
            <div className="mx-auto md:inline-block hidden">
              <img src={Raw27} alt="Restaurant Interior" className="rounded-lg shadow-md" />
            </div>
          </div>
        </section>

         <section className="mb-12 ">
          <h2 className="text-3xl md:font-semibold font-medium    text-gray-800 mb-4 mx-4 md:mx-0">Our Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-4 md:mx-0">
            {/* Add amenity items with images */}
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className='h-22'>

              <img src="https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" className="w-22 h-22 mb-4 mx-auto" height={"20vh"} />
              </div>
              <h3 className="text-xl md:font-semibold font-medium    text-gray-800">Ambiance</h3>
              <p className="text-gray-600 ">
                Enjoy a refreshing swim in our pristine pool.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Restaurant" className="w-22 h-26 mb-4 mx-auto" />
              <h3 className="text-xl md:font-semibold font-medium    text-gray-800">Open Air Restaurant</h3>
              <p className="text-gray-600">
                Savor delicious dishes at our restaurant.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbmNlcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Fitness Center" className="w-22 h-22 mb-4 mx-auto" />
              <h3 className="text-xl md:font-semibold font-medium    text-gray-800">Special Outdoor Events</h3>
              <p className="text-gray-600">
                Stay active in our fully-equipped fitness center.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 mt-4 md:w-70 w-full inline-flex ">
      <div className="bg-white rounded-lg p-6 shadow-md mx-4 md:mx-0">
        <h2 className="text-3xl md:font-semibold font-medium    text-gray-800 mb-4">The Ideal Venue</h2>
        <ul className="list-disc list-inside text-gray-600">
      <p>Our open-air restaurant serves as the perfect backdrop for weddings, receptions, birthdays, and corporate gatherings. We offer tailored event packages to make your special occasions truly exceptional. Our experienced team is dedicated to ensuring that every detail is flawlessly executed, leaving you to revel in the celebration.</p>
        </ul>
      </div>
    </section>
    <section className="my-12 mt-4 md:w-41 w-full inline-flex ">
      <div className="bg-white rounded-lg p-6 shadow-md mx-4 md:mx-0">
        <h2 className="text-3xl md:font-semibold font-medium    text-gray-800 mb-4">Community Engagement</h2>
        <ul className="list-disc list-inside text-gray-600">
          <p> We believe in giving back to our community. As a responsible
              member of Mainpuri, we actively engage in initiatives that uplift
              the local community. Whether it's supporting local artisans or
              participating in sustainability efforts, our commitment to our
              community is an integral part of our identity.</p>
          </ul>
      </div>
    </section>

    </section>


      <section className="my-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mx-4 md:mx-0 bg-white rounded-lg p-6 shadow-md">
            <div className="mx-auto">
              <img src="https://images.unsplash.com/photo-1497005367839-6e852de72767?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1767&q=80" alt="Mission and Vision" className="rounded-lg shadow-md " />
            </div>
            <div>
              <h2 className="text-3xl  text-gray-800 mb-4 text-center md:text-start md:font-semibold font-semi">Our Mission & Vision</h2>
              <p className="text-gray-600 text-lg">
                Our mission is to provide our guests with unforgettable experiences, exceptional service, and top-notch amenities. Our vision is to be the first choice for travelers seeking comfort and luxury.
              </p>
            </div>
          </div>
        </section>

      

        {/* Commitment Section */}
        <section className='pb-10 pt-10 '>
          <div className='bg-white rounded-lg py-5 px-3  shadow-md mx-4 md:mx-0'>

          <h2 className="text-3xl md:font-semibold font-medium    text-gray-800 mb-4 text-center mx-4 md:mx-0 ">Our Commitment</h2>
          <p className="text-gray-600 text-lg mx-4 md:mx-0">
            We are committed to delivering the best in hospitality. Your satisfaction is our priority, and we strive to exceed your expectations during every visit.
          </p>
          </div>
        </section>

        
      </div>
    </div>
  
    </div>
   

    </>
    
  );
};

export default About;
