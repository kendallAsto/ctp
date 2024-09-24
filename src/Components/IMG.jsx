import React from "react";

export default function IMG({ src, alt }) {
  return (
    <div className="flex aspect-square justify-center p-2 md:w-1/4 md:p-4">
      <img
        className="h-[100%] rounded-xl object-cover transition-transform duration-300 lg:hover:scale-150"
        src={src}
        alt={alt}
      />
    </div>
  );
}
