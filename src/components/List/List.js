import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import _ from "lodash";
import { getPokemonList } from "../../actions/pokemon";
import { Link, useHistory } from "react-router-dom";

import Pagination from "react-paginate";

import Search from "../Search/Search";

const ListPokemon = ({ dataPokemon }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const dataListPokemon = useSelector(state => state.pokemonList);

  const [search, setSearch] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = (page = 1) => {
    dispatch(getPokemonList(page));
  };

  const getDataPokemon = () => {
    if (dataListPokemon.loading) {
      return <h1>Loading ... </h1>;
    }

    if (!_.isEmpty(dataListPokemon.data)) {
      return dataListPokemon.data
        .filter(filters =>
          filters.name.toLowerCase().includes(search.toLowerCase())
        )
        .map(data => {
          return (
            <div className="container flex flex-col justify-center items-center border-2 border-green-500 p-2">
              <div className="text-xl text-green-500 align-center">
                {data.name}
              </div>
              <Link
                to={`pokemon/${data.name}`}
                className="p-2 rounded bg-gray-800 text-white"
              >
                Show Detail
              </Link>
            </div>
          );
        });
    }

    if (dataListPokemon.error !== "") {
      return <h1>Data not found !</h1>;
    }
    return;
  };

  const handleOnChange = e => {
    setSearch(e.target.value);
  };

  const handleOnSearch = () => {
    // history.push(`/pokemon/${search}`);
  };

  return (
    <div className="container min-w-full mt-12">
      <div className="flex justify-center">
        <Search
          handleOnChange={handleOnChange}
          handleOnSearch={handleOnSearch}
        />
      </div>
      <div className="grid grid-cols-4 gap-2 m-2">{getDataPokemon()}</div>

      {!_.isEmpty(dataListPokemon.data) && (
        <Pagination
          pageCount={Math.ceil(dataListPokemon.count / 24)}
          onPageChange={data => getData(data.selected + 1)}
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
          containerClassName={"flex justify-center m-2"}
          pageLinkClassName={"text-2xl color green-500"}
          nextClassName={"text-white bg-blue-500 p-2 focus:outline-none"}
          previousClassName={"text-white bg-blue-500 p-2 focus:outline-none"}
          activeClassName={"bg-green-500"}
          disabledClassName={"bg-green-500"}
        />
      )}
    </div>
  );
};

export default ListPokemon;
