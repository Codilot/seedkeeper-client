import React from 'react';
import { Link } from "react-router-dom";

const style = {
    position: "absolute",
    left: "8px",
    fontWeight: "bold",
    fontSize: 16
  }

const Brand = (props) => (

  <Link style={style} to="/">seedkeeper</Link>

)

export default Brand;