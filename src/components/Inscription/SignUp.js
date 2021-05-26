import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// Import du Select
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
//

import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import FormControl from '@material-ui/core/FormControl';


 function Copyright() {
   return (
     <Typography variant="body2" color="textSecondary" align="center">
       {'Copyright © '}
       <Link color="inherit" href="_self">
         Agrilien
       </Link>{' '}
       {new Date().getFullYear()}
       {'.'}
     </Typography>
   );
 }

 
 const useStyles = makeStyles((theme) => ({
   formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
   paper: {
     marginTop: theme.spacing(8),
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  
  const [value, setValue] = useState('');
  const [formValue, setFormValue] = useState('');
  console.log('formValue:', formValue)
  console.log('value:', value)

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValue(value);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Mon inscription
        </Typography>
        
        <form className={classes.form} noValidate onSubmit={(e) => handleSubmit(e)}>
          {/* <Grid container spacing={2}>
            <Grid item xs={12}> */}
              
            {/* </Grid>
            <Grid item xs={12}>               */}
             
            {/* </Grid> */}
          <Grid container spacing={2}>
            <Grid item xs={6}>
               <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Civilité</InputLabel>
                  <Select
              // labelId="demo-simple-select-label"
              // id="demo-simple-select"
              // value=""
              // onChange=""
                  >
                    <MenuItem value={"Madame"}>Madame</MenuItem>
                    <MenuItem value={"Monsieur"}>Monsieur</MenuItem>
                  </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Je suis un :</InputLabel>
                    <Select
                // labelId="demo-simple-select-label"
                // id="demo-simple-select"
                // value=""
                // onChange=""
                    >
                      <MenuItem value={"Agriculteur"}>Agriculteur</MenuItem>
                      <MenuItem value={"Vacancier"}>Vacancier</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="first_name"
                label="Prénom"
                name="first_name"
                autoComplete="fname"  
                autoFocus
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="last_name"
                label="Nom"
                name="last_name"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="date_of_birth"
                label="Date de Naissance (JJ/MM/AAAA)"
                name="date_of_birth"
                autoComplete="birthdate"
              />
            </Grid>
           <br></br>
            Vous devez avoir au moins 18 ans pour vous inscrire.
            <br></br>
            <br></br>  
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Adresse email"
                name="email"
                autoComplete="Adresse email"
              />
            </Grid>

            <br></br>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="Mot de passe"
              />
            </Grid>            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Confirmez le mot de passe"
                type="password"
                id="password"
                autoComplete="Confirmez le Mot de passe"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="acceptGeneralConditions" color="primary" />}
                label="J'accepte les conditions générales"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Valider l'inscription
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Déjà un compte parmi nous ? Par ici
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
