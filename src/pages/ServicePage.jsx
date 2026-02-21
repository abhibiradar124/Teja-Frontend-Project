import createTaskImg from "../assets/create-task2.avif";
import ShowStatusImg from "../assets/show-status.avif";
import { useState } from "react";
import CreateTask from "./CreateTask";
import ShowStatus from "./ShowStatus";

function ActionCard({ title, image, onClick }) {
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
        className="w-44 h-44 object-contain mt-5 opacity-80 group-hover:opacity-100 transition group-hover:scale-105 transition"
      />
    </div>
  );
}

function ServicePage({ type, onBack }) {
  const [page, setPage] = useState("home");

  if (page === "create") {
    return <CreateTask type={type} onBack={() => setPage("home")} />;
  }

  if (page === "status") {
    return <ShowStatus type={type} onBack={() => setPage("home")} />;
  }

  return (
    <div className="w-full h-full relative flex flex-col items-center pt-16">

      {/* Back button TOP RIGHT */}
      <button
        onClick={onBack}
        className="absolute top-6 right-8 px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
      >
        Back
      </button>

      {/* Heading */}
      <h1 className="text-2xl font-semibold mb-12">
        {type} Dashboard
      </h1>

      {/* Two actions */}
      <div className="flex gap-20">

        <ActionCard
          title="Create Task"
          image={createTaskImg}
          onClick={() => setPage("create")}
        />

        <ActionCard
          title="Show Status"
          image={ShowStatusImg}
          onClick={() => setPage("status")}
        />

      </div>

    </div>
  );
}

export default ServicePage;