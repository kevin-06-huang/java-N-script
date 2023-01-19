import React, { useEffect, useRef } from "react";

const MapComponent = ({ center, zoom }) => {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, { center, zoom });
  });

  return <div ref={ref} id="map" style={{width:'500px', height:'500px'}}/>;
}

  export default MapComponent;

