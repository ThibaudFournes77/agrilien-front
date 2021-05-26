import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Paper,
  Typography,
  Button,
} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';

// == Import
import './styles.scss';
import Search from '../../../containers/Search';
// Import data
import farmImg1 from '../../../assets/images/farm-picture1.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    marginTop: theme.gutter.normal,
    maxWidth: 1000,
    '&:hover': {
      backgroundColor: '#f7f7f7',
      cursor: 'pointer',
    },
  },
  image: {
    width: 240,
    height: 180,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  title: {
    textTransform: 'uppercase',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  localisation: {
    fontSize: '1.2rem',
    textTransform: 'none',
  },
  info: {
    fontSize: '1rem',
    textAlign: 'left',
  },
  main_prod: {
    fontSize: '1rem',
    textAlign: 'left',
  },
  certified: {
    fontSize: '1rem',
    marginTop: '1rem',
  },
  bio: {
    fontSize: '1rem',
    color: 'green',
    fontWeight: 'bold',
  },
  labelisation: {
    fontSize: '1rem',
    color: '#c14040',
    fontWeight: 'bold',
  },
  price: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },

}));

function ListFarms({ farms, loadFarms }) {
  //useEffect(() => loadFarms(), []);

  const classes = useStyles();

  for (let farm of farms) {
    if (farm.certified_organic) {
      farm.bio='BIO';
    } else {
      farm.bio='';
    }
    if (farm.certified_label) {
      farm.labelisation='Label qualité';
    } else {
      farm.labelisation='';
    }
  }
  
  return (
    <div className={classes.root}>
      <Search />
      {farms.map((farm) => (
        <Link to={`farm/${farm.id}`} key={farm.id}>
          <Paper className={classes.paper} key={farm.id} style={{ cursor: 'pointer' }}>
            <Grid container spacing={2}>
              <Grid item>
                <Button className={classes.image}>
                  <img className={classes.img} alt="complex" src={farmImg1} />
                </Button>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography className={classes.title} gutterBottom variant="subtitle1">
                      {farm.title}
                    </Typography>
                    <Typography className={classes.localisation} variant="body2" gutterBottom>
                      <LocationOnIcon /> {farm.city} - {farm.department} - {farm.region}
                    </Typography>
                    <Typography className={classes.info} variant="body2" color="textSecondary" gutterBottom>
                      {`Type d'hébergement : ${farm.type}`} - {`Capacité d'hébergement : ${farm.capacity}`}
                    </Typography>
                    <Typography className={classes.main_prod} variant="body2" gutterBottom>
                      {`Production principale : ${farm.main_prod}`}
                    </Typography>
                    <Grid container className={classes.certified} variant="body2" direction="row" justify="space-around">
                      <Grid item className={classes.bio}>
                        {farm.bio}
                      </Grid>
                      <Grid item className={classes.labelisation}>{farm.labelisation}</Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography className={classes.price} variant="subtitle1">{`${farm.price} €`}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Link>
      ))}
    </div>
  );
}

ListFarms.propTypes = {
  farms: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadFarms: PropTypes.func.isRequired,
};

// == Export
export default ListFarms;
