/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Paper,
  Grid,
  Chip,
  CircularProgress,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PeopleIcon from '@material-ui/icons/People';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

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
import { DriveEta } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  main: {
    flexGrow: 1,
  },
  container: {
    marginTop: '4rem',
    textAlign: 'left',
    padding: '1rem',
  },
  paper: {
    padding: theme.gutter.normal,
    textAlign: 'left',
    height: '100%',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    color: '#289e24',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    display: 'block',
  },
  localisation: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: '1rem',
  },

  img: {
    margin: 'auto',
    display: 'inline',
    maxHeight: '350px',
    width: '100%',
    borderRadius: '1%',
  },
  activities: {
    height: '377px',
    lineHeight: '1.5rem',
    textAlign: 'justify',
  },
  mainProd: {
    marginBottom: '1rem',
    fontWeight: 'bold',
  },
  owner: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
  },
  ownerAdress: {
    marginBottom: '1rem',
  },
  capacity: {
    fontSize: '1rem',
    marginBottom: '1rem',
    paddingBottom: '1rem',
    borderBottom: '1px solid #F5F5F5',
  },
  type: {
    marginBottom: '1rem',
  },
  category: {
    marginBottom: '0.5rem',
  },
  infos: {
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  planning: {
    padding: theme.gutter.normal,
    textAlign: 'center',
  },
  price: {
    fontSize: '1rem',
    textAlign: 'right',
    fontWeight: 'none',
  },
  description: {
    lineHeight: '1.5rem',
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
            <Grid className={classes.container} container spacing={3}>
              <Grid item xs={12}>
                <div className={classes.header}>
                  <div className={classes.title}>
                    {farm.title}
                  </div>
                  <div>
                    <SwitchLabels bio={farm.certified_organic} label={farm.certified_label} />
                  </div>
                </div>
                <br />
                <span className={classes.localisation}>{farm.city}, {farm.department}, {farm.region} </span>
              </Grid>
              <Grid item xs={6}><img className={classes.img} alt="complex" src={farmImg} /></Grid>
              <Grid item xs={3} className={classes.activities}>
                <Paper className={classes.paper}>
                  <h1>Production principale</h1>
                  <div className={classes.mainProd} variant="body2">
                    <Chip
                      label={farm.main_prod}
                      color="primary"
                    />
                  </div>
                  <h1>Productions secondaires</h1>
                  <ul>
                    {catSecondaries.map((category) => (
                      <li className={classes.category} key={category.cat_id}>
                        {category.label}
                      </li>
                    ))}
                  </ul>
                  <br />
                  <div className={classes.infos}><InfoIcon /> Informations complémentaires</div>

                  <ul>
                    {catAutres.map((category) => (
                      <li className={classes.category} key={category.cat_id}>
                        {category.label}
                      </li>
                    ))}
                  </ul>
                </Paper>
              </Grid>
              <Grid item xs={3} className={classes.activities}>
                <Paper className={classes.paper}>
                  <h1>Activités proposées</h1>
                  <p variant="body2">{farm.description_activities}</p>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <div className={classes.owner}>
                    <div className={classes.ownerName}>
                      Propriétaire : {farm.owner}
                    </div>
                    <div className={classes.price}>
                      <Chip
                        label={`${farm.price}€`}
                        color="#FF385C"
                      /> / nuit
                    </div>
                  </div>
                  <div className={classes.ownerAdress}>
                    <LocationOnIcon /> {farm.street} {farm.postcode} {farm.city} -
                    {farm.department} - {farm.region}
                  </div>
                  <div className={classes.type}> <HomeIcon /> Type d'hébergement : {farm.type}</div>
                  <div className={classes.capacity}> <PeopleIcon /> Capacité d'accueil : {farm.capacity} vacanciers</div>
                  <p className={classes.description}>{farm.description_farm}</p>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  Google Map
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.planning}>
                  <CalendarTodayIcon /><h1>Disponibilités</h1>
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
