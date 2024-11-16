import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  img: {
    width: 'auto',
    height: 30, // Adjust the height as needed
  },
});

const LogoFull = () => {
  const classes = useStyles();

  return (
    <img
      className={classes.img}
      src="/dall__e_2024-06-03_11.02.20_-_style_fish_wearing_a__hacking_on_a_computer_digital_art_720-min.png"
      alt="Backstage Logo"
    />
  );
};

export default LogoFull;