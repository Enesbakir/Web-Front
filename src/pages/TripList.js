import React, { useEffect, useState } from 'react'
import TripCard from './TripCard';
import Navbar from './Navbar';

const URL = "https://geomodule.herokuapp.com"

export default function TripList() {
    const name = sessionStorage.getItem("name");
    const role = sessionStorage.getItem("role");
    const surname = sessionStorage.getItem("surname");
    const [trips, setTrips] = useState([]);
    const fetchTripList = () => {
        fetch(URL + '/api/trip/listtrips', {
            method: 'GET',
            })
            .then((res) => res.json())
            .then((response) => {
                console.log(response.data);
                setTrips(response.data);
            });
    }
    useEffect(() => {
        fetchTripList()
      }, [])
    console.log(trips);
    const tripList = trips?.map((trip) => <li className='li-triplist'><TripCard 
                                                    tripFlag={trip.trip_approve_flag}
                                                    tripId={trip.trip_id}
                                                    tripDate={trip.trip_date}
                                                    tripTime={trip.trip_time}
                                                    tripCost={trip.trip_cost}
                                                    tripDistance={trip.trip_distance}
                                                    tripStart={trip.trip_startAddress}
                                                    tripStop={trip.trip_endAddress} >
                                          </TripCard></li>) 
  return (
    <div>
        <Navbar
         name={name}
         surname={surname}
         role={role}>
        </Navbar>
    <div className='div-triplist'>
        
        <h1 className='h1-login-title'>
                TRIP LIST
            </h1>
            <br/>
        <br/>
    <ul className='ul-triplist'>
        {tripList}
        </ul>   
         
        
    </div>
    </div>
  )
}
