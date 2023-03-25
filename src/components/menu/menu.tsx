import styles from './menu.module.scss';
import classNames from 'classnames';
import { useContext, useState } from 'react';
import { SearchContext } from '../../context/SearchContext';

export interface MenuProps {
    className?: string;
}

const sortBy: { q: string; text: string }[] = [
    { q: 'Popularity.desc', text: 'Popularity' },
    { q: 'release_date.desc', text: 'Release Date' },
    { q: 'vote_count.desc', text: 'Most Voted' },
];

const genres: { id: string; text: string }[] = [
    { id: '28', text: 'Action' },
    { id: '12', text: 'Adventure' },
    { id: '35', text: 'Comedy' },
    { id: '18', text: 'Drama' },
    { id: '27', text: 'Horror' },
    { id: '10749', text: 'Romance' },
    { id: '53', text: 'Thriller' },
    { id: '16', text: 'Animation' },
];

export const Menu = ({ className }: MenuProps) => {
    const { dispatch } = useContext(SearchContext);
    const [selectedSort, setSelectedSort] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSort(e.target.value);
        dispatch({ type: 'SORT_BY', payload: e.target.value });
    };

    const handleGenreClick = (id: string) => {
        setSelectedGenre(id);
        dispatch({ type: 'ADD_GENRE', payload: id });
    };

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.logo}>
                <img src="../src/assets/movies-icon.jpg" className={styles.logoImage} />
                <span className={styles.logoText}>Yalme Movies</span>
            </div>
            <div className={classNames(styles.dropdown, styles.selector)}>
                <span className={styles.dropdownTitle}>Sort By</span>
                <select
                    className={styles.dropdownSelect}
                    onChange={handleSortChange}
                    value={selectedSort}
                >
                    <option value="">Select an option</option>
                    {sortBy.map((item) => (
                        <option key={item.q} value={item.q}>
                            {item.text}
                        </option>
                    ))}
                </select>
            </div>
            <div className={classNames(styles.dropdown, styles.selector)}>
                <span className={styles.dropdownTitle}>Genre</span>
                <select
                    className={styles.dropdownSelect}
                    onChange={(e) => handleGenreClick(e.target.value)}
                    value={selectedGenre}
                >
                    <option value="">Select an option</option>
                    {genres.map((item) => (
                        <option key={item.id} value={item.id}>
                            {item.text}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};
