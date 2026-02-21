function CreateTask({ type, onBack }) {
  return (
    <div className="fixed inset-0 flex items-start justify-center pt-24 bg-black/10 z-50">

      {/* Modal Box */}
      <div className="bg-white/90 w-full max-w-2xl p-8 rounded-xl shadow-lg relative border border-black-30 max-h-[80vh] overflow-y-auto scrollbar-hide">

        {/* Back button TOP RIGHT */}
        <button
          onClick={onBack}
          className="absolute top-4 right-4 px-3 py-1 border rounded hover:bg-black hover:text-white transition"
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
            Create Task
          </button>

        </div>
      </div>

    </div>
  );
}

export default CreateTask;