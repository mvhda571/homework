import React from "react";

const StudentCard = ({ student }) => {
  return (
    <div className="w-full max-w-3xl bg-white shadow-md rounded-lg px-6 py-4 flex items-center justify-between hover:shadow-xl duration-300">
      <div className="flex items-center gap-4">
        <img
          src={`https://ui-avatars.com/api/?name=${student.name}`}
          alt={student.name}
          className="w-14 h-14 rounded-full"
        />

        <div>
          <h2 className="text-lg font-semibold">{student.name}</h2>
          <p className="text-gray-500">Yoshi: {student.age}</p>
        </div>
      </div>

      <span className="font-bold text-blue-600">
        {student.id}
      </span>
    </div>
  );
};

export default StudentCard;