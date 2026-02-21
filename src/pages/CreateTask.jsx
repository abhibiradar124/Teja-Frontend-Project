function CreateTask({ type, onBack }) {
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
          Create {type} Task
        </h1>

        <div className="space-y-6">

          {/* Name Dropdown */}
          <div>
            <label className="block mb-1">Name</label>
            <select className="w-full border p-2 rounded">
              <option>Select name</option>
              <option>Client A</option>
              <option>Client B</option>
              <option>Client C</option>
            </select>
          </div>

          {/* Language Source → Target */}
          <div>
            <label className="block mb-2">Language</label>

            <div className="flex gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  className="w-full border p-2 rounded"
                  placeholder="Enter source language"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Source Language
                </p>
              </div>

              <div className="flex-1">
                <input
                  type="text"
                  className="w-full border p-2 rounded"
                  placeholder="Enter target language"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Target Language
                </p>
              </div>
            </div>
          </div>

          {/* Upload File */}
          <div>
            <label className="block mb-1">Upload File</label>
            <input type="file" className="w-full border p-2 rounded" />
          </div>

          {/* Link */}
          <div>
            <label className="block mb-1">Link</label>
            <input
              type="text"
              className="w-full border p-2 rounded"
              placeholder="Paste link here"
            />
          </div>

          {/* Save */}
          <button className="w-full border py-3 rounded mt-4">
            Save Task
          </button>

        </div>
      </div>

    </div>
  );
}

export default CreateTask;