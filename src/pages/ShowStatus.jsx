function StatusBadge({ status }) {
  return (
    <div className={`
      inline-block px-4 py-2 rounded-full border
      ${status === "Done"
        ? "bg-black text-white"
        : "bg-gray-100 text-black"}
    `}>
      {status}
    </div>
  );
}

function ShowStatus({ type, onBack }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/10">

      {/* Modal Box */}
      <div className="bg-white w-full max-w-lg p-8 rounded-xl shadow-lg relative">

        {/* Back button TOP RIGHT */}
        <button
          onClick={onBack}
          className="absolute top-4 right-4 px-3 py-1 border rounded"
        >
          Back
        </button>

        {/* Heading */}
        <h1 className="text-2xl font-semibold mb-8 text-center">
          {type} Task Status
        </h1>

        <div className="space-y-6">

          {/* Intern Name */}
          <div>
            <label className="block mb-1">Intern Name</label>
            <input
              type="text"
              className="w-full border p-2 rounded"
              placeholder="Enter intern name"
            />
          </div>

          {/* Status Display */}
          <div>
            <label className="block mb-2">Task Status</label>

            <div className="flex gap-4">
              <StatusBadge status="status sign" />
              <StatusBadge status="Done" />
            </div>

            <p className="text-sm text-gray-500 mt-2">
              Status indicator for the task
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default ShowStatus;