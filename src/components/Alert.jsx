import React from "react";

function Alert({ title, description }) {
  return (
    <div
      className="p-2 bg-green-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
      role="alert"
    >
      <span className="flex rounded-full bg-green-500 uppercase px-2 py-1 text-xs font-bold mr-3">
        {title}
      </span>
      <span className="font-semibold mr-2 text-left flex-auto">
        {description}
      </span>
    </div>
  );
}

export default Alert;
