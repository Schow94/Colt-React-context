import React, { Component } from 'react';
import AppBar from '@material-ui/core/Appbar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';

import { withStyles } from '@material-ui/core/styles';

import styles from './styles/NavBarStyles';

import { ThemeContext } from './contexts/ThemeContext';
import { withLanguageContext } from './contexts/LanguageContext';

const content = {
  english: {
    search: 'Search',
    flag: 'british flag'
  },
  french: {
    search: 'Chercher',
    flag: 'french flag'
  },
  spanish: {
    search: 'Buscar',
    flag: 'spanish flag'
  }
};

class Navbar extends Component {
  static contextType = ThemeContext;

  render() {
    // console.log(this.context);
    const { classes } = this.props;
    const { isDarkMode, toggleTheme } = this.context;
    const { language } = this.props.languageContext;
    const { search, flag } = content[language];

    return (
      <div className={classes.root}>
        <AppBar position="static" color={isDarkMode ? 'default' : 'primary'}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit">
              <span>{flag}</span>
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit">
              App Title {language}
            </Typography>
            <Switch onChange={toggleTheme}></Switch>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder={`${search}...`}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              ></InputBase>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withLanguageContext(withStyles(styles)(Navbar));
