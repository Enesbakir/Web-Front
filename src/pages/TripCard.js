import React from 'react'
import { useState, useEffect } from 'react';

const URLL = "https://geomodule.herokuapp.com"

export default function TripCard(props) {
    const [bill, setBill] = useState([]); 
    const [billCost, setBillCost] = useState("");
    const [billDate, setBillDate] = useState("");
    const [img, setImg] = useState();
    const [approve, setApprove] = useState();
    const [trueApprove, setTrueApprove] = useState();
    const [flag, setFlag] = useState(props.tripFlag);
    const [bgColor, setBgColor] = useState();
    
    useEffect(() => {
        if(flag){
            setApprove("Reject");
            setTrueApprove("Approved");
            setBgColor("red");
        }else{
            setApprove("Approve");
            setTrueApprove("Rejected");
            setBgColor("green");
        }
      }, [flag])

    const fetchBill = () => {
        fetch(URLL + '/api/bill/show/' + String(props.tripId), {
            method: 'GET',
            })
            .then((res) => res.json())
            .then((response) => {
                console.log(response);
                setBill(response);
                setBillCost(bill.bill_cost);
                setBillDate(String(bill.bill_date));
                console.log(billCost + "billcosti");
            });
    }
    const fetchBillImage = () => {
        fetch(URLL + '/api/bill/showImage/' + String(props.tripId), {
            method: 'GET',
            })
            .then((res) => res.blob())
            .then((response) => {
                console.log(response.data);
                const imageBlob = response;
                const imageObjectURL = URL.createObjectURL(imageBlob);
                setImg(imageObjectURL);
            });
    }
    const fetchChangeFlag = () => {
        fetch(URLL + '/api/trip/changeFlagAccountant/' + String(props.tripId), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        
        })
        .then((res) => res.json())
        .then((response) => {
    
          if(response.status == "success"){
            console.log("response OK");
            console.log("degisti.");
          }
        });
      }
    useEffect(() => {
        fetchBill();
        fetchBillImage();
      }, [billCost])

  return (

        <div className='div-trip'>
        
        <form className='form-card'>
            <h2 className='h2-trip' style={{textAlign:"center"}}>Trip Approvement is {trueApprove}</h2>
            <div style={{paddingLeft: "75px", paddingBottom: "25px"}}>
                <button className='button-approve' style={{backgroundColor: bgColor}} value={flag} onClick={fetchChangeFlag}>{approve}</button>
            </div>
        
        <h2 className='h2-trip' >TRIP INFO</h2>
          <label className='label-trip' for="date" >Trip Date = </label>
          <label className='label-trip' for="date" >{props.tripDate} </label>

          <br/>
          <label className='label-trip' for="cost" >Trip Cost = </label>
          <label className='label-trip' for="cost" >{props.tripCost} TL</label>

          <br/>
          <label className='label-trip' for="time" >Trip Duration = </label>
          <label className='label-trip' for="time" >{props.tripTime} minute</label>

          <br/>
          <label className='label-trip' for="distance" >Trip Distance = </label>
          <label className='label-trip' for="distance" >{props.tripDistance} km</label>

          <br/>
          <label className='label-trip' for="start" >Trip Start Address = </label>
          <label className='label-trip' for="start" >{props.tripStart}</label>

          <br/>
          <label className='label-trip' for="stop" >Trip Last Address = </label>
          <label className='label-trip' for="stop" >{props.tripStop}</label>

          <h2 className='h2-trip' >BILL INFO</h2>
          <label className='label-trip' for="date" >Bill Date = </label>
          <label className='label-trip' for="date" >{billDate} </label>

          <br/>
          <label className='label-trip' for="billCost" >Bill Cost = </label>
          <label className='label-trip' for="billCost" >{billCost} TL</label>
          
          </form>
          <img className='img-wh' src={img} alt="icons" />
         
        </div>
        

  )
}
