import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Geocode from "react-geocode";
import React, { useEffect } from 'react'
import {Button, Container, Form, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '.././logo.svg'
import { GEO_MAP_KEY } from '../helpers/Helper';



export default function Nevigetion() {
    //1hooks statment
    useEffect(()=>{
                // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
        Geocode.setApiKey(GEO_MAP_KEY);

        // set response language. Defaults to english.
        Geocode.setLanguage("en");

        // set response region. Its optional.
        // A Geocoding request with region=es (Spain) will return the Spanish city.
        Geocode.setRegion("es");

        // set location_type filter . Its optional.
        // google geocoder returns more that one address for given lat/lng.
        // In some case we need one address as response for which google itself provides a location_type filter.
        // So we can easily parse the result for fetching address components
        // ROOFTOP, RANGE_INTERPOLATED, GEOMETRIC_CENTER, APPROXIMATE are the accepted values.
        // And according to the below google docs in description, ROOFTOP param returns the most accurate result.
        Geocode.setLocationType("ROOFTOP");

        // Enable or disable logs. Its optional.
        Geocode.enableDebug();              
    })

    //2.
    const UserLogout=()=>{
        //alert('helllllo')
        window.localStorage.removeItem('jwt_token')
        window.location.href='/login'
    }

 
    
    let seelocation =()=>{
        //alert('hiii')
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
          } else {
            document.querySelector('.seelocation').innerHTML = "Geolocation is not supported by this browser.";
          }
       
    }

    function showPosition(position) {

        let lat = position.coords.latitude;
        let long = position.coords.longitude

        window.localStorage.setItem("latitude",lat)
        window.localStorage.setItem("longitude",long)

        console.log("latitude------->>>>>>",lat)
        console.log('longitude----->>>>'+ long)
        Geocode.fromLatLng(lat,long).then(
            (response) => {
             window.localStorage.setItem("address",response.results[0].formatted_address)
              
            },
            (error) => {
              console.error(error);
            }
          );
          window.localStorage.setItem('address', ' Neemuch');
          //x.value = ' Neemuch'; 
        //x.innerHTML = "Latitude: " + position.coords.latitude +
        //"<br>Longitude: " + position.coords.longitude;
    }
  return (
    <>
        <Navbar bg="light" expand="lg" className='h-100' > 
            <Container fluid className='h-100'>
                <Navbar.Brand href="#" className='h-100'>
                    <img
                    src='https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd/jdlogosvg.svg'
                    width="50%"
                    className="d-inline-block align-top h-100"
                    alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex me-5 "><FontAwesomeIcon icon={faLocationDot} className="mt-1 pt-1 me-1 locshodow p-1 " onClick={()=>{seelocation()}} />
                    <Form.Control 
                        readOnly
                        disabled
                        type="text"
                        placeholder="location"
                        className="me-2 seelocation"
                        aria-label="Search"
                        />
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav
                        className="ms-5 my-2"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to="/" className='nav nav-link me-3 btn btn-primary text-white'>Home</Link>
                        {
                            window.localStorage.getItem("jwt_token") === null &&
                            <>
                                <Link to="/login" className='nav nav-link me-3 btn btn-primary text-white'>login</Link>
                                <Link to="/register" className='nav nav-link btn btn-primary text-white'>register</Link>
                            </>
                        }
                        {
                            window.localStorage.getItem("jwt_token") !== null &&
                            <>
                                <Nav.Link  className='nav nav-link me-3 btn btn-primary text-white' onClick={()=>{UserLogout()}} >logout</Nav.Link>
                                
                            </>
                        }
                        
                    </Nav>
                  
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}
