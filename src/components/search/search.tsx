import styles from './search.module.scss';
import classNames from 'classnames';
import { useContext, useState } from 'react';
import { SearchContext } from '../../context/SearchContext';

export interface SearchProps {
    className?: string;
}


export const Search = ({ className }: SearchProps) => {
    const [input, setInput] = useState('');
    const { dispatch } = useContext(SearchContext);
    return (
        <div className={classNames(styles.root, className)}>
            <input
                className={styles.input}
                placeholder="Search..."
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                className={styles.Button}
                onClick={() => dispatch({ type: "ADD_QUERY", payload: input })}
            >
                Search
            </button>
        </div>
    );
};
