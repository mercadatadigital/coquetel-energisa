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
import Page5 from '../pages/Page5';
import Page6 from '../pages/Page6';
import Page7 from '../pages/Page7';
import Page8 from '../pages/Page8';
import Page9 from '../pages/Page9';
import Final from '../pages/Final';

import CacaPalavras1 from '../pages/CacaPalavra1';
import CacaPalavras2 from '../pages/CacaPalavra2';
import Dominox1 from '../pages/Dominox1';
import Embaralhadas1 from '../pages/Embaralhadas1';

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
            <Route path="/5" component={Page5} />
            <Route path="/6" component={Page6} />
            <Route path="/7" component={Page7} />
            <Route path="/8" component={Page8} />
            <Route path="/9" component={Page9} />
            <Route path="/final" component={Final} />
            <Route path="/caca-palavras1" component={CacaPalavras1} />
            <Route path="/caca-palavras2" component={CacaPalavras2} />
            <Route path="/dominox1" component={Dominox1} />
            <Route path="/embaralhadas1" component={Embaralhadas1} />
          </Switch>
          <p className="mercadata">Powered by Mercadata Digital, 2020.</p>
        </S.Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
