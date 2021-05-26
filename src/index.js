import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from "src/components/App";
import { Provider } from 'react-redux';
import store from 'src/store';
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import theme from 'src/styles/theme';

const rootElement = document.getElementById("root");

const rootReactElement = (
     
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <App />
        </StylesProvider>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(rootReactElement, rootElement);
