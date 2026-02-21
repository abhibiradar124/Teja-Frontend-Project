import SummaryCard from "../components/SummaryCard";
import StatusBadge from "../components/StatusBadge";
import React, { useState } from "react";
import CreateTaskModal from "../components/CreateTaskModal";

const Tasks = ({ service }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
        <div className="grid grid-cols-4 gap-4 mb-6">
  <SummaryCard title="Total Tasks" value="12" />
  <SummaryCard title="Assigned" value="5" />
  <SummaryCard title="In Progress" value="3" />
  <SummaryCard title="Completed" value="4" />
</div>

      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">{service} Tasks</h2>

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create Task
        </button>
      </div>

      <table className="w-full bg-white shadow rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3">Task</th>
            <th className="p-3">Intern</th>
            <th className="p-3">Service</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>

       <tbody>
  <tr className="text-center border-t">
    <td className="p-3">Translate Document</td>
    <td className="p-3">Rahul</td>
    <td className="p-3">{service}</td>
    <td className="p-3">
      <StatusBadge status="Assigned" />
    </td>
  </tr>

  <tr className="text-center border-t">
    <td className="p-3">Audio Transcription</td>
    <td className="p-3">Anita</td>
    <td className="p-3">{service}</td>
    <td className="p-3">
      <StatusBadge status="Completed" />
    </td>
  </tr>
</tbody>

      </table>

      {showModal && (
        <CreateTaskModal onClose={() => setShowModal(false)} />
      )}

    </div>
  );
};

export default Tasks;
