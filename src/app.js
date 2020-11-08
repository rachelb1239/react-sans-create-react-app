import React from "react";
import ReactDOM from "react-dom";
import { Container } from './components'

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Container />, wrapper) : false;