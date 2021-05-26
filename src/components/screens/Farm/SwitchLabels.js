import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

const styles = (theme) => ({
  bio: {
    '& .MuiIconButton-label': {
      color: theme.palette.primary.main,
    },
  },
  label: {
    '& .MuiIconButton-label': {
      color: theme.palette.secondary.main,
    },
  },
});

function SwitchLabels({ bio, label, classes }) {
  return (
    <FormGroup row>
      <FormControlLabel
        control={(
          <Switch
            checked={bio}
            name="bio"
            color="primary"
            value={bio}
            disabled
            className={classes.bio}
          />
        )}
        label="Bio"
      />
      <FormControlLabel
        control={(
          <Switch
            checked={label}
            name="label"
            color="secondary"
            value={label}
            disabled
            className={classes.label}
          />
        )}
        label="Labellisée"
      />
    </FormGroup>
  );
}

SwitchLabels.propTypes = {
  bio: PropTypes.bool.isRequired,
  label: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SwitchLabels);
