import {
  FormControl,
  MenuItem,
  FormControlLabel, FormGroup,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  Select, Switch,
  Typography,
  TextareaAutosize,
  Button,
  Checkbox,
  ListItemText,
  CircularProgress,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { DateRange } from 'react-date-range';
import fr from 'date-fns/locale/fr';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './style.scss';

function FarmCreationScreen({
  name,
  bio,
  label,
  address,
  postalCode,
  city,
  image,
  accomodation,
  number,
  price,
  description,
  activities,
  mainProduction,
  secondaryProductions,
  otherInfos,
  onInputChange,
  onSwitchChange,
  onImageUpload,
  onFarmCreationSubmit,
  loadMainProductions,
  loadSecondaryProductions,
  mainProductionsList,
  secondaryProductionsList,
  otherInfosList,
  loadOtherInfos,
  mainProductionLoading,
  secondaryProductionsLoading,
  otherInfosLoading,
  mainProductionError,
  secondaryProductionsError,
  otherInfosError,
}) {
  const [startDate, setStartDate] = useState(q);
  const [endDate, setEndDate] = useState(new Date());
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadError, setUploadError] = useState('');

  useEffect(() => loadMainProductions(), []);
  useEffect(() => loadSecondaryProductions(), []);
  useEffect(() => loadOtherInfos(), []);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  // Definition of a global loading
  let loading;
  if (mainProductionLoading || secondaryProductionsLoading || otherInfosLoading) {
    loading = true;
  }
  else {
    loading = false;
  }

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const handleValueInputChange = (e) => {
    if (e.target.type === 'number') {
      onInputChange(e.target.name, parseInt(e.target.value, 10));
    }
    else {
      onInputChange(e.target.name, e.target.value);
    }
  };

  const handleValueSwitchChange = (e) => {
    onSwitchChange(e.target.name);
  };

  // handle upload of image
  const handleFileChange = (e) => {
    // onImageUpload(e.target.files[0]);
    console.log('type', typeof e.target.files[0]);
    console.log(e.target.files[0]);
    /*
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    console.log('bodyFormData', bodyFormData);
    onInputChange(e.target.name, bodyFormData);
    */
    onInputChange(e.target.name, e.target.files[0]);
    /*
    // handle good format
    if (e.target.files[0] && e.target.files[0].type.includes('image')) {
      setUploadedImage(e.target.files[0]);
      setUploadError('');
    }
    // handle bad format
    else {
      setUploadedImage(null);
      setUploadError('Veuillez fournir une image');
    }
    */
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFarmCreationSubmit();
  };

  return (
    <Grid component="main" className="main" container item xs={11}>
      {loading ? (
        <div className="loading">
          <CircularProgress />
        </div>
      ) : (
        <Grid container item xs={12}>
          {mainProductionError && (
            <Grid container item xs={12}>
              <Alert severity="error">{mainProductionError}</Alert>
            </Grid>
          )}
          {secondaryProductionsError && (
            <Grid container item xs={12}>
              <Alert severity="error">{secondaryProductionsError}</Alert>
            </Grid>
          )}
          {otherInfosError && (
            <Grid container item xs={12}>
              <Alert severity="error">{otherInfosError}</Alert>
            </Grid>
          )}
          <Grid component="form" container item xs={12} spacing={5} onSubmit={handleSubmit}>
            <Grid item xs={10}>
              <FormControl>
                <InputLabel htmlFor="farm-name">Nom de votre ferme</InputLabel>
                <Input type="text" id="farm-name" name="name" value={name} onChange={handleValueInputChange} className="farm-creation__name-input" />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl>
                <InputLabel htmlFor="production">Production</InputLabel>
                <Select id="production" name="mainProduction" value={mainProduction} onChange={handleValueInputChange} className="searchForm__production">
                  {mainProductionsList.map((production) => (
                    <MenuItem
                      key={production}
                      value={production}
                    >
                      {production}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={3}>
              <FormControl component="fieldset">
                <FormGroup>
                  <FormControlLabel
                    control={(
                      <Switch
                        checked={bio}
                        onChange={handleValueSwitchChange}
                        name="bio"
                        color="primary"
                        value={bio}
                      />
                    )}
                    label="Bio"
                    labelPlacement="top"
                    className="bio-switch"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={3}>
              <FormControl component="fieldset">
                <FormGroup>
                  <FormControlLabel
                    control={(
                      <Switch
                        checked={label}
                        onChange={handleValueSwitchChange}
                        name="label"
                        value={label}
                        color="secondary"
                      />
                    )}
                    label="Labélisée"
                    labelPlacement="top"
                    className="label-switch"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <InputLabel htmlFor="secondary-production">Ajouter une production secondaire</InputLabel>
                <Select
                  multiple
                  name="secondaryProductions"
                  value={secondaryProductions}
                  onChange={handleValueInputChange}
                  input={<Input />}
                  defaultValue=""
                  renderValue={(selected) => selected.join(', ')}
                >
                  {secondaryProductionsList.map((production) => (
                    <MenuItem key={production} value={production}>
                      <Checkbox checked={secondaryProductions.indexOf(production) > -1} />
                      <ListItemText primary={production} />
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText id="production-description">Autre production que la principale</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <InputLabel htmlFor="other-infos">Informations complémentaires</InputLabel>
                <Select id="other-infos" className="farmCreation__other-infos" multiple name="otherInfos" value={otherInfos} onChange={handleValueInputChange} input={<Input />} defaultValue="" renderValue={(selected) => selected.join(', ')}>
                  {otherInfosList.map((otherInfo) => (
                    <MenuItem key={otherInfo} value={otherInfo}>
                      <Checkbox checked={otherInfos.indexOf(otherInfo) > -1} />
                      <ListItemText primary={otherInfo} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" component="span">
                Localisation :
              </Typography>
            </Grid>
            <Grid item xs={12} md={7}>
              <FormControl>
                <InputLabel htmlFor="farm-address">Addresse complète</InputLabel>
                <Input type="text" id="farm-address" name="address" value={address} onChange={handleValueInputChange} className="farm-creation__address-input" />
              </FormControl>
            </Grid>
            <Grid item xs={5} md={2}>
              <FormControl>
                <InputLabel htmlFor="farm-postal-code">Code postal</InputLabel>
                <Input type="text" id="farm-postal-code" name="postalCode" value={postalCode} onChange={handleValueInputChange} className="farm-creation__postal-code-input" />
              </FormControl>
            </Grid>
            <Grid item xs={7} md={3}>
              <FormControl>
                <InputLabel htmlFor="farm-city">Ville</InputLabel>
                <Input type="text" id="farm-city" name="city" value={city} onChange={handleValueInputChange} className="farm-creation__city-input" />
              </FormControl>
            </Grid>
            <Grid container item xs={11} spacing={6}>
              <Grid item xs={12} sm={6} md={4} className="farm-creation__picture-input-title">
                <Typography variant="h6" component="span">
                  Téléchargez une photo
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={5}>
                <FormControl>
                  <Button variant="contained" component="label" color="primary">
                    Insérez votre image
                    <input type="file" hidden name="image" onChange={handleFileChange} />
                  </Button>
                  {uploadError && (
                    <p>{uploadError}</p>
                  )}
                </FormControl>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormControl>
                <InputLabel htmlFor="accomodation-type">Type d'hébergement</InputLabel>
                <Select id="accomodation-type" className="farm-creation__accomodation-type" defaultValue="" name="accomodation" value={accomodation} onChange={handleValueInputChange}>
                  <MenuItem value="bedroom">Chambre</MenuItem>
                  <MenuItem value="lodging">Gite</MenuItem>
                  <MenuItem value="camping">Camping</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormControl>
                <InputLabel htmlFor="number-people">Capacité d'accueil</InputLabel>
                <Input type="number" id="number-people" name="number" value={number} onChange={handleValueInputChange} inputProps={{ min: 0 }} aria-describedby="precision-number-people" />
                <FormHelperText id="precision-number-people">personnes</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl>
                <InputLabel htmlFor="price">Prix par nuit</InputLabel>
                <Input type="number" id="price" name="price" value={price} onChange={handleValueInputChange} inputProps={{ min: 0 }} aria-describedby="price-unit" />
                <FormHelperText id="price-unit">euros</FormHelperText>
              </FormControl>
            </Grid>
            <Grid container item xs={12} md={6}>
              <Grid item xs={12}>
                <Typography variant="h6" component="span">
                  Décrivez votre ferme :
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextareaAutosize name="description" value={description} onChange={handleValueInputChange} aria-label="farm-creation__description" rowsMin={10} placeholder="Descriptif de la ferme..." className="farm-creation__textarea" />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" component="span">
                  Décrivez les activités proposées :
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextareaAutosize name="activities" value={activities} onChange={handleValueInputChange} aria-label="farm-creation__activities" rowsMin={10} placeholder="Activités proposées par la ferme..." className="farm-creation__textarea" />
              </Grid>
            </Grid>
            <Grid container item xs={12} md={6}>
              <Grid item xs={12}>
                <Typography variant="h6" component="span">
                  Disponibilités :
                </Typography>
              </Grid>
              <DateRange
                locale={fr}
                color="primary"
                minDate={new Date()}
                ranges={[selectionRange]}
                onChange={handleSelect}
              />
            </Grid>
            <Grid item xs={12} md={5} className="farm-creation__end-buttons">
              <Button color="secondary">Annuler</Button>
              <Button type="submit" color="primary">Valider</Button>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

FarmCreationScreen.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.bool.isRequired,
  label: PropTypes.bool.isRequired,
  address: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  accomodation: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  activities: PropTypes.string.isRequired,
  mainProduction: PropTypes.string.isRequired,
  secondaryProductions: PropTypes.arrayOf(PropTypes.string).isRequired,
  otherInfos: PropTypes.arrayOf(PropTypes.string).isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSwitchChange: PropTypes.func.isRequired,
  onImageUpload: PropTypes.func.isRequired,
  onFarmCreationSubmit: PropTypes.func.isRequired,
  loadMainProductions: PropTypes.func.isRequired,
  loadSecondaryProductions: PropTypes.func.isRequired,
  mainProductionsList: PropTypes.arrayOf(PropTypes.string).isRequired,
  secondaryProductionsList: PropTypes.arrayOf(PropTypes.string).isRequired,
  otherInfosList: PropTypes.arrayOf(PropTypes.string).isRequired,
  loadOtherInfos: PropTypes.func.isRequired,
  mainProductionLoading: PropTypes.bool.isRequired,
  secondaryProductionsLoading: PropTypes.bool.isRequired,
  otherInfosLoading: PropTypes.bool.isRequired,
  mainProductionError: PropTypes.string.isRequired,
  secondaryProductionsError: PropTypes.string.isRequired,
  otherInfosError: PropTypes.string.isRequired,
};

export default FarmCreationScreen;
