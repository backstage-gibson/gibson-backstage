import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  img: {
    width: 'auto',
    height: 28, // Adjust the height as needed
  },
});

const LogoIcon = () => {
  const classes = useStyles();

  return (
    <img
      className={classes.img}
      src="/dall__e_2024-06-03_11.02.20_-_style_fish_wearing_a__hacking_on_a_computer_digital_art_720-min.png"
      alt="Backstage Icon"
    />
  );
};

export default LogoIcon;