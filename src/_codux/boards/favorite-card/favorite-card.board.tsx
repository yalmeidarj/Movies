import { createBoard } from '@wixc3/react-board';
import { FavoriteCard } from '../../../components/favorite-card/favorite-card';

export default createBoard({
    name: 'FavoriteCard',
    Board: () => (
        <FavoriteCard
            movie={{
                id: 43,
                overview: 'Something again',
                release_date: '2000',
                title: 'Avatar',
                vote_average: 4,
                poster_path: './src/assets/avatar.jpg',
            }}
        />
    ),
    environmentProps: {
        windowWidth: 938,
    },
    // environmentProps: {
    //     canvasHeight: 264,
    //     canvasWidth: 90,
    // },
});
