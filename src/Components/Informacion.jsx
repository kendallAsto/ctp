import React from "react";

export default function Informacion({ title, body, body2, body3, extra }) {
  return (
    <div className="mb-14">
      <h1 className="font-Poppins text-3xl font-bold text-Sycamore text-center justify-center lg:text-4xl dark:text-emerald-300">
        {title}
      </h1>
      <p className="mb-6 text-center justify-center text-pretty text-xl md:text-2xl dark:text-white">{body}</p>
      <p className="mb-6 text-center justify-center text-pretty text-xl md:text-2xl dark:text-white">{body2}</p>
      <p className="mb-6 text-center justify-center text-pretty text-xl md:text-2xl dark:text-white">{body3}</p>
      <div className="mb-14 my-4">{extra}</div>
    </div>
  );
}
