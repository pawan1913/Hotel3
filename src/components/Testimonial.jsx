import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonial = () => {
  
    const testimonials = [
       
        
      
        {
          "id": 1,
          "name": "Amit Kumar",
          "city": "Mainpuri",
          "comment": "Exceptional hotel. The service exceeded my expectations. Can't wait to return!"
        },
        
        
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
        infinite: true,
        centerMode: true,
        speed: 1000,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        mobileFirst: true,
        fade: true,
        dots:true,
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
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
             slidesToScroll: 1,
          },
        },
      ],
        // Adjust the interval as needed (in milliseconds)
      };
  
  return (
   <>
   <section className="bg-gray-100 py-16 w-full m-0 p-0 overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Testimonials</h2>
        <Slider {...settings} >
          {testimonials.map((testimonial) => (
  <div
    key={testimonial.id}
    className="bg-fifth text-center p-5  pt-10 rounded-lg shadow-lg md:mx-4 mx-0 my-4 mb-20  md:mb-8  font-bold auto"

  >
    <p className="text-gray-600 text-center">{testimonial.comment}</p>
    <div className="mt-4">
      <p className="text-gray-600 font-semibold text-center">~{testimonial.name}</p>
      <p className="text-gray-600 text-center">{testimonial.city}</p>
    </div>
  </div>
))}
    </Slider>      
      </div>
    </section>
    
    </>
  )
}

export default Testimonial