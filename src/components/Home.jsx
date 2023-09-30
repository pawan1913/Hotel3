// import React from 'react'
import React, { useEffect, useRef, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Raw8 from "../assests/RAW8.jpeg"
import Raw12 from "../assests/RAW12.jpeg"
import Raw14 from "../assests/RAW14.jpeg"
import Raw27 from "../assests/RAW27.jpg"
import Raw29 from "../assests/RAW29.jpg"
import Raw17 from "../assests/RAW17.jpg"
import "../style/home.css"
import Testimonial from './Testimonial';
import Typewriter from "typewriter-effect";
import Rooms from './Rooms';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';



const Home = () => {
  const topElementRef = useRef(null);

  useEffect(() => {
    topElementRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);
  
  return (
    <div className=''>
     <div ref={topElementRef} />

  
   <Slide/>
   <About/>
   <Rooms/>
   <Gallery/>
   <Testimonial/>
      </div>
 
  )
}

const Slide = () => {
  const settings = {
    // dots: true,
    infinite: true,
    // centerMode: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    // mobileFirst: true,
    fade: true,
    cssEase: 'linear',}


    const cardStyle = {
      margin: 0,
      padding: 0,
    };
  
    const imageStyle = {
      margin: 0,
      padding: 0,
      width: '100%',
      // height: 'auto',
    };
  return(
    <>

<div className='slide m-0 p-0 overflow-hidden'> 


    <Slider {...settings}
    > 
    <div className='' style={cardStyle}>
        <img src={Raw12} className=''   style={imageStyle}/>
        {/* <p className="slidetext"> Welcome to Pushpanjli Palace</p> */}
    </div>
    <div style={cardStyle}>
        <img src={Raw27} className='bg-cover'   style={imageStyle}/>
        {/* <p className="legend">Legend 1</p> */}
    </div>
    <div>
        <img src={Raw14} className='bg-cover'/>
        {/* <p className="legend">Legend 1</p> */}
    </div>
    <div>
        <img src={Raw17} className='bg-cover'/>
        {/* <p className="legend">Legend 1</p> */}
    </div>
    <div>
        <img src={Raw29} className='bg-cover'/>
        {/* <p className="legend">Legend 1</p> */}
    </div>
    <div>
        <img src={Raw8} className='bg-cover'/>
        {/* <p className="legend">Legend 1</p> */}
    </div>
</Slider>
</div>
</>
  )
}


// Pushpanjli and The Ambience (Open Air Restro)

const About = () => {
  return(
    <>
    <div className='flex  items-center flex-col  bg-gray-200  pt-24 about w-full'>
      <h1 className='sm:text-4xl md:w-full  w-full text-center pt-0 text-3xl pb-8 md:pb-12' >Welcome to  <Typewriter className="text-4xl type w-60" options={{
              strings: [" Pushpanjli Palace", " The Ambience "],
              autoStart: true,
              loop: true,
              cursor: "|",
              wrapperClassName: "typewriterpara",
             }}
          />
          </h1>
          
      <div className=" main m-5 md:m:20 ">
      <section id="hotel" className="bg-gray-100 py-16 rounded-lg text-gray-400 shadow-lg
      ">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-6 transform translate-y-0 opacity-100 transition-transform duration-500 ease-in-out delay-300">
          <h2 className="text-3xl font-semibold  mb-4 text-ellipsis text-gray-500">Experience Luxury at Our Hotel</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vehicula ipsum a arcu cursus, in vestibulum ipsum condimentum. Fusce
            eu lorem in mauris congue pretium ac in erat.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our luxurious hotel offers exquisite rooms and suites with
            world-class amenities, a stunning pool, spa services, and more.
          </p>
          <Link to={"/about#hotel"} className="bg-gray-400 text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-300 ease-in-out">
            Read More
          </Link>
        </div>
        <div className="md:w-1/2 p-6 transform translate-y-0 opacity-100 transition-transform duration-500 ease-in-out delay-300">
          <img src={Raw27} alt="Hotel Interior" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
    <section id="hotel" className="bg-gray-100 py-16 mt-20 rounded-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 p-6 transform translate-y-0 opacity-100 transition-transform duration-500 ease-in-out delay-300">
          <img src={Raw12} alt="Hotel Interior" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 p-6 transform translate-y-0 opacity-100 transition-transform duration-500 ease-in-out delay-300">
          
          <h2 className="text-3xl font-semibold mb-4 text-gray-400">Experience Luxury at Our Hotel</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vehicula ipsum a arcu cursus, in vestibulum ipsum condimentum. Fusce
            eu lorem in mauris congue pretium ac in erat.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our luxurious hotel offers exquisite rooms and suites with
            world-class amenities, a stunning pool, spa services, and more.
          </p>
          <Link to={"/about#restro"} className="bg-gray-400 text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-300 ease-in-out">
            Read More
          </Link>
        </div>
        
      </div>
    </section>
       
      </div>
    </div>
    
    </>
  )
} 

const Gallery = () => {
  return(
    <>
<div class="container mx-auto p-4">
  <h1 class="text-4xl text-center mb-8 font-semibold">Gallery</h1>
  
  <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
    <div class="relative aspect-w-1 aspect-h-1">
      <img src={Raw12} alt="Image 1" class="object-cover w-full h-full rounded" />
    </div>
    
    <div class="relative aspect-w-1 aspect-h-1">
      <img src={Raw27} alt="Image 2" class="object-cover w-full h-full rounded" />
    </div>
    
    <div class="relative aspect-w-1 aspect-h-1">
      <img src={Raw8} alt="Image 3" class="object-cover w-full h-full rounded" />
    </div>
    
    <div class="relative aspect-w-1 aspect-h-1">
      <img src={Raw12} alt="Image 4" class="object-cover w-full h-full rounded" />
    </div>
    
    <div class="relative aspect-w-1 aspect-h-1">
      <img src={Raw12} alt="Image 5" class="object-cover w-full h-full rounded" />
    </div>
    <div class="relative aspect-w-1 aspect-h-1">
      <img src={Raw12} alt="Image 5" class="object-cover w-full h-full rounded" />
    </div>
    <div class="relative aspect-w-1 aspect-h-1">
      <img src={Raw12} alt="Image 5" class="object-cover w-full h-full rounded" />
    </div>
    <div class="relative aspect-w-1 aspect-h-1">
      <img src={Raw12} alt="Image 5" class="object-cover w-full h-full rounded" />
    </div>
    <div class="relative aspect-w-1 aspect-h-1">
      <img src={Raw12} alt="Image 5" class="object-cover w-full h-full rounded" />
    </div>
    
</div>
<Link to={"/gallery"}>
<button className='text-white bg-black rounded-md px-2 py-1  mx-auto items-center flex my-7 hover:bg-white hover:text-black border-2 border-black hover:font-semibold'>
        View More
      </button>
</Link>
</div>
    </>
  )
}

export default Home