import { Reducer } from "@reduxjs/toolkit";
import { Character } from "../../../types/character.types";
import {CharactersActions} from "../../../types/character.actions"
export interface CharacterState {
  status: "NOTKNOWN" | "LOADING" | "SUCCESS" | "ERROR";
  search: string;
  page: number;
  characters: Character[];
  favorites: Character[];
}

const initialState: CharacterState = {
  status: "NOTKNOWN",
  search: "",
  page: 1,
  characters: [],
  favorites: [],
};

const mainReducer: Reducer<CharacterState, CharactersActions> = (state = initialState, action) => {
  switch (action.type) {
    case "INITIAL_FETCH":
      return {
        ...state,
        page: action.payload,
        status: "LOADING",
      };
    case "INITIAL_FETCH_SUCCESS":
      return {
        ...state,
        characters: action.payload,
        status: "SUCCESS",
      };
    case "INITIAL_FETCH_ERROR":
      return {
        ...state,
        status: "ERROR",
      };
    case "CHANGE_PAGE":
      return {
        ...state,
        page: action.payload,
        status: "LOADING",
      };
    case "SEARCH":
      return {
        ...state,
        search: action.payload,
        status: "LOADING",
      };
    case "SEARCH_SUCCESS":
      return {
        ...state,
        characters: action.payload,
        status: "SUCCESS",
      };
    case "SEARCH_ERROR":
      return {
        ...state,
        status: "ERROR",
        characters: [],
      };
    case "RESET_SEARCH":
      return {
        ...state,
        search: "",
      };
      case 'ADD_FAVORITE': 
      return {
          ...state,
          favorites: [action.payload, ...state.favorites.filter(character => character.id !== action.payload.id)],
      }
  case 'REMOVE_FAVORITE':
      return {
          ...state,
          favorites: state.favorites.filter(character => character.id !== action.payload.id)
      }
  case 'REMOVE_ALL':
      return {
          ...state,
          favorites: []
      }
    default:
      return state;
  }
};

export default mainReducer;
