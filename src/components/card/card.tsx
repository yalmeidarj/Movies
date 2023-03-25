import styles from './card.module.scss';
import classNames from 'classnames';
import { useContext } from 'react';
import { FavoriteContext } from '../../context/FavoriteContext';

export interface CardProps {
    className?: string;
    movie: {
        id: number;
        poster_path: string;
        title: string;
        overview: string;
        vote_average: number;
        release_date: string;
    };
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cards-and-templates
 */
export const Card = ({ className, movie }: CardProps) => {
    const { dispatch } = useContext(FavoriteContext);
    return (
        <div className={classNames(styles.root, className)}>
            <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} className={styles.cardImg} />
            <div className={styles.detail}>
                <h1>{movie.title}</h1>
                <span className={styles.rating}>{movie.vote_average}</span>
                <p className={styles.description}>{movie.overview.substring(0, 180)} ...</p>
                <button
                    className={styles.cardButton}
                    onClick={() => dispatch({ type: "ADD_FAVORITE", payload: movie })}
                >+</button>
            </div>
        </div>
    );
};
