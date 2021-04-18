import {
  GET_POKEMON_LOADING,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_ERROR
} from "../constant";

const initialState = {
  loading: false,
  data: [],
  error: "",
  count: 0
};

const pokemonReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_POKEMON_SUCCESS:
      return {
        loading: false,
        data: action.payload.results,
        error: "",
        count: action.payload.count
      };
    case GET_POKEMON_ERROR:
      return {
        loading: false,
        data: [],
        error: "error ger api pokemon"
      };

    default:
      return state;
  }
};

export default pokemonReducers;
