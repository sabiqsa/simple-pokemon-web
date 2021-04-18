import {
  GET_DETAIL_POKEMON_LOADING,
  GET_DETAIL_POKEMON_SUCCESS,
  GET_DETAIL_POKEMON_ERROR
} from "../constant";

const initialState = {
  loading: false,
  data: {},
  error: ""
};

const pokemonDetailsReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL_POKEMON_LOADING:
      return {
        ...state,
        loading: true,
        error: ""
      };

    case GET_DETAIL_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          [action.pokemonName]: action.payload
        },
        error: ""
      };

    case GET_DETAIL_POKEMON_ERROR:
      return {
        ...state,
        loading: false,
        data: {},
        error: "internal server error"
      };

    default:
      return state;
  }
};

export default pokemonDetailsReducers;
