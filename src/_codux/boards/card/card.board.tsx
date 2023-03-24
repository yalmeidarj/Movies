import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';
import { useContext } from 'react';


export default createBoard({
    name: 'Card',

    Board: () => (
        <Card
            movie={{
                id: 123,
                overview: 'desc',
                release_date: '2000',
                title: 'Avatar',
                vote_average: 7,
                poster_path: './src/assets/avatar.jpg',
            }}
        />
    ),
});
