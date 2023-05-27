/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDarkTheme, setLightTheme } from "../../reducers/uiReducer";
import Body from "../body/Body";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import styles from "./Home.module.scss";

const Home = () => {
  const theme = useSelector((state) => state.ui.theme);
  console.log(theme);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLightTheme());
  }, []);
  return (
    <div className={styles.home + (theme === "dark" ? ` ${styles.dark}` : "")}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
