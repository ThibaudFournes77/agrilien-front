import React, { useEffect } from "react";
import { CircularProgress } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import "./styles.css";
import CustomInput from "./CustomInput";
import Button from "./Button";

function LoginForm({ email, password, onInputValueChange, onFormSubmit, userInfos, onRedirect, loading, error }) {

  //const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

 /*const { previousLocation } = useParams();

  console.log(previousLocation);*/
  console.log(error);

  useEffect(() => {
    if(userInfos){
      onRedirect();
    }
  }, [userInfos])

  const handleChange = (e) => {
    //dispatch de l'action INPUT_VALUE_CHANGE
    //console.log('name', e.target.name);
    //console.log('value', e.target.value);
    onInputValueChange(e.target.name, e.target.value);
  };
  
  const submitForm = (e) => {
    /*if (email === "" || password === "") {
      setError("Fields are required");
      return;
    }*/
    // dispatch de l'action LOGIN
    e.preventDefault();
    onFormSubmit();
  };

    return (
      <div className="Loginform main">
        {loading && (
          <div className="loading">
            <CircularProgress />
          </div>
        )}
        
        <>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {error && (
            <Alert severity="error">{error}</Alert>
          )}
          <h1 className="Loginform__title">Connectez-vous</h1>  
          <form className="form"  onSubmit={submitForm}>
            <CustomInput
              labelText="Adresse Email"
              id="email"
              name="email"
              formControlProps={{
                fullWidth: true
              }}
              handleChange={handleChange}
              type="text"
              value={email}
            />
            <CustomInput
              labelText="Mot de passe"
              id="password"
              name="password"
              formControlProps={{
                fullWidth: true
              }}
              handleChange={handleChange}
              type="password"
              value={password}
            />

            <Button type="submit" color="primary" className="form__custom-button">
              Se connecter
            </Button>
          </form>
        </>
    </div>
  );
}

export default LoginForm;
