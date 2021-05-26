/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import 'date-fns';
import {
  FormGroup,
  FormLabel,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Select,
  MenuItem,
  Input,
  InputLabel,
  Switch,
  IconButton,
  Grid,
  Paper,
  Button,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CircularProgress,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import SearchIcon from '@material-ui/icons/Search';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import fr from 'date-fns/locale/fr';

import landscapeHome from 'src/assets/images/landscape-homepage.jpg';
import breeding from 'src/assets/images/breeding.jpg';
import marketGardening from 'src/assets/images/market-gardening.jpg';
import field from 'src/assets/images/corn-field.jpg';
import bioImg from 'src/assets/images/bio.jpg';
import label from 'src/assets/images/label.jpg';

import './style.scss';

function HomeScreen({
  mainProductions,
  loadMainProductions,
  mainProductionsLoading,
  mainProductionsError,
}) {
  useEffect(() => loadMainProductions(), []);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [bio, setBio] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleBioChange = () => {
    setBio(!bio);
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
                    <Select id="precision" aria-describedby="precision-description" className="searchForm__precision">
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
                    <Input id="localisation" />
                  </FormControl>
                </Grid>
                <Grid item xs={6} lg={2}>
                  <FormControl>
                    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={fr}>
                      <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Début"
                        okLabel="OK"
                        cancelLabel="ANNULER"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
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
                        label="Fin"
                        okLabel="OK"
                        cancelLabel="ANNULER"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
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
                    <Select id="production" aria-describedby="production-description" className="searchForm__production">
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
                  <IconButton aria-label="search" color="secondary" className="searchForm__submit">
                    <SearchIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </form>
            <Grid container className="about">
              <Grid container item md={6}>
                <img src={landscapeHome} alt="" className="about__image" />
              </Grid>
              <Grid container item md={6}>
                <Paper elevation={3} className="about__description">
                  <p>
                    Agrilien est un projet qui vise à vous faire découvrir l'agriculture au plus
                    près de ceux qui la font vivre !
                  </p>
                  <Button variant="contained" color="secondary" href="/about">
                    En savoir plus
                  </Button>
                </Paper>
              </Grid>
            </Grid>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <Typography variant="h3" component="h2">
                  Découvrir des fermes
                </Typography>
              </Grid>
              <Grid item md={3} sm={4} xs={12}>
                <Card className="farm-category">
                  <CardActionArea>
                    <CardMedia className="farm-category__image" image={field} />
                    <CardContent>
                      <Typography variant="h5" component="h3">
                        Grandes cultures
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item md={3} sm={4} xs={12}>
                <Card className="farm-category">
                  <CardActionArea>
                    <CardMedia className="farm-category__image" image={marketGardening} />
                    <CardContent>
                      <Typography variant="h5" component="h3">
                        Maraîchage
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item md={3} sm={4} xs={12}>
                <Card className="farm-category">
                  <CardActionArea>
                    <CardMedia className="farm-category__image" image={breeding} />
                    <CardContent>
                      <Typography variant="h5" component="h3">
                        Elevage
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h3" component="h2">
                  Découvrir des fermes
                </Typography>
              </Grid>
              <Grid item md={3} sm={4} xs={12}>
                <Card className="farm-category">
                  <CardActionArea>
                    <CardMedia className="farm-category__image" image={bioImg} />
                    <CardContent>
                      <Typography variant="h5" component="h3">
                        Bio
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item md={3} sm={4} xs={12}>
                <Card className="farm-category">
                  <CardActionArea>
                    <CardMedia className="farm-category__image" image={label} />
                    <CardContent>
                      <Typography variant="h5" component="h3">
                        Labellisée
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </>
        )}
    </main>
  );
}

HomeScreen.propTypes = {
  mainProductions: PropTypes.arrayOf(PropTypes.string).isRequired,
  loadMainProductions: PropTypes.func.isRequired,
  mainProductionsLoading: PropTypes.bool.isRequired,
  mainProductionsError: PropTypes.string.isRequired,
};

export default HomeScreen;
