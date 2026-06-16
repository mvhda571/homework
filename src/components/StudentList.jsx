import React from "react";
import StudentCard from "./StudentCard";

const StudentList = ({ students }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
};

export default StudentList;