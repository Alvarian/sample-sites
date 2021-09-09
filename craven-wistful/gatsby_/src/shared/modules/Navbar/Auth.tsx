import React from "react"

import {
  Switch,
  FormControlLabel,
  FormGroup
} from '@material-ui/core'

export const Auth = (props: any) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setAuth(event.target.checked);
  };

  return (
    // Replace this with actual authentication through the router

    <FormGroup>
      <FormControlLabel
        control={<Switch checked={props.auth} onChange={handleChange} aria-label="login switch" />}
        label={props.auth ? 'Logout' : 'Login'}
      />
    </FormGroup>
  )
}