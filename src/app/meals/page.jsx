import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      This is meals page
      <p>
        <Link href={"/meals/share"}>Share</Link>
      </p>
      <p>
        <Link href={"/meals/meals-1"}>Meals 1 (dynamic)</Link>
      </p>
    </div>
  );
};

export default page;
