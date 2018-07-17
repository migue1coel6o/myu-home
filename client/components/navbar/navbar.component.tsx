import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import * as React from 'react';

class MenuAppBar extends React.Component {
  render() {
    return (
      <div>
        <AppBar position='static'>
          <Toolbar>
            <IconButton color='inherit' aria-label='Menu'>
              <MenuIcon />
            </IconButton>
            <Typography variant='title' color='inherit'>
              Title
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default MenuAppBar;
