import { ActionCreator, ThunkAction} from '@reduxjs/toolkit'
import { getAll, searchCharactersWithQuery } from '../../../service/api'
import { AddToFavoritesAction, ChangePageAction, CharactersActions, InitialFetchOfCharactersAction, InitialFetchOfCharactersErrorAction, InitialFetchOfCharactersSuccessAction, RemoveAllFromFavoritesAction, RemoveFromFavoritesAction, ResetSearchAction, SearchCharactersAction, SearchCharactersErrorAction, SearchCharactersSuccessAction } from '../../../types/character.actions'
import { Character } from "../../../types/character.types";


const initialFetchCharacters: ActionCreator<InitialFetchOfCharactersAction> = (page: number) => {
    return {
        type: 'INITIAL_FETCH',
        payload: page
    }
}

const initialFetchCharactersSuccess: ActionCreator<InitialFetchOfCharactersSuccessAction> = (characters: Character[]) => {
    return {
        type: 'INITIAL_FETCH_SUCCESS',
        payload: characters
    }
}

const initialFetchCharactersError: ActionCreator<InitialFetchOfCharactersErrorAction> = (error: string) => {
    return {
        type: 'INITIAL_FETCH_ERROR',
        payload: error
    }
}

export const changePage: ActionCreator<ChangePageAction> = (page: number) => {
    return {
        type: 'CHANGE_PAGE',
        payload: page
    }
}

const searchCharacters: ActionCreator<SearchCharactersAction> = (search: string) => {
    return {
        type: 'SEARCH',
        payload: search
    }
}

const searchCharactersSuccess: ActionCreator<SearchCharactersSuccessAction> = (characters: Character[]) => {
    return {
        type: 'SEARCH_SUCCESS',
        payload: characters
    }
}

const searchCharactersError: ActionCreator<SearchCharactersErrorAction> = (error: string) => {
    return {
        type: 'SEARCH_ERROR',
        payload: error
    }
}

export const resetSearch: ActionCreator<ResetSearchAction> = () => {
    return {
        type: 'RESET_SEARCH',
    }
}

export const addCharacterToFavorites: ActionCreator<AddToFavoritesAction> = (character: Character) => {
    return {
        type: 'ADD_FAVORITE',
        payload: character
    }
}
export const removeCharacterFromFavorites: ActionCreator<RemoveFromFavoritesAction> = (character: Character) => {
    return {
        type: 'REMOVE_FAVORITE',
        payload: character
    }
}

export const removeAllCharactersFromFavorites: ActionCreator<RemoveAllFromFavoritesAction> = () => {
    return {
        type: 'REMOVE_ALL',
    }
}

interface SearchCharactersThunkAction extends ThunkAction<void, unknown, unknown, CharactersActions>{};

export const fetchCharactersThunk = (page: number): SearchCharactersThunkAction => {
    return async (dispatch) => {
        dispatch(initialFetchCharacters(page))
        try {
            const characters = await getAll(page);
            dispatch(initialFetchCharactersSuccess(characters))
        } catch (error) {
            dispatch(initialFetchCharactersError(error));
        }
    }
}

export const searchCharactersThunk = (query: string): SearchCharactersThunkAction => {
    return async (dispatch) => {
        dispatch(searchCharacters(query));
        try {
            const characters = await searchCharactersWithQuery(query);
            dispatch(searchCharactersSuccess(characters))
        } catch (error) {
            dispatch(searchCharactersError(error));
        }
    }
}