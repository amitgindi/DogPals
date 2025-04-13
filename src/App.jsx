import React from "react";
import DogForm from "./components/DogForm";
import DogList from "./components/DogList";
import Schedule from "./components/Schedule";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">DogPals</h1>
      <DogForm />
      <DogList />
      <Schedule />
    </div>
  );
}
