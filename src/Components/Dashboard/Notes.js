import React, { useState } from 'react'
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import SendIcon from '@material-ui/icons/Send';



const useStyle = makeStyles((theme) => ({
  root: {
    "&": {
      margin: theme.spacing(1)
    }
  }
}));

const Notes = () => {
  const classes = useStyle();
  const [notesData, setNotesData] = useState('');

  return (
    <>
      <form autoComplete="off">
        <Grid container direction="row" alignItems="center" justify="center">
        <Grid item xs={12} sm={5} className={classes.root}>
            <TextField fullWidth label="Notes" id="fullWidth" />
          </Grid>
          <Grid item xs={12} sm={5} >
            <Button variant="outlined" startIcon={<DeleteIcon />}>
              Delete
            </Button>
            <Button variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default Notes;
