import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        background: theme.palette.background.default,
        borderBottom: `1px solid rgb(221, 221, 221)`,
    },
    logo: {
        fontSize: '1.125rem',
        fontWeight: 500,
        cursor: 'pointer',
        userSelect: 'none',
        textDecoration: 'none',
    }
}));

export default useStyles;
