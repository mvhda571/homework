import React from 'react'
import LanguageList from './components/LanguageList'
import ColorfulCard from './components/ColorfulCard'
import ResponsiveProfile from './components/ResponsiveProfile'
// import React, { useState } from "react";
import StudentList from "./components/StudentList";
import Input from './Input';
import Form from './components/Form';
import UseEffectTest from './components/UseEffectTest';
import AlertMessenger from './components/AlertMassager';
const App = () => {
  // const [search, setSearch] = useState("");

  // const students = [
  //   { id: 1, name: "O'ktam Fozilov", age: 20 },
  //   { id: 2, name: "Shoxrux Yigitaliyev", age: 19 },
  //   { id: 3, name: "Foziljon Fayzullayev", age: 21 },
  //   { id: 4, name: "Ibrohim Boyboboyev", age: 18 },
  //   { id: 5, name: "Komron Mirqosimov", age: 20 },
  //   { id: 6, name: "Muslima Sunnatova", age: 19 },
  //   { id: 7, name: "Adibaxon Mirzaxo'jayeva", age: 22 },
  //   { id: 8, name: "Salohiddin Musulmonov", age: 20 },
  //   { id: 9, name: "Obidjon Tohirjonov", age: 18 },
  // ];

  // const filteredStudents = students.filter((student) =>
  //   student.name.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    // <div className="min-h-screen bg-slate-100 p-8">
    //   <h1 className="text-center text-4xl font-bold mb-8">
    //     Studentlar Ro'yxati
    //   </h1>

    //   <div className="flex justify-center mb-8">
    //     <input
    //       type="text"
    //       placeholder="Qidirish..."
    //       value={search}
    //       onChange={(e) => setSearch(e.target.value)}
    //       className="w-96 p-3 border rounded-xl shadow"
    //     />
    //   </div>

    //   <StudentList students={filteredStudents} />
    // </div>
    <div>
      <Form/>
      {/* <Input /> */}
      {/* <UseEffectTest/> */}
      <AlertMessenger/>
    </div>
  );
};

export default App;