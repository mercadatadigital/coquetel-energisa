import React from 'react';
import { ThemeProvider } from 'styled-components';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import theme from '../theme';

import * as S from './styles';

import logoCoquetel from '../assets/logo-coquetel.png';

import Cover from '../pages/Cover';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import Page4 from '../pages/Page4';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <S.Container>
          <div className="logo-container">
            <img
              className="logo-coquetel logo"
              src={logoCoquetel}
              alt="logotipo Coquetel"
            />
          </div>
          <Switch>
            <Route path="/" exact component={Cover} />
            <Route path="/1" component={Page1} />
            <Route path="/2" component={Page2} />
            <Route path="/3" component={Page3} />
            <Route path="/4" component={Page4} />
          </Switch>
          <p className="mercadata">Powered by Mercadata Digital, 2020.</p>
        </S.Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
