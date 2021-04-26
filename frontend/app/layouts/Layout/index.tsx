import React from 'react';

import Header from '../Header';
import useStyles from './styles';

interface LayoutProps {
    children?: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
    const { children } = props;
    const classes = useStyles();
    return (
        <>
            <Header />
            <div className={classes.container}>
                {children}
            </div>
        </>
    );
}
