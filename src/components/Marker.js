import React from 'react';
import styled from 'styled-components'
import mapboxgl from 'mapbox-gl';
import './MarkerStyles.css'


const Marker = ({map}) => {




    if(map){
        map.on('load', () => {
            const el = document.createElement('div');
            el.id = 'marker';
            el.innerHTML = `<h3>Joes, Colorado</h3>` ;
    
    
    
            // new mapboxgl.Marker({
            //     color: "#FFFFFF",
            // })
            // .setLngLat([-102.678, 39.657 ])
            // .addTo(map)



             new mapboxgl.Marker(el,{
                color: "#EC006F",
                draggable: true
                }).setLngLat([-102.678, 39.657 ])
                .addTo(map);

                el.addEventListener('click', function(e){
                    flyToProject()})
        });

        function flyToProject() {
            map.flyTo({
                center: [-102.678, 39.657 ],
                zoom: 14,
                speed: 1,
            });
    }
}

    return (
        <Container>
            
        </Container>
    )
}

export default Marker

const Container = styled.div`



` 

