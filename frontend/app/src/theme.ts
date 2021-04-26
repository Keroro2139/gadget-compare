import { createMuiTheme } from '@material-ui/core/styles';

const APP_PRIMARY = '#EF2437';
const BORDER_RADIUS = 6;

const global = {
    '@global': {
        'p': {
            margin: 0,
            padding: 0,
            fontSize: '.875rem',
        },
        'button': {
            outline: 'none',
        },
        'a': {
            color: 'inherit',
        },
        'ul': {
            listStyle: 'none',
        }
    }
};

const theme = createMuiTheme({
    palette: {
        primary: {
            main: APP_PRIMARY,
        },
    },
    overrides: {
        MuiCssBaseline: global,
        MuiPaper: {
            rounded: {
                borderRadius: BORDER_RADIUS,
            }
        },
        MuiTooltip: {
            tooltip: {
                color: '#fff',
                fontSize: '.725rem',
                backgroundColor: '#222',
            },
            arrow: {
                color: '#222'
            }
        },
    },
    props: {
        MuiTextField: {
            variant: 'outlined',
            margin: 'dense',
            autoComplete: 'off',
        },
        MuiButton: {
            variant: 'contained',
            color: 'primary',
            style: {
                textTransform: 'none',
                color: '#FFFFFF'
            }
        },
        MuiCheckbox: {
            color: 'primary'
        },
        MuiSwitch: {
            color: 'primary'
        },
    }
});

export default theme;
