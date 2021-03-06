import React, { useEffect } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core";
import { useMoralis } from "react-moralis";

import { getArtTokenContract } from "../actions/artTokenAction";
import UploadArt from "../components/UploadArt";
import IpfsForm from "../components/IpfsForm";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  uploadContainer: {
    padding: "0rem 1rem",
  },
  circular: {
    height: "61rem",
    textAlign: "center",
    paddingTop: "50%",
  },
});

const UploadPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArtTokenContract());
  }, []);

  const classes = useStyles();
  return (
    <div>
      <Grid className={classes.root}>
        <Grid container>
          <Grid item xs={6} className={classes.uploadContainer}>
            <UploadArt />
          </Grid>
          <Grid item xs={6}>
            <IpfsForm />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default UploadPage;
