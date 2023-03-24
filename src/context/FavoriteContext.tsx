import React, { createContext, useReducer } from 'react';

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    overview: string;

}

interface State {
    favorites: Movie[];
}

interface FavoriteAction {
    type: string;
    payload: Movie;
}
const INITIAL_STATE: State = {
    favorites: [],
}

const FavoriteReducer = (state: State, action: FavoriteAction) => {
    switch (action.type) {
        case 'ADD_FAVORITE':
            return {
                favorites: [...state.favorites, action.payload]
            }
        case 'REMOVE_FAVORITE':
            return {
                favorites: [...state.favorites.filter(item => item.id !== action.payload.id)]
            }
        default:
            return state;
    }
};

export const FavoriteContext = createContext<{
    state: State,
    dispatch: React.Dispatch<FavoriteAction>
}>({ state: INITIAL_STATE, dispatch: () => { } })


interface ProviderProps {
    children: React.ReactNode;
}
export const FavoriteContextProvider = ({ children }: ProviderProps) => {
    const [state, dispatch] = useReducer(FavoriteReducer, INITIAL_STATE);
    return (
        <FavoriteContext.Provider value={{ state, dispatch }}>
            {children}
        </FavoriteContext.Provider>
    )
}