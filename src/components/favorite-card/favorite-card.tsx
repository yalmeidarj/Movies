import styles from './favorite-card.module.scss';
import classNames from 'classnames';
import { useContext } from 'react';
import { FavoriteContext } from '../../context/FavoriteContext';

export interface FavoriteCardProps {
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
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-favorite-cards-and-templates
 */
export const FavoriteCard = ({ className, movie }: FavoriteCardProps) => {
    const { dispatch } = useContext(FavoriteContext);
    return (
        <div className={classNames(styles.root, className)}>
            <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} className={styles.favoriteImg} />

            <div
                className={styles.garbage}
                onClick={() => dispatch({ type: "REMOVE_FAVORITE", payload: movie })}
            >
                <img src={'../src/assets/garbage_bin.png'} className={styles.garbageImg} />
            </div>
            <div className={styles.detail}>
                <h1>{movie.title}</h1>
                <span className={styles.rating}>{movie.vote_average}</span>
            </div>
        </div>
    );
};
