import { combineReducers } from "redux";
import Pokemon from "./pokemon";
import PokemonDetail from "./pokemonDetails";

const RootReducers = combineReducers({
  pokemonList: Pokemon,
  pokemonDetail: PokemonDetail
});

export default RootReducers;
