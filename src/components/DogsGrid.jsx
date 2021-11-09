import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DogsGrid() {
  const initialValue = [];
  const [dogs, setDogs] = useState(initialValue);

  useEffect(() => {
    getDogs();
  }, []);

  function getDogs() {
    axios
      .get("https://random.dog/woof.json?ref=apilist.fun")
      .then((res) => {
        console.log(res.data);
        setDogs((dogs) => [...dogs, res.data]);
        console.log(dogs);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <button
        onClick={getDogs}
        className="my-10 py-3 px-2 bg-red-500 rounded text-white hover:bg-red-700 transition-colors transform ease-in"
      >
        More Dogs
      </button>
      <div className="flex justify-center items-start">
        <div className="py-20 grid grid-cols-6 gap-5 w-4/5">
          {dogs.map((dog, index) => (
            <img
              className="w-full h-64 object-contain object-center"
              src={dog.url}
              alt=""
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
