import React from 'react';
import { StylesProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import globalStyle from './commos/styles/global-sytle';
import Main from './containers/Main';

function App() {
  return (
    <div className="App">
      return(
        <StylesProvider injectFirst>
          <CssBaseLine />
          <globalStyle />
        </StylesProvider>
      )
    </div>
  );
}

export default App;
