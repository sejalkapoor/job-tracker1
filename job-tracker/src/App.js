import { useState } from "react";

function App() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState([]);

  const addJob = () => {
    if (job.trim() === "") return;
    setJobs([...jobs, job]);
    setJob("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-6">Job Tracker</h1>
      
      <div className="flex gap-2">
        <input
          type="text"
          value={job}
          onChange={(e) => setJob(e.target.value)}
          placeholder="Enter Job Title"
          className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={addJob}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition transform active:scale-95"
        >
          Add Job
        </button>
      </div>

      {/* Job List Container */}
      <div className="mt-6 w-1/2 bg-white shadow-lg rounded-lg p-4">
        <ul className="space-y-2">
          {jobs.map((job, index) => (
            <li
              key={index}
              className="p-3 bg-gray-200 rounded-md flex justify-between hover:bg-gray-300 transition"
            >
              {job}
              <button
                onClick={() =>
                  setJobs(jobs.filter((_, i) => i !== index))
                }
                className="text-red-500 hover:text-red-700"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
