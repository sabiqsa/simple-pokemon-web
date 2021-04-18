import axios from "axios";
import {
  GET_POKEMON_LOADING,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_ERROR,
  GET_DETAIL_POKEMON_LOADING,
  GET_DETAIL_POKEMON_SUCCESS,
  GET_DETAIL_POKEMON_ERROR
} from "../constant";

export const getPokemonList = (page, limits) => async dispatch => {
  try {
    dispatch({
      type: GET_POKEMON_LOADING
    });
    const perPage = limits ? limits : 24;
    const offset = page * perPage - perPage;

    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=${perPage}&offset=${offset}`
    );

    dispatch({
      type: GET_POKEMON_SUCCESS,
      payload: response.data
    });
  } catch (e) {
    dispatch({
      type: GET_POKEMON_ERROR
    });
  }
};

export const getPokemonDetails = pokemon => async dispatch => {
  try {
    dispatch({
      type: GET_DETAIL_POKEMON_LOADING
    });
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    dispatch({
      type: GET_DETAIL_POKEMON_SUCCESS,
      payload: response.data,
      pokemonName: pokemon
    });
  } catch (e) {
    dispatch({
      type: GET_DETAIL_POKEMON_ERROR
    });
  }
};
