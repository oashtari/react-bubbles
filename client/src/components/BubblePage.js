import React, { useState, useEffect } from "react";
import axiosWithAuth from '../utils/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);


  useEffect(() => {
    setTimeout(() => {
      axiosWithAuth()
        .get(`/colors`)
        .then(res => {
          setColorList(res.data);
          console.log('color list', colorList)
        })
        .catch(err => {
          console.log('no colors for you', err)
        })
    }, 5000)
  }, [colorList])

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
