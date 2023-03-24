import logo from './assets/logo.svg';
import styles from './App.module.scss';
import { Menu } from './components/menu/menu';
import { Container } from './components/container/container';
import { Favorite } from './components/favorite/favorite';
import { FavoriteContextProvider } from './context/FavoriteContext';
import Classnames from 'classnames';

function App() {
    return (
        <div className={Classnames(styles.App, styles.nav)}>
            <Menu />
            <FavoriteContextProvider>
                <Container />
                <Favorite />
            </ FavoriteContextProvider>
        </div>
    );
}

export default App;
