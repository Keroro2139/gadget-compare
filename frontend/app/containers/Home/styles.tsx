import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        background: theme.palette.background.default,
        padding: 24,
    },
    wrapper: {
        margin: '0 auto',

        [theme.breakpoints.down('xl')]: {
            width: 1280,
        },
        [theme.breakpoints.down('lg')]: {
            width: 1080,
        },
        [theme.breakpoints.down('md')]: {
            width: '100%',
        }
    },
    toolbar: {
        width: '100%',
    },
    title: {
        fontSize: '1.5rem',
        fontWeight: 500,
        marginBottom: 8,

        '& i': {
            fontSize: '1.375rem',
            color: theme.palette.text.primary,
            marginRight: 8,
        }
    },
    categoryList: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 6,
        margin: 0,
        padding: 0,

        '& li': {
            cursor: 'pointer',
            minWidth: 120,
            maxWidth: 120,
            height: 90,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            userSelect: 'none',
            borderBottom: '1px solid rgb(221, 221, 221)',
            borderTop: '1px solid rgb(221, 221, 221)',
            borderLeft: '1px solid rgb(221, 221, 221)',
            borderRight: '1px solid transparent',
            transition: `all 150ms ${theme.transitions.easing.easeInOut}`,

            '&:first-child': {
                borderTopLeftRadius: 6,
                borderBottomLeftRadius: 6,
            },
            '&:last-child': {
                borderTopRightRadius: 6,
                borderBottomRightRadius: 6,
                borderRight: '1px solid rgb(221, 221, 221)',
            },
            '&:hover, &.active': {
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,

                '& i': {
                    color: theme.palette.primary.main,
                }
            },

            '& i': {
                fontSize: '1.375rem',
                color: '#D0D0D0',
                marginBottom: 4,
                transition: `all 150ms ${theme.transitions.easing.easeInOut}`,
            },
            '& p': {
                fontSize: '.8125rem',
                fontWeight: 500,
            }
        }
    }
}));

export default useStyles;
