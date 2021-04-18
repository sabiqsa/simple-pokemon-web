import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonDetails } from "../../actions/pokemon";

import _ from "lodash";

const Card = props => {
  const { pokemon } = useParams();
  const dispatch = useDispatch();
  const pokemonDetails = useSelector(state => state.pokemonDetail);

  useEffect(() => {
    dispatch(getPokemonDetails(pokemon));
  }, []);

  const getDataPokemonDetails = () => {
    if (!_.isEmpty(pokemonDetails.data[pokemon])) {
      const data = pokemonDetails.data[pokemon];
      return (
        <div className="container items-center">
          <div className="flex">
            <img
              src={data.sprites.front_default}
              alt=""
              className="p-2 w-40 h-40"
            />
            <img
              src={data.sprites.back_default}
              alt=""
              className="p-2 w-40 h-40"
            />
            <img
              src={data.sprites.front_shiny}
              alt=""
              className="p-2 w-40 h-40"
            />
            <img
              src={data.sprites.back_shiny}
              alt=""
              className="p-2 w-40 h-40"
            />
          </div>

          <div className="text-xl font-bold text-green-500 align-center">
            {data.name}
          </div>
          <div className="flex justify-center w-max">
            {data.types.map(type => (
              <div className="text-xm text-white p-2 mr-2 bg-gray-800 rounded">
                {type.type.name}
              </div>
            ))}
          </div>
          <div className="border-2 bg-orange-500">
            <p>Weight : {data.weight}</p>
          </div>
          <div className="border-2 bg-orange-500">
            <p>Height : {data.height}</p>
          </div>
          <div className="border-2 bg-orange-500">
            <p>
              Ability :{" "}
              {data.abilities.map(ability => ability.ability.name).join(", ")}
            </p>
          </div>

          <div className="">
            <div className="text-2xl font-bold">Status</div>
            {data.stats.map(stat => (
              <div className="flex text-xl">
                <p>{stat.stat.name} </p>
                <p>: {stat.base_stat}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (pokemonDetails.loading) {
      return <h1>Loading ...</h1>;
    }

    if (pokemonDetails.error !== "") {
      return <h1>Data Not Found ...</h1>;
    }

    return;
  };
  return (
    <div className="container border-2 border-green-500 p-2 my-2 flex justify-center items-center min-w-full mt-14">
      {getDataPokemonDetails()}
    </div>
  );
};

export default Card;
