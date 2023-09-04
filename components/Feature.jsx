import React from "react";
import Link from "next/link";
import Image from "next/image";

const Feature = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {/* Repeat this card section for each card */}
      <div className="w-[300px]">
        <div className="max-w-xs mx-auto bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:-translate-y-1 hover:scale-105">
          <Link href="#" className="block rounded-t-lg">
            <Image src="/assets/bg3.jpg" alt="Article Image" width={300} height={300} />
          </Link>
          <div className="p-3 flex flex-col items-center justify-center">
            <Link
              href="#"
              className="block mb-2 text-lg font-bold text-gray-900 dark:text-white dark:hover:text-blue-300 transition-colors text-center">
              BALI
            </Link>
          </div>
        </div>
      </div>

      {/* Repeat this card section for each card */}
    </div>
  );
};

export default Feature;
