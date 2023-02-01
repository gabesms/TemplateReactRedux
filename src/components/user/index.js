import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

/*const useStyles = makeStyles();*/

const UserList = () => {
  const user = JSON.parse(localStorage.getItem("x-usr"));
  const dispatch = useDispatch();
  //const classes = useStyles();
  const state = useSelector((state) => state.reducers);

  return <>Component</>;
};
export default UserList;
