import styles from './menu.module.scss';
import classNames from 'classnames';

export interface MenuProps {
    className?: string;
}

const sortBy: string[] = ['Popularity', 'Release Date', 'Most Voted'];
const genre: string[] = ['Action', 'Adventure', 'Animation', 'Comedy'];

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-menus-and-templates
 */
export const Menu = ({ className }: MenuProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.logo}>
                <img src="../src/assets/movies-icon.jpg" className={styles.logoImage} />
                <span className={styles.logoText}>Yalme Movies</span>
            </div>
            <span className={styles.Title}>
                Sort By
                <hr className={styles.hr} />
            </span>
            <ul className={styles.list}>
                {sortBy.map((item) => (
                    <li className={styles.listItem} key={item}>
                        {item}
                    </li>
                ))}
            </ul>
            <span className={styles.Title}>
                Genre
                <hr className={styles.hr} />
            </span>
            <ul className={styles.list}>
                {genre.map((item) => (
                    <li className={styles.listItem} key={item}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
