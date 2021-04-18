import React from "react";

const Search = ({ handleOnChange, handleOnSearch }) => {
  return (
    <div className="border-2 p-2 m-2 border-green-500 w-full flex justify-between">
      <input
        className="text-xl w-full mr-2 p-2 outline-none"
        onChange={e => handleOnChange(e)}
        placeholder="Search by Name ..."
      />
      {/* <button
        className="bg-blue-500 text-white p-2"
        onClick={() => handleOnSearch()}
      >
        Search
      </button> */}
    </div>
  );
};

export default Search;
