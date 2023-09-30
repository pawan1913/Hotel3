import React from 'react';
import Raw18 from "../assests/RAW25.jpg";
import Raw8 from "../assests/RAW8.jpeg"
import Raw12 from "../assests/RAW12.jpeg"
import Raw27 from "../assests/RAW27.jpg"

const Rooms = () => {
  return (
   <>
     <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Room 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg mx-5 md:mx-0">
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
          <div className="bg-white p-6 rounded-lg shadow-lg mx-5 md:mx-0">
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
          <div className="bg-white p-6 rounded-lg shadow-lg mx-5 md:mx-0">
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
   </>
  )
}

export default Rooms