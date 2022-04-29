import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import mapboxgl from 'mapbox-gl'
import Marker from './Marker'


// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;



if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function() {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    };
  }
 
mapboxgl.accessToken = 'pk.eyJ1IjoibTEyLXRyZW50IiwiYSI6ImNrNDNuejljbjA0NzMzZW15eGk4OWMwdTEifQ.8rs6af8i7F8oeHDpbD_zQw';


const Map = () => {

    const mapContainerRef = useRef(null);
    const [map, setMap] = useState(null)



    var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
    useEffect(() => {
        const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/m12-trent/ckpvery4d0q3s17plc560njx7',
        center: [
            -102.6788136397852,
            39.65751662433187 
          ],
        zoom: 6,
        minZoom: 1,
        maxZoom: 24,
        maxPitch: 0,
        addControl: 'top-left'
    });

    map.scrollZoom.disable();

    var nav = new mapboxgl.NavigationControl();
      map.addControl(nav, 'top-right');
    setMap(map)

        // clean up on unmount
        return () => map.remove();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <Container>
            <div className='map-container' ref={mapContainerRef}/>
            <Marker map={map}/>
        </Container>
        )
        
}


export default Map


const Container = styled.div`
  position: relative;
  display: block;
  width: 100%;
  padding-bottom: 66.66%;
  

  .map-container{
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  }

`