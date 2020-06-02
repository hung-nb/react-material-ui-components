import React from 'react';
import { storiesOf } from '@storybook/react';
import GoogleMap from '../components/GoogleMap';

const locationList = [{
  title: "Location 1",
  coords: { lon: 145.2121, lat: -37.7469 },
  address: 'Blair St, Warrandyte VIC 3113, Australia',
},
{
  title: 'Location 2',
  coords: { lon: 144.9537, lat: -37.7017 },
  address: '366 Church St, Richmond VIC 3121, Australia',
},
{
  title: 'Location 2',
  coords: { lon: 144.3617, lat: -38.1499 },
  address: '123 Test Street',
},
{
  title: 'Location 2',
  coords: { lon: 145.158, lat: -37.715 },
  address: '123 Test Street',
}
]

storiesOf('GoogleMap', module).add('default', () => (
  <GoogleMap locationList={locationList} />
));

// SET GOOGLE MAP STYLE LIKE THIS TO ALIGN MAP WITH OTHER ELEMENTS
// div.map {
//   position: relative;
//   height: 100%;
// }
// <div className={map}><GoogleMap locationList={locationList} /></map>