const MODE_BACKGROUND = {
    LIGHT: 'light',
    SECONDARY: 'secondary',
    DARK: 'dark',
    INFO: 'info',
}
const MODE_TEXT_COLOR = {
    LIGHT: 'dark',
    SECONDARY: 'secondary',
    DARK: 'light'
}

const MODE = {
    LIGHT: {
        type: 'light',
        backgroundColor: MODE_BACKGROUND.LIGHT,
        backgroundLightColor: MODE_BACKGROUND.INFO,
        textColor: MODE_TEXT_COLOR.LIGHT
    },
    DARK: {
        type: 'dark',
        backgroundColor: MODE_BACKGROUND.DARK,
        backgroundLightColor: MODE_BACKGROUND.SECONDARY,
        textColor: MODE_TEXT_COLOR.DARK
    },
}

export {
    MODE
}