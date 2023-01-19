import React, { useEffect, useRef } from "react";

const MapComponent = ({ center, zoom }) => {
  const ref = useRef();

  useEffect(() => {
    const map = new window.google.maps.Map(ref.current, {
      center: center || {lat: -34.397, lng: 150.644},
      zoom: zoom || 8
    });
  });
    return <div ref={ref} id="map" style={{width:'500px', height:'500px'}}/>;
  }

  export default MapComponent;

