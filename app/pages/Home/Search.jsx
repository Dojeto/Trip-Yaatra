"use client";
import Link from "next/link";
import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";

const Search = (props) => {
  const { data } = props;

  const nestedObjects = Object.values(data);

  const tripPackages = nestedObjects.flatMap((nestedObj) => [
    [nestedObj.title, nestedObj.link],
  ]);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    const inputText = e.target.value.toLowerCase();
    setSearchText(inputText);
    displayResults(inputText);
  };

  const displayResults = (inputText) => {
    if (inputText === "") {
      setSearchResults([]);
      return;
    }

    const filteredPackages = tripPackages.filter((packageName) =>
      packageName[0].toLowerCase().includes(inputText)
    );
    setSearchResults(filteredPackages);
  };

  return (
    <div className=" flex justify-center w-3/5 item-center transition-all md:w-4/5 md:text-sm">
      <div className="relative text-white my-8 p-4 flex justify-start items-center gap-4 w-full h-18 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
        <RiSearchLine size="28px" color="gray" />
        <input
          type="text"
          className="bg-transparent w-full rounded-md focus:outline-none focus:ring-0"
          placeholder="Search for trip packages..."
          value={searchText}
          onChange={handleInputChange}
        />
        {searchResults.length > 0 && (
          <div className="absolute z-10 left-0 w-full top-[72px] bg-white border shadow-lg text-black ">
            {searchResults.map((result, index) => (
              <Link key={index} href={result[1]} shallow>
                <div
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                >
                  {result[0]}
                </div>
              </Link>
            ))}
          </div>
        )}
        <button className="bg-darkvl p-2 rounded-md">Search</button>
      </div>
    </div>
  );
};
export default Search;
