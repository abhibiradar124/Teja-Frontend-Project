import React from "react";

const ServiceCard = ({ title, image, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center cursor-pointer group"
    >
      <button className="px-8 py-3 border border-black rounded-full group-hover:bg-black group-hover:text-white transition">
        {title}
      </button>

      <img
        src={image}
        alt={title}
        className="w-40 h-40 object-contain mt-6 opacity-80 group-hover:opacity-100 transition"
      />
    </div>
  );
};

const Home = ({ onSelectService }) => {
  return (
    <div className="w-full h-full flex flex-col">

      <div className="text-center pt-10 pb-4">
        <h1 className="text-4xl font-semibold tracking-wide">
          Admin Dashboard
        </h1>
      </div>

      <div className="flex-1 flex items-center justify-center pt-10">
       <div className="w-full max-w-5xl grid grid-cols-3 page-enter">

          <div className="flex justify-start">
            <ServiceCard
              title="Translation"
              image="https://cdn-icons-png.flaticon.com/512/3898/3898082.png"
              onClick={() => onSelectService("Translation")}
            />
          </div>

          <div className="flex justify-center">
            <ServiceCard
              title="Transcription"
              image="https://cdn-icons-png.flaticon.com/512/3209/3209265.png"
              onClick={() => onSelectService("Transcription")}
            />
          </div>

          <div className="flex justify-end">
            <ServiceCard
              title="Voice Over"
              image="https://cdn-icons-png.flaticon.com/512/727/727245.png"
              onClick={() => onSelectService("Voice Over")}
            />
          </div>

        </div>
      </div>

    </div>
  );
};

export default Home;