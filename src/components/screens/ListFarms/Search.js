/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import 'date-fns';
import { FormGroup, FormLabel, FormControl, FormControlLabel, FormHelperText, Select, MenuItem, Input, InputLabel, Switch, IconButton, Grid, Paper, Button, Typography, Card, CardActionArea, CardMedia, CardContent, CircularProgress } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';
import DateFnsUtils from '@date-io/date-fns';
import fr from 'date-fns/locale/fr';

// import './style.scss';

// const useStyles = makeStyles({
//   switchBase: {
//     color: "#289e24",
//     "&$checked": {
//       color: "#289e24"
//     },
//     "&$checked + $track": {
//       backgroundColor: "#289e24"
//     },
//   },
//   checked: {},
//   track: {},
//   datePicker: {
//     color: "#289e24"
//   }
// });

function Search({
  mainProductions,
  loadMainProductions,
  mainProductionsLoading,
  mainProductionsError,
  mainProduction,
  precision,
  bio,
  bioChange,
  onInputChange,
  dateArrival,
  dateDeparture,
  dateArrivalChange,
  dateDepartureChange,
  search,
}) {
  useEffect(() => loadMainProductions(), []);
  // const classes = useStyles();

  const handleDateArrivalChange = (e) => {
    dateArrivalChange(e);
  };

  const handleDateDepartureChange = (e) => {
    dateDepartureChange(e);
    console.log('dateDeparture', e);
  };

  const handlePrecisionChange = (e) => {
    onInputChange(e.target.name, e.target.value);
  };

  const handleValueInputChange = (e) => {
    onInputChange(e.target.name, e.target.value);
  };

  const handleBioChange = (e) => {
    bioChange(e.target.name);
  };
  const handleSearchClick = () => {
    search();
  };

  return (
    <main className="main">
      {mainProductionsLoading ? (
        <div className="loading">
          <CircularProgress />
        </div>
      )
        : mainProductionsError ? (
          <Alert severity="error">{mainProductionsError}</Alert>
        ) : (
          <>
            <form className="searchForm">
              <Grid container spacing={5}>
                <Grid item xs={6} lg={2}>
                  <FormControl>
                    <InputLabel htmlFor="precision">Précision</InputLabel>
                    <Select id="precision" aria-describedby="precision-description" className="searchForm__precision" name="precision" value={precision} onChange={handlePrecisionChange}>
                      <MenuItem value="city">Ville</MenuItem>
                      <MenuItem value="department">Département</MenuItem>
                      <MenuItem value="region">Région</MenuItem>
                    </Select>
                    <FormHelperText id="precision-description">Précision de la recherche</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={6} lg={2}>
                  <FormControl>
                    <InputLabel htmlFor="localisation">Localisation</InputLabel>
                    <Input id="localisation" name={precision} onChange={handleValueInputChange} />
                  </FormControl>
                </Grid>
                <Grid item xs={6} lg={2}>
                  <FormControl>
                    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={fr}>
                      <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date d'arrivée"
                        okLabel="OK"
                        cancelLabel="ANNULER"
                        format="dd/MM/yyyy"
                        name="dateArrival"
                        value={dateArrival}
                        onChange={handleDateArrivalChange}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                      />
                    </MuiPickersUtilsProvider>
                  </FormControl>
                </Grid>
                <Grid item xs={6} lg={2}>
                  <FormControl>
                    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={fr}>
                      <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date de départ"
                        okLabel="OK"
                        cancelLabel="ANNULER"
                        format="dd/MM/yyyy"
                        value={dateDeparture}
                        onChange={handleDateDepartureChange}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                      />
                    </MuiPickersUtilsProvider>
                  </FormControl>
                </Grid>
                <Grid item xs={6} lg={2}>
                  <FormControl>
                    <InputLabel htmlFor="production">Production</InputLabel>
                    <Select id="production" aria-describedby="production-description" name="mainProduction" value={mainProduction} onChange={handleValueInputChange} className="searchForm__production">
                      {mainProductions.map((production) => (
                        <MenuItem key={production} value={production}>
                          {production}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText id="production-description">Production de la ferme</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={3} lg={1}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Bio</FormLabel>
                    <FormGroup>
                      <FormControlLabel
                        control={(
                          <Switch
                            checked={bio}
                            onChange={handleBioChange}
                            name="bio"
                            color="primary"
                          />
                        )}
                      />
                    </FormGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={3} lg={1}>
                  <Button aria-label="search" color="secondary" className="searchForm__submit" onClick={handleSearchClick}>
                    <SearchIcon />
                  </Button>
                </Grid>
              </Grid>
            </form>
          </>
        )}
    </main>
  );
}

Search.propTypes = {
  mainProductions: PropTypes.arrayOf(PropTypes.string).isRequired,
  loadMainProductions: PropTypes.func.isRequired,
  mainProductionsLoading: PropTypes.bool.isRequired,
  mainProductionsError: PropTypes.string.isRequired,
  bio: PropTypes.bool.isRequired,
  dateArrival: PropTypes.instanceOf(Date),
  dateDeparture: PropTypes.instanceOf(Date),
  dateArrivalChange: PropTypes.func.isRequired,
  dateDepartureChange: PropTypes.func.isRequired,
  precision: PropTypes.string.isRequired,
  mainProduction: PropTypes.string.isRequired,
  bioChange: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
};

export default Search;
