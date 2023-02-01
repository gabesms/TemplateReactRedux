import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
    loading: {
    position: 'fixed',  
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)"

    }
  });   
const Loading = () => {
    const classes = useStyles();
    return (
        <CircularProgress className={classes.loading} />
    )
};
export default Loading;