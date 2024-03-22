import React from "react";

const DarkPattern = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto flex justify-center min-[1200px]:items-end min-[1200px]:justify-end min-[1200px]:pr-48">
      <div className="max-w-[420px] space-y-10 min-[1200px]:text-start text-center">
        <h2 className="text-4xl font-semibold ">Dark Pattern Removal</h2>
        <p className="text-lg opacity-60 ">
          Say goodbye to sneaky tactics used by online stores. ClearFlow clears
          out hidden terms, fake reviews, and distracting offers, giving you
          clarity while shopping.{" "}
          <a className="underline">Download the extension here</a>
        </p>
      </div>
    </div>
  );
};

export default DarkPattern;
