import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MapComponent from "./MapComponent";

const GoogleMap = ({center, zoom}) =>{
  const render = (status) => {
    switch (status) {
      case Status.SUCCESS:
        return <MapComponent center={center} zoom={zoom}/>;
    }
  };
  
 return (<Wrapper apiKey={"AIzaSyBWAwHpHTXrbVXMywdaC8_tWkdlrhH6TAg"} render={render}/>);
 
}

export default GoogleMap;