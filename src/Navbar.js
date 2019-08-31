import React, { useContext } from 'react';
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
import { LanguageContext } from './contexts/LanguageContext';

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

function Navbar(props) {
  // console.log(this.context);
  const { classes } = props;
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

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

export default withStyles(styles)(Navbar);
