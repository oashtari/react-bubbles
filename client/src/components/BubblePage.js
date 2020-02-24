import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosWithAuth from '../utils/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  setTimeout(() => {
    axiosWithAuth()
      .get(`/colors`)
      .then(res => {
        // console.log('what colords do we have', res.data);
        setColorList(res.data);
        // console.log('color list', colorList)
        // dispatch({ type: LOAD_FRIENDS, payload: res.data })
      })
      .catch(err => {
        console.log('no colors for you', err)
        // dispatch({ type: ERROR_FRIENDS, payload: 'could not get your friends' })
      })
  }, 100)
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
