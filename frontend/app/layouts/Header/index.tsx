import React from 'react';
import Link from 'next/link';

import useStyles from './styles';

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Link href='/'>
                <a className={classes.logo}>GADGET COMPARE PLATFORM</a>
            </Link>
        </div>
    );
}
