import React, { useState } from "react";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";

const dogsRef = collection(db, "dogs");

export default function DogForm() {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(dogsRef, {
      name,
      owner,
      image: `https://placedog.net/300/200?id=${Math.floor(Math.random() * 1000)}`
    });
    setName("");
    setOwner("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-3 max-w-md mx-auto">
      <input
        className="w-full border p-2 rounded"
        placeholder="Dog's Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="w-full border p-2 rounded"
        placeholder="Owner's Name"
        value={owner}
        onChange={(e) => setOwner(e.target.value)}
        required
      />
      <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
        Save Dog
      </button>
    </form>
  );
}
