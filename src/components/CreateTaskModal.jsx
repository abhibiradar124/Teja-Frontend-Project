import React from "react";

const CreateTaskModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">

      <div className="bg-white p-6 rounded w-96 shadow-lg">

        <h2 className="text-xl font-bold mb-4">Create Task</h2>

        <div className="space-y-3">

          <input
            type="text"
            placeholder="Task Name"
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Language Pair (e.g. English → Hindi)"
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            placeholder="File Link"
            className="w-full border p-2 rounded"
          />

          <select className="w-full border p-2 rounded">
            <option>Assign Intern</option>
            <option>Rahul</option>
            <option>Anita</option>
          </select>

          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>

            <button className="px-4 py-2 bg-blue-600 text-white rounded">
              Create
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CreateTaskModal;
