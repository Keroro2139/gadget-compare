import React from 'react';

import useStyles from './styles';
import type { Category } from '../../interfaces/Category';

interface CategoryListProps {
    categories: Category[];
    selectedCategory: string;
    handleSelectCategory: (id: string) => void;
}

export default function CategoryList(props: CategoryListProps) {
    const classes = useStyles();
    const { categories, selectedCategory, handleSelectCategory } = props;
    return (
        <ul className={classes.categoryList}>
            {categories.map((category, i) => {
                let active = selectedCategory === category.id;
                return (
                    <li
                        key={i}
                        className={active ? 'active' : ''}
                        onClick={() => handleSelectCategory(category.id)}
                    >
                        <i className={category.icon} />
                        <p>{category.name}</p>
                    </li>
                );
            })}
        </ul>
    );
}
