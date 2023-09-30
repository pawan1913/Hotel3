import React from 'react';

import Raw18 from "../assests/RAW25.jpg";
import Raw8 from "../assests/RAW8.jpeg"
import Raw12 from "../assests/RAW12.jpeg"
import Raw27 from "../assests/RAW27.jpg"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import  { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Contact = () => {

  const testimonials = [
    {
      "id": 1,
      "name": "Amit Kumar",
      "city": "Mainpuri",
      "comment": "I recently visited Mainpuri and had the pleasure of staying at this hotel. The warm hospitality and delicious local cuisine made my stay memorable."
    },
    {
      "id": 2,
      "name": "Suman Yadav",
      "city": "Bhongaon",
      "comment": "As a Bhongaon resident, I'm proud to see our town's first-class restaurant. It's a great place to enjoy our favorite dishes with friends and family."
    },
    {
      "id": 3,
      "name": "Rajesh Verma",
      "city": "Saifai",
      "comment": "Saifai's first open-air restaurant is a game-changer. The fresh air and delicious meals under the open sky make dining here a unique experience."
    },
    {
      "id": 4,
      "name": "Pooja Singh",
      "city": "Karhal",
      "comment": "Karhal's culinary scene has been elevated by this restaurant. The flavors are an ode to our rich traditions."
    },
    {
      "id": 5,
      "name": "Anil Sharma",
      "city": "Kishni",
      "comment": "Kishni needed a place like this hotel. The luxury and comfort it offers reflect our town's progress."
    },
    {
      "id": 6,
      "name": "Neha Gupta",
      "city": "Bewar",
      "comment": "Bewar has always been known for its hospitality. This hotel continues that legacy with its warm and welcoming staff."
    },
    {
      "id": 7,
      "name": "Vijay Yadav",
      "city": "Mainpuri",
      "comment": "I've lived in Mainpuri all my life, and this hotel has made me even prouder of our town. It's a perfect blend of tradition and modernity."
    },
    {
      "id": 8,
      "name": "Kavita Devi",
      "city": "Bhongaon",
      "comment": "Being a Bhongaon native, I'm thrilled about this restaurant. It's the go-to place for gatherings and celebrations."
    },
    {
      "id": 9,
      "name": "Rahul Tiwari",
      "city": "Saifai",
      "comment": "Saifai's open-air restaurant is a breath of fresh air, quite literally. The food and atmosphere are a treat for locals and visitors alike."
    },
    {
      "id": 10,
      "name": "Meera Patel",
      "city": "Karhal",
      "comment": "I've seen Karhal evolve over the years, and this restaurant is a testament to our town's progress. The flavors take me back to my childhood."
    },
    {
      "id": 11,
      "name": "Sanjay Singh",
      "city": "Kishni",
      "comment": "Kishni now boasts a world-class hotel. It's a source of pride for our town, and I'm glad to see our traditions embraced here."
    },
    {
      "id": 12,
      "name": "Sangeeta Yadav",
      "city": "Bewar",
      "comment": "Bewar has always been known for its warm hospitality, and this hotel carries that legacy forward. It's like a home away from home."
    },
    {
      "id": 13,
      "name": "Nitin Gupta",
      "city": "Mainpuri",
      "comment": "I've watched Mainpuri grow, and this hotel is a symbol of our town's progress. The service and amenities are top-notch."
    },
    {
      "id": 14,
      "name": "Renuka Sharma",
      "city": "Bhongaon",
      "comment": "Bhongaon finally has a restaurant that matches our love for good food. It's a place where you can enjoy our local flavors."
    },
    {
      "id": 15,
      "name": "Arvind Verma",
      "city": "Saifai",
      "comment": "I'm excited about Saifai's open-air restaurant. It's a unique dining experience that brings our community together."
    },
    {
      "id": 16,
      "name": "Manju Patel",
      "city": "Karhal",
      "comment": "Karhal's restaurant scene has been enriched by this establishment. It's where our town's traditions meet modern cuisine."
    },
    {
      "id": 17,
      "name": "Suresh Kumar",
      "city": "Kishni",
      "comment": "Kishni's luxury hotel is a reflection of our town's growth. It's a place where comfort and tradition coexist."
    },
    {
      "id": 18,
      "name": "Anita Singh",
      "city": "Bewar",
      "comment": "Bewar's warm hospitality has found a new home in this hotel. It's a place where everyone feels like family."
    },
    {
      "id": 19,
      "name": "Alok Verma",
      "city": "Mainpuri",
      "comment": "Mainpuri has always been close to my heart, and this hotel adds a touch of luxury to our town. It's a pride for us."
    },
    {
      "id": 20,
      "name": "Sarita Yadav",
      "city": "Bhongaon",
      "comment": "Bhongaon residents now have a reason to celebrate. This restaurant captures the essence of our community."
    }
  ]


  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    mobileFirst: true,
    fade: true,
    cssEase: 'linear',
    responsive: [
    {
      breakpoint: 1024, // Laptop and desktop screens
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // Tablet screens
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
         slidesToScroll: 1,
      },
    },
  ],
    // Adjust the interval as needed (in milliseconds)
  };

  return (
    <>
  
  <section id="restaurant" class="bg-white py-16">
  <div class="container mx-auto flex flex-col md:flex-row items-center">
    <div class="md:w-1/2 p-6">
      <img src={Raw18} alt="Restaurant Interior" class="w-full rounded-lg shadow-lg" />
    </div>
    <div class="md:w-1/2 p-6">
      <h2 class="text-3xl font-semibold mb-4">Dining Excellence at Our Restaurant</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        Savor a culinary journey at our award-winning restaurant. Our
        world-renowned chefs create exquisite dishes using locally sourced
        ingredients.
      </p>
      <p class="text-gray-700 leading-relaxed mb-6">
        Whether you're in the mood for fine dining or a casual meal, our
        restaurant offers a diverse menu that caters to all tastes.
      </p>
      <a href="#menu" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out">
        View Menu
      </a>
    </div>
  </div>
</section>
<section id="restaurant" class="bg-white py-16 text-black">
  <div class="container mx-auto flex flex-col md:flex-row items-center">
    <div class="md:w-1/2 p-6 transform translate-y-16 opacity-1 transition-transform duration-500 ease-in-out delay-300">
      <img src={Raw18} alt="Restaurant Interior" class="w-full rounded-lg shadow-lg" />
    </div>
    <div class="md:w-1/2 p-6 transform -translate-y-16 opacity-0 transition-transform duration-500 ease-in-out delay-300">
      <h2 class="text-3xl font-semibold mb-4 opacity-1">Dining Excellence at Our Restaurant</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        Savor a culinary journey at our award-winning restaurant. Our
        world-renowned chefs create exquisite dishes using locally sourced
        ingredients.
      </p>
      <p class="text-gray-700 leading-relaxed mb-6">
        Whether you're in the mood for fine dining or a casual meal, our
        restaurant offers a diverse menu that caters to all tastes.
      </p>
      <a href="#menu" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out">
        View Menu
      </a>
    </div>
  </div>
</section>

<section id="hotel" className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-6 transform translate-y-0 opacity-100 transition-transform duration-500 ease-in-out delay-300">
          <h2 className="text-3xl font-semibold mb-4">Experience Luxury at Our Hotel</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vehicula ipsum a arcu cursus, in vestibulum ipsum condimentum. Fusce
            eu lorem in mauris congue pretium ac in erat.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our luxurious hotel offers exquisite rooms and suites with
            world-class amenities, a stunning pool, spa services, and more.
          </p>
          <a href="#contact" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out">
            Book Now
          </a>
        </div>
        <div className="md:w-1/2 p-6 transform translate-y-0 opacity-100 transition-transform duration-500 ease-in-out delay-300">
          <img src={Raw18} alt="Hotel Interior" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
    <div className="flex justify-center items-center h-screen">
      <button className="bg-blue-500 hover:scale-105 transform transition-transform duration-300 ease-in-out text-white font-bold py-2 px-4 rounded-full">
        Hover Me
      </button>
    </div>
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Experience Luxury</h2>
          <p
            className="text-gray-600 opacity-10 transform translate-y-8 
                       transition-opacity duration-500 ease-in-out 
                       group-hover:opacity-100 group-hover:translate-y-0"
          >
            Discover our luxurious hotel and the first open-air restaurant in Mainpuri district.
          </p>
        </div>
      </div>
    </section>
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div
            className="text-center md:text-left transform transition-transform
                       duration-1000 ease-in-out animate-fade-in"
          >
            <h2 className="text-3xl font-semibold mb-4">Our Hotel</h2>
            <p className="text-gray-600">
              Welcome to our luxurious hotel, where you'll experience
              world-class hospitality and comfort like never before.
            </p>
          </div>
          <div
            className="text-center md:text-left transform transition-transform
                       duration-1000 ease-in-out animate-fade-in"
          >
            <h2 className="text-3xl font-semibold mb-4">Our Restaurant</h2>
            <p className="text-gray-600">
              Our restaurant is the first open-air dining experience in
              Mainpuri district. Enjoy exquisite cuisine in a unique
              alfresco setting.
            </p>
          </div>
        </div>
      </div>
    </section>

   

 

 
   
    <section className="bg-gray-100 py-16 ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Testimonials</h2>
        <Carousel showArrows={true} infiniteLoop={true} showStatus={false} interval={1000} autoPlay={true} showThumbs={true}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg">
               <div className="flex items-center justify-center mb-4">
            <img src={testimonial.imagePath} alt={testimonial.name} className="h-20 w-20 rounded-full object-cover" />
          </div>
              <p className="text-gray-700">{testimonial.comment}</p>
              <div className="mt-4">
                <p className="text-gray-600 font-semibold">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Testimonials</h2>
        <Carousel showArrows={true} infiniteLoop={true} showStatus={false} interval={1000} autoPlay={true} showThumbs={true}  centerMode={true}
          centerSlidePercentage={33.33}
          emulateTouch={true}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg mx-4 my-4">
              <p className="text-gray-700">{testimonial.comment}</p>
              <div className="mt-4">
                <p className="text-gray-600 font-semibold">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Room 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={Raw12} // Replace with the actual image URL for Room 1
              alt="Room 1"
              className="w-full object-cover rounded-md h-60"
            />
            <h3 className="text-xl font-semibold mt-4">Deluxe Room</h3>
            <p className="text-gray-600 mt-2">
              Spacious deluxe room with a comfortable bed and a stunning view.
            </p>
            <p className="text-gray-500 mt-2">$150 per night</p>
          </div>

          {/* Room 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={Raw27} // Replace with the actual image URL for Room 2
              alt="Room 2"
              className="w-full  object-cover rounded-md h-68 "
            />
            <h3 className="text-xl font-semibold mt-4">Suite Room</h3>
            <p className="text-gray-600 mt-2">
              Our luxurious suite with a spacious living area and modern amenities.
            </p>
            <p className="text-gray-500 mt-2">$250 per night</p>
          </div>

          {/* Room 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={Raw18} // Replace with the actual image URL for Room 3
              alt="Room 3"
              className="w-full h-68 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">Family Room</h3>
            <p className="text-gray-600 mt-2">
              A comfortable family room with enough space for everyone.
            </p>
            <p className="text-gray-500 mt-2">$200 per night</p>
          </div>
        </div>
      </div>
    </section>

    <div className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold text-center mb-8">Testimonials</h1>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-2 text-center">
                {/* <img className="w-full h-40 object-cover object-center" src={testimonial.image} alt={testimonial.name} /> */}
                <div className="p-4">           
                  <p className="mt-2 text-gray-700">{testimonial.comment}</p>
                  <h2 className="text-lg font-semibold">{testimonial.name}</h2>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>


    <div className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold text-center mb-8">Testimonials</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  </>
  );
};

const TestimonialCard = ({ name, position, company, quote, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-2">
      <img className="w-full h-40 object-cover object-center" src={image} alt={name} />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{position} at {company}</p>
        <p className="mt-2 text-gray-700">{quote}</p>
      </div>
    </div>
  );
};

export default Contact;
