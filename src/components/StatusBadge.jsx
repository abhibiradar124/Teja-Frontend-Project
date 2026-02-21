import React from "react";

const StatusBadge = ({ status }) => {
  const styles = {
    Created: "bg-gray-200 text-gray-700",
    Assigned: "bg-blue-100 text-blue-700",
    "In Progress": "bg-yellow-100 text-yellow-700",
    Submitted: "bg-purple-100 text-purple-700",
    Completed: "bg-green-100 text-green-700",
  };

  return (
    <span className={`px-3 py-1 rounded text-sm font-medium ${styles[status]}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
