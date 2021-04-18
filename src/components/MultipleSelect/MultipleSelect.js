import React from "react";
import SelectSearch, { fuzzySearch } from "react-select-search";

const MultipleSelect = ({ onChange1, onChange2, options, onSubmit }) => {
  return (
    <div>
      <div className="container flex justify-between">
        <div className="flex justify-center items-center focus:outline-none">
          <SelectSearch
            className="select-search border-2 border-green-500 m-4 p-2 focus:outline-none"
            options={options}
            placeholder="pick first pokemon"
            value={options.value}
            onChange={value => onChange1(value)}
            filterOptions={fuzzySearch}
            search
          />
          <SelectSearch
            className="select-search border-2 border-green-500  m-4 p-2 focus:outline-none"
            options={options}
            search
            placeholder="pick second pokemon"
            value={options.value}
            onChange={value => onChange2(value)}
            filterOptions={fuzzySearch}
            search
          />
        </div>
        <div>
          <button
            onClick={onSubmit}
            type="submit"
            className="p-2 border-2 border-gray-500 rounded border-white text-white bg-green-500 m-4"
          >
            Compare
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultipleSelect;
