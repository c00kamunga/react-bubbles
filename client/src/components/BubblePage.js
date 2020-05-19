import React, { useState, useEffect } from "react";
import { useParams, withRouter } from 'react-router-dom';
import axiosWithAuth from "../axiosWithAuth";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = (props) => {
  const [colorList, setColorList] = useState([]);
  const params = useParams();
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property




  const fetchColors = () => {
    axiosWithAuth()
    .get(`/colors`)
   .then((res) => {
     console.log(res)
     setColorList(res.data)
   })
    .catch((err) => console.log(err))
  }


  
  useEffect(() => {
    console.log(props)
fetchColors()
  }, [])


return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default withRouter(BubblePage);
