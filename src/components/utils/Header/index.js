import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
  Grid
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

import './style.scss';


export default function Header({ userInfos, logout, location }) {

  // useEffect(() => {}, [userInfos]);

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  // handle mobileView
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 768
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userInfos');
    logout();
  };

  // Structure on desktop
  const displayDesktop = () => {
    return (
      <Toolbar className="navbar">
        {agrilienLogo}
        <nav>
          <Button
              color="inherit"
              to="#"
              component={RouterLink}
              className="navbar__button"
          >
            Ma prochaine destination
          </Button>
          <Button
              color="inherit"
              to="/about"
              component={RouterLink}
              className="navbar__button"
          >
            A propos
          </Button>
          <Button
              color="inherit"
              to="#"
              component={RouterLink}
              className="navbar__button"
          >
            Contact
          </Button>
          {userInfos ? (
            <>
            <Button
              color="inherit"
              className="navbar__button"
            >
              Bonjour {userInfos.first_name}, {userInfos.name}
            </Button>
            <Button
              color="secondary"
              className="navbar__button"
              onClick={handleLogout}
            >
              Déconnexion
            </Button>
            </>
          ) : (
            <>
              {/* we pass to the login route the current location */}
              <Button
                color="inherit"
                to={`/login/${location}`}
                component={RouterLink}
                className="navbar__button"
              >
                Connexion
              </Button>
              <Button
                color="inherit"
                to="#"
                component={RouterLink}
                className="navbar__button"
              >
                Inscription
              </Button>
            </>
          )}
        </nav>
      </Toolbar>
    );
  };

  // Structure on mobile
  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar  className="navbar">
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className="drawer-container">
            <Link href="#">
              <MenuItem>Ma prochaine destination</MenuItem>
            </Link>
            <Link href="/about">
              <MenuItem>A propos</MenuItem>
            </Link>
            <Link href="#">
              <MenuItem>Contact</MenuItem>
            </Link>
            <Link href={`/login/${location}`}>
              <MenuItem>Connexion</MenuItem>
            </Link>
            <Link href="#">
              <MenuItem>Inscription</MenuItem>
            </Link>
          </div>
        </Drawer>
        <Grid container>   
          <Grid container item xs={10} alignItems="center" justifycontent="center">      
            {agrilienLogo}
          </Grid>
          <Grid container item xs={2}>
            <IconButton
              {...{
                edge: "start",
                color: "inherit",
                "aria-label": "menu",
                "aria-haspopup": "true",
                onClick: handleDrawerOpen,
              }}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    );
  };

  const agrilienLogo = (
    <Typography variant="h6" component="h2" className="header__logo">
      <Button
        color="inherit"
        to="/"
        component={RouterLink}
        className="navbar__button"
      >
        Agrilien
      </Button>
    </Typography>
  );

  return (
    <header>
      <AppBar className="header">
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
