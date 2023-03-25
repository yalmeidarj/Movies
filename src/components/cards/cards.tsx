import styles from './cards.module.scss';
import classNames from 'classnames';
import { Card } from '../card/card';
import { useState, useEffect, useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';

export interface CardsProps {
    className?: string;
}


export interface Movie {
    id: number;
    poster_path: string;
    title: string;
    overview: string;
    vote_average: number;
    release_date: string;
}

export const Cards = ({ className }: CardsProps) => {
    const [movies, setMovies] = useState<Movie[]>([]);

    const { state } = useContext(SearchContext);

    const { sortBy, genre, query } = state;
    // useEffect(() => {
    //     const fetchMovies = async () => {
    //         try {
    //             const url =
    //                 query !== ''
    //                     ? `https://api.themoviedb.org/3/search/movie?api_key=e70f2ced1b84b868f645d4c0b91ab47f&query=${query}`
    //                     : `https://api.themoviedb.org/3/discover/movie?api_key=e70f2ced1b84b868f645d4c0b91ab47f&sort_by=${sortBy}&with_genres=${genre}`;

    //             const response = await fetch(url);
    //             const data = await response.json();

    //             setMovies(data.results);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };

    //     fetchMovies();
    // }, [sortBy, genre, query]);

    useEffect(() => {
        // https://api.themoviedb.org/3/discover/movie?api_key=e70f2ced1b84b868f645d4c0b91ab47f
        fetch(
            query !== ''
                ? `https://api.themoviedb.org/3/search/movie?api_key=e70f2ced1b84b868f645d4c0b91ab47f&query=${query}`
                : `https://api.themoviedb.org/3/discover/movie?api_key=e70f2ced1b84b868f645d4c0b91ab47f&sort_by=${sortBy}&with_genres=${genre}`
        )
            .then((response) => response.json())
            .then((data) => setMovies(data.results))
            .catch((error) => console.log(error));
    }, [sortBy, genre, query]);
    console.log(movies);
    return (
        <div className={classNames(styles.root, className)}>
            {movies?.map((movie) => (
                <Card key={movie.id} movie={movie} />
            ))}
        </div>
    );
};
