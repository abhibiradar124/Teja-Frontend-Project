import React from "react";
import translationImg from "../assets/translation.avif";
import transcriptionImg from "../assets/transcription.jpeg";
import voiceOverImg from "../assets/voice-over.jpeg";

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
        className="w-70 h-44 object-contain mt-6 opacity-80 group-hover:opacity-100 transition"
      />
    </div>
  );
};

const Home = ({ onSelectService }) => {
  return (
    <div className="w-full h-full flex flex-col">

      <div className="text-center pt-0 pb-4">
        <h1 className="text-4xl font-semibold tracking-wide mb-6">
          Admin Dashboard
        </h1>
      </div>

      <div className="flex-1 flex flex-col items-center pt-6">
       <div className="w-full max-w-5xl grid grid-cols-3 gap-8 mt-6 page-enter">

          <div className="flex justify-start">
            <ServiceCard
              title="Translation"
              image={translationImg}
              onClick={() => onSelectService("Translation")}
            />
          </div>

          <div className="flex justify-center">
            <ServiceCard
              title="Transcription"
              image={transcriptionImg}
              onClick={() => onSelectService("Transcription")}
            />
          </div>

          <div className="flex justify-end">
            <ServiceCard
              title="Voice Over"
              image={voiceOverImg}
              onClick={() => onSelectService("Voice Over")}
            />
          </div>

        </div>
      </div>

    </div>
  );
};

export default Home;