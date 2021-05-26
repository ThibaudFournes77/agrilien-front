/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Paper,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';

// Imports for calendar
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import fr from 'date-fns/locale/fr';
import { Calendar } from 'react-date-range';
import { parseISO } from 'date-fns';

// My imports
import farmImg from '../../../assets/images/farm-picture1.jpg';
import SwitchLabels from './SwitchLabels';
import './styles.scss';

const useStyles = makeStyles((theme) => ({
  main: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.gutter.normal,
    textAlign: 'center',
  },
  media: {
    height: 140,
  },
}));

function Farm({
  farm,
  loadFarm,
  loading,
  error,
  match,
}) {
  const { id } = match.params;
  useEffect(() => loadFarm(id), [id]);

  const classes = useStyles();

  // Categories
  const { categories } = farm;

  let catSecondaries = [];
  let catAutres = [];
  if (categories) {
    catSecondaries = categories.filter((filteredCat) => filteredCat.group === 'Productions secondaires');
    catAutres = categories.filter((filteredCat) => filteredCat.group === 'Autres');
  }
  // Planning
  const { planning } = farm;
  let parsedPlanning = [];
  if (planning) {
    parsedPlanning = planning.map((date) => parseISO(date));
  }

  return (
    <div className={classes.main}>
      {loading ? (
        <div className="loading">
          <CircularProgress color="primary" />
        </div>
      )
        : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={farmImg}
                      title="Image de la ferme"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {farm.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {farm.description_farm}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <h1>Production principale</h1>
                  <span>{farm.main_prod}</span>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <SwitchLabels bio={farm.certified_organic} label={farm.certified_label} />
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <h1>Productions secondaires</h1>
                  <ul>
                    {catSecondaries.map((category) => (
                      <li key={category.cat_id}>
                        {category.label}
                      </li>
                    ))}
                  </ul>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <h1>Informations complémentaires</h1>
                  <ul>
                    {catAutres.map((category) => (
                      <li key={category.cat_id}>
                        {category.label}
                      </li>
                    ))}
                  </ul>
                </Paper>
              </Grid>
              <Grid item xs={4} sm={4}>
                <Paper className={classes.paper}>{farm.type}</Paper>
              </Grid>
              <Grid item xs={4} sm={4}>
                <Paper className={classes.paper}>{farm.capacity} personnes</Paper>
              </Grid>
              <Grid item xs={4} sm={4}>
                <Paper className={classes.paper}>{farm.price} la nuit</Paper>
              </Grid>
              <Grid item xs={8}>
                <Paper className={classes.paper}>Propriétaire : {farm.owner}</Paper>
                <Paper className={classes.paper}>
                  Localisation : {farm.street} {farm.postcode} {farm.city} -
                  {farm.department} - {farm.region}
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>Ici sera la carte googleMap</Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <h1>Activités proposées</h1>
                  <p>{farm.description_activities}</p>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <h1>Disponibilités</h1>
                  <Calendar
                    date={new Date()}
                    locale={fr}
                    disabledDates={parsedPlanning}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Button style={{ width: '100%' }} variant="contained" color="primary" href="#contained-buttons">
                  Effectuer une réservation
                </Button>
              </Grid>
            </Grid>
          </>
        )}
    </div>
  );
}

Farm.propTypes = {
  farm: PropTypes.object.isRequired,
  loadFarm: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired,
};

// we use withRouter in order to give to the Farm component access to the props of react-router-dom
export default withRouter(Farm);
