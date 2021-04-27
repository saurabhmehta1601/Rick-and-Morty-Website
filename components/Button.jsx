import * as React from "react";
import Link from "next/link"

export default function Button({ text, side,link }) {
  return (
    <div
      className={`bg-gray-600 inline-block text-gray-50 px-4 py-2 text-2xl rounded 
      ${side==="left"?'ml-auto' : ''}`}
    >
      <Link href={link}>
      {text}
      </Link>
    </div>
  );
}
