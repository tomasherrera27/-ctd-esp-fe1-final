import { Action } from "@reduxjs/toolkit";
import { Character } from "./character.types";

export interface InitialFetchOfCharactersAction extends Action {
  type: "INITIAL_FETCH";
  payload: number;
}

export interface InitialFetchOfCharactersSuccessAction extends Action {
  type: "INITIAL_FETCH_SUCCESS";
  payload: Character[];
}

export interface InitialFetchOfCharactersErrorAction extends Action {
  type: "INITIAL_FETCH_ERROR";
  payload: string;
}

export interface ChangePageAction extends Action {
  type: "CHANGE_PAGE";
  payload: number;
}

export interface SearchCharactersAction extends Action {
  type: "SEARCH";
  payload: string;
}

export interface SearchCharactersSuccessAction extends Action {
  type: "SEARCH_SUCCESS";
  payload: Character[];
}

export interface SearchCharactersErrorAction extends Action {
  type: "SEARCH_ERROR";
  payload: string;
}

export interface ResetSearchAction extends Action {
  type: "RESET_SEARCH";
}

export interface AddToFavoritesAction extends Action {
  type: "ADD_FAVORITE";
  payload: Character;
}
export interface RemoveFromFavoritesAction extends Action {
  type: 'REMOVE_FAVORITE',
  payload: Character
}

export interface RemoveAllFromFavoritesAction extends Action {
  type: 'REMOVE_ALL',
}

export type CharactersActions =
  | InitialFetchOfCharactersAction
  | InitialFetchOfCharactersSuccessAction
  | InitialFetchOfCharactersErrorAction
  | ChangePageAction
  | SearchCharactersAction
  | SearchCharactersSuccessAction
  | SearchCharactersErrorAction
  | ResetSearchAction
  | AddToFavoritesAction
  | RemoveFromFavoritesAction
  | RemoveAllFromFavoritesAction;
