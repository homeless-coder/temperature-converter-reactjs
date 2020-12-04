import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    height: "90vh",
  },
  form: {
    backgroundColor: "#232626",
    height: "30vh",
    borderRadius: "20px",
    border: "1px solid #393a3b",
    paddingLeft: "13px",
    paddingRight: "13px",
  },
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#f1f2f2",
    width: "35%",
    borderRadius: 6,
  },
  label: {
    color: "#B8B8B8",
    fontSize: "1.2em",
  },
}));

const Converter = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={5}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            className={classes.form}
          >
            <TextField
              id="outlined-basic"
              className={classes.input}
              variant="outlined"
            />
            <Typography className={classes.label}>Celsius =</Typography>
            <TextField
              id="outlined-basic"
              className={classes.input}
              variant="outlined"
            />
            <Typography className={classes.label}>Farenheit</Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Converter;
