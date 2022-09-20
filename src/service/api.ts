import { Character } from "../types/character.types";

export const searchCharactersWithQuery = async (query: string): Promise<Character[]> => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`)
    const data = await response.json()
    return data.results
}

export const getAll = async (page: number): Promise<Character[]> => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
    const data = await response.json();
    return data.results;
}

