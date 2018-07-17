// import Button from '@material-ui/core/Button';
import * as React from 'react';
import * as ReactDom from 'react-dom';

import Cards from './components/cards/cards.component';
import MenuAppBar from './components/navbar/navbar.component';

ReactDom.render(
  <React.Fragment>
    <MenuAppBar />
    <Cards />
  </React.Fragment>,
  document.querySelector('#app'),
);
