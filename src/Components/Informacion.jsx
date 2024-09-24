import React, { Children } from "react";

export default function Informacion({ title, body, body2, body3, extra }) {
  return (
    <div className="mb-14">
      <h1 className="font-Poppins text-3xl font-bold text-Atlantis lg:text-4xl">
        {title}
      </h1>
      <p className="mb-6 text-pretty text-2xl md:text-2xl">{body}</p>
      <p className="mb-6 text-pretty text-2xl md:text-2xl">{body2}</p>
      <p className="mb-6 text-pretty text-2xl md:text-2xl">{body3}</p>
      <div className="mt-4">{extra}</div>
    </div>
  );
}
