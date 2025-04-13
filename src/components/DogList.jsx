import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

export default function DogList() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchDogs = async () => {
      const snapshot = await getDocs(collection(db, "dogs"));
      const data = snapshot.docs.map(doc => doc.data());
      setDogs(data);
    };
    fetchDogs();
  }, []);

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
      {dogs.map((dog, i) => (
        <div key={i} className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
          <img src={dog.image} className="rounded-lg w-full h-40 object-cover mb-3" />
          <h3 className="text-lg font-bold">{dog.name}</h3>
          <p className="text-sm text-gray-600">Owner: {dog.owner}</p>
        </div>
      ))}
    </div>
  );
}
