import {
    BrowserRouter as Router,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import GlobalStyle from "../styles/global";
import { store } from '../store'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";

type Props = {
    children:React.ReactNode;
}

export const AppProvider:React.FunctionComponent<Props> = ({ children }) => {

    return (
        <Router>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                        {children}
                        <ToastContainer />
                </ThemeProvider >
            </Provider>
        </Router>
    )
}