import React from 'react';

import type { Category } from '../../interfaces/Category';
import useStyles from './styles';
import CategoryList from './CategoryList';
import CompareSelection from './CompareSelection';

interface CategoryState {
    categories?: Category[] | null;
    selectedCategory?: string | null;
    compare?: Array<any>;
}

let categories: Category[] = [
    {
        id: '1',
        name: 'Security camera',
        icon: 'fas fa-camera-retro',
        created_time: '2011-10-05T14:48:00.000Z'
    },
    {
        id: '2',
        name: 'Vacuum robot',
        icon: 'fas fa-robot',
        created_time: '2011-10-05T14:48:00.000Z'
    },
    {
        id: '3',
        name: 'Light bulbs',
        icon: 'fas fa-lightbulb',
        created_time: '2011-10-05T14:48:00.000Z'
    },
    {
        id: '4',
        name: 'Door locks',
        icon: 'fas fa-shield-alt',
        created_time: '2011-10-05T14:48:00.000Z'
    },
    {
        id: '5',
        name: 'Speaker',
        icon: 'fas fa-volume-up',
        created_time: '2011-10-05T14:48:00.000Z'
    },
];

export default function HomeContainer() {
    const classes = useStyles();

    const [state, setState] = React.useReducer(
        (state: CategoryState, newState: CategoryState) => ({ ...state, ...newState }),
        {
            selectedCategory: null,
            categories: categories,
            compare: [
                { id: '1' },
                { id: '2' },
                { id: '3' },
                { id: '4' }
            ],
        }
    );

    React.useEffect(() => {
        setState({ selectedCategory: categories[0].id });
    }, []);

    const handleSelectCategory = (id: string) => {
        setState({ selectedCategory: id });
    };

    const handleDrop = (newData) => {
        console.log(newData);

        setState({ compare: newData });
    };

    return (
        <div className={classes.container}>

            <div className={classes.wrapper}>
                <div className={classes.toolbar}>
                    <div className={classes.title}>
                        <i className='fas fa-home' />
                        {'Smart home'}
                    </div>
                    <CategoryList
                        categories={categories}
                        selectedCategory={state.selectedCategory}
                        handleSelectCategory={handleSelectCategory}
                    />
                </div>
                <div>
                    <CompareSelection
                        compare={state.compare}
                        handleDrop={handleDrop}
                    />
                </div>
            </div>

        </div>
    );
}
