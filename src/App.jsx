import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsFormSubmitted(false);
    }, 2000);
  };

  return (
    
      <div className="bg-white min-h-[100vh]">

      <h1 className="p-5 text-center text-4xl font-bold" >Contact Form</h1>
    <div className=" flex flex-column items-center justify-center min-h-[70vh]">
      <div className="slider-container w-[80%] max-w-3xl">
        <Slider {...settings}>
          <div>
          <div className="h-[16em] w-[18em] border-2 border-purple-600/50 rounded-[1.5em] bg-gradient-to-br from-purple-700 to-purple-200 text-white font-nunito p-4 flex flex-col gap-3 backdrop-blur-lg">
  <h1 className="text-2xl font-semibold">Shine Will Get in Touch Form</h1>
  <p className="text-sm">
    Connect with us for a seamless experience. We are here to assist you in every way possible.
  </p>
  <button
    className="w-fit px-4 py-2 border border-white/20 rounded-full flex items-center gap-2 group hover:bg-white hover:text-purple-700 transition duration-300"
    onClick={() => setIsModalOpen(true)}
  >
    <p className="group-hover:font-bold">Open Form</p>
  </button>
</div>

          </div>
          <div>
          <div className="h-[16em] w-[18em] border-2 border-purple-600/50 rounded-[1.5em] bg-gradient-to-br from-purple-700 to-purple-200 text-white font-nunito p-4 flex flex-col gap-3 backdrop-blur-lg">
  <h1 className="text-2xl font-semibold">Shine Will Get in Touch Form</h1>
  <p className="text-sm">
    Connect with us for a seamless experience. We are here to assist you in every way possible.
  </p>
  <button
    className="w-fit px-4 py-2 border border-white/20 rounded-full flex items-center gap-2 group hover:bg-white hover:text-purple-700 transition duration-300"
    onClick={() => setIsModalOpen(true)}
  >
    <p className="group-hover:font-bold">Open Form</p>
  </button>
</div>

          </div>
          <div>
          <div className="h-[16em] w-[18em] border-2 border-purple-600/50 rounded-[1.5em] bg-gradient-to-br from-purple-700 to-purple-200 text-white font-nunito p-4 flex flex-col gap-3 backdrop-blur-lg">
  <h1 className="text-2xl font-semibold">Shine Will Get in Touch Form</h1>
  <p className="text-sm">
    Connect with us for a seamless experience. We are here to assist you in every way possible.
  </p>
  <button
    className="w-fit px-4 py-2 border border-white/20 rounded-full flex items-center gap-2 group hover:bg-white hover:text-purple-700 transition duration-300"
    onClick={() => setIsModalOpen(true)}
  >
    <p className="group-hover:font-bold">Open Form</p>
  </button>
</div>

          </div>
          <div>
          <div className="h-[16em] w-[18em] border-2 border-purple-600/50 rounded-[1.5em] bg-gradient-to-br from-purple-700 to-purple-200 text-white font-nunito p-4 flex flex-col gap-3 backdrop-blur-lg">
  <h1 className="text-2xl font-semibold">Shine Will Get in Touch Form</h1>
  <p className="text-sm">
    Connect with us for a seamless experience. We are here to assist you in every way possible.
  </p>
  <button
    className="w-fit px-4 py-2 border border-white/20 rounded-full flex items-center gap-2 group hover:bg-white hover:text-purple-700 transition duration-300"
    onClick={() => setIsModalOpen(true)}
  >
    <p className="group-hover:font-bold">Open Form</p>
  </button>
</div>

          </div>
          <div>
          <div className="h-[16em] w-[18em] border-2 border-purple-600/50 rounded-[1.5em] bg-gradient-to-br from-purple-700 to-purple-200 text-white font-nunito p-4 flex flex-col gap-3 backdrop-blur-lg">
  <h1 className="text-2xl font-semibold">Shine Will Get in Touch Form</h1>
  <p className="text-sm">
    Connect with us for a seamless experience. We are here to assist you in every way possible.
  </p>
  <button
    className="w-fit px-4 py-2 border border-white/20 rounded-full flex items-center gap-2 group hover:bg-white hover:text-purple-700 transition duration-300"
    onClick={() => setIsModalOpen(true)}
  >
    <p className="group-hover:font-bold">Open Form</p>
  </button>
</div>

          </div>
          <div>
          <div className="h-[16em] w-[18em] border-2 border-purple-600/50 rounded-[1.5em] bg-gradient-to-br from-purple-700 to-purple-200 text-white font-nunito p-4 flex flex-col gap-3 backdrop-blur-lg">
  <h1 className="text-2xl font-semibold">Shine Will Get in Touch Form</h1>
  <p className="text-sm">
    Connect with us for a seamless experience. We are here to assist you in every way possible.
  </p>
  <button
    className="w-fit px-4 py-2 border border-white/20 rounded-full flex items-center gap-2 group hover:bg-white hover:text-purple-700 transition duration-300"
    onClick={() => setIsModalOpen(true)}
  >
    <p className="group-hover:font-bold">Open Form</p>
  </button>
</div>

          </div>
        </Slider>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
       <div className="bg-white/20 backdrop-blur-lg p-6 rounded-xl w-[90%] max-w-md border border-white/30 shadow-xl relative">
         <button
           className="absolute top-4 right-4 text-white hover:text-gray-300"
           onClick={() => setIsModalOpen(false)}
         >
           <FaTimes size={20} />
         </button>
         {!isFormSubmitted ? (
           <>
             <h2 className="text-xl font-semibold text-white mb-4">
               Fill the Form
             </h2>
             <form onSubmit={handleSubmit}>
               <div className="mb-4">
                 <label className="block text-white text-sm font-bold mb-2">
                   Name
                 </label>
                 <input
                   type="text"
                   className="w-full p-2 bg-white/10 text-white border border-white/30 rounded-md focus:outline-none focus:border-purple-500"
                   placeholder="Enter your name"
                   required
                 />
               </div>
               <div className="mb-4">
                 <label className="block text-white text-sm font-bold mb-2">
                   Email
                 </label>
                 <input
                   type="email"
                   className="w-full p-2 bg-white/10 text-white border border-white/30 rounded-md focus:outline-none focus:border-purple-500"
                   placeholder="Enter your email"
                   required
                 />
               </div>
               <button
                 type="submit"
                 className="w-full bg-purple-600/80 text-white py-2 rounded-md hover:bg-purple-500/90"
               >
                 Submit
               </button>
             </form>
           </>
         ) : (
           <h2 className="text-green-400 text-lg font-semibold">
             Thank you for your submission!
           </h2>
         )}
       </div>
     </div>
     
      )}
    </div>
      </div>
  );
};

export default App;
