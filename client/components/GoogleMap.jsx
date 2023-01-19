import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MapComponent from "./MapComponent";

const render = (status) => {
  switch (status) {
    case Status.SUCCESS:
      return <MapComponent />;
  }
};

const GoogleMap = () => <Wrapper apiKey={"AIzaSyBWAwHpHTXrbVXMywdaC8_tWkdlrhH6TAg"} render={render} />;

export default GoogleMap;