import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import _ from "lodash";
import MultipleSelect from "../components/MultipleSelect/MultipleSelect";

import { getPokemonList, getPokemonDetails } from "../actions/pokemon";
import CardDetail from "../components/CardDetails/CardDetails";

import axios from "axios";

const Compares = () => {
  const dispatch = useDispatch();
  const dataList = useSelector(state => state.pokemonList);

  const [pokemonName1, setPokemonName1] = useState("");
  const [pokemonName2, setPokemonName2] = useState("");
  const [pokStats1, setPokStats1] = useState([]);
  const [pokStats2, setPokStats2] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = (page = 1) => {
    dispatch(getPokemonList(page, 954));
  };

  async function getPokemons() {
    const result1 = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName1}`
    );
    setPokStats1(result1.data);
    const result2 = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName2}`
    );
    setPokStats2(result2.data);
    setLoaded(true);
  }

  const handleChangePokemonOne = name => {
    setPokemonName1(name);
  };

  const handleChangePokemonTwo = name => {
    setPokemonName2(name);
  };

  const handleOnCompare = e => {
    e.preventDefault();
    getPokemons();
  };

  return (
    <div className="container mt-16 min-w-full">
      <div className="flex flex-col justify-center items-center">
        <div className="text-3xl text-green-500 items-center align-center my-4">
          {" "}
          Pokemon Comparator
        </div>
        <div className="flex justify-center">
          {!_.isEmpty(dataList.data) && (
            <MultipleSelect
              onChange1={handleChangePokemonOne}
              onChange2={handleChangePokemonTwo}
              onSubmit={handleOnCompare}
              options={dataList.data.map(dataName => ({
                value: dataName.name,
                name: dataName.name
              }))}
            />
          )}
        </div>
        {loaded && <CardDetail pokemon1={pokStats1} pokemon2={pokStats2} />}
      </div>
    </div>
  );
};

export default Compares;
