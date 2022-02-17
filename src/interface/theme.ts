export interface TypographProps<T> {
    color?: string
    font?: string,
    bold?: string,
    center?: string,
    margin?: string,
    text?: string,
    theme?: T
}


export interface ThemeProps {
    colors: {
        green: string
        dark: string
        lightPurple_1: string,
        lightPurple_2: string,
        lightPurple_3: string,
        darkBlue_1: string,
        darkBlue_2: string,
        darkBlue_3: string,
        darkBlue_4: string,
        darkBlue_5: string,
        darkBlue_6: string,
        lightGray: string,
        grayText: string,
        grayText1: string,
        grayText2: string,
        white: string,
        whiteLight: string,
        whiteLight1: string,
        whiteLight2: string,
        textBlack: string,
        textGreenLight: string,
        lightRed: string,
        mainRed: string,
        mainOrange: string,
        lightPink: string,
        lightBlue: string
    }
    font: {
        size: {
            medium: string
        }
    },
}