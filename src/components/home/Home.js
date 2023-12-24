/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDarkTheme } from "../../reducers/uiReducer";
import Body from "../body/Body";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import styles from "./Home.module.scss";
import TopNavigator from "../topNavigator/TopNavigator";

const Home = () => {
  const theme = useSelector((state) => state.ui.theme);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setDarkTheme());
  }, []);
  return (
    <div className={styles.home + (theme === "dark" ? ` ${styles.dark}` : "")}>
      <Header />
      <Body />
      <Footer />
      <TopNavigator />
    </div>
  );
};

export default Home;
