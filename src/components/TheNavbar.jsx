import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function TheNavbar() {
  const location = useLocation();

  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <div>
      <>
        <div className="w-full flex justify-around relative px-3 py-5 shadow-sm">
          <div className=" justify-end">
            <Link
              to="/"
              className={
                splitLocation[1] === ""
                  ? "mx-4 text-2xl font-bold text-white border-b-2 "
                  : "mx-4 text-xl font-bold text-white hover:text-gray-300 transition-colors ease-in "
              }
            >
              Quote
            </Link>
            <Link
              to="/todo"
              className={
                splitLocation[1] === "todo"
                  ? "mx-4 text-2xl font-bold text-white border-b-2 "
                  : "mx-4 text-xl font-bold text-white hover:text-gray-300 transition-colors ease-in "
              }
            >
              Todo
            </Link>
          </div>
        </div>
      </>
    </div>
  );
}
