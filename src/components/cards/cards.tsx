import styles from './cards.module.scss';
import classNames from 'classnames';
import { Card } from '../card/card';
import { useState, useEffect } from 'react';

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
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cardss-and-templates
 */
export const Cards = ({ className }: CardsProps) => {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        // https://api.themoviedb.org/3/discover/movie?api_key=e70f2ced1b84b868f645d4c0b91ab47f
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=e70f2ced1b84b868f645d4c0b91ab47f").then((response) => response.json())
            .then((data) => setMovies(data.results))
            .catch((error) => console.log(error));
    }, []);
    return (
        <div className={classNames(styles.root, className)}>
            {movies.map((movie) => (
                <Card key={movie.id} movie={movie} />
            ))}
        </div>
    );
};
