import React, { useCallback, useEffect, useState } from 'react'

export default function HotelMainPage() {
    const [city, setCity] = useState('');
    const [hotelExp, setHotelExp] = useState('');
    const [pool, setPool] = useState('');
    const [hotelData, setHotelData] = useState([])

    useEffect(() =>{
        const fetchData = () =>{
            fetch("http://192.168.0.129:8080/hotel/all")
            .then(response => response.json())
            .then(data => setHotelData(data));
        }
        fetchData();
    },[])

    const handleCity = useCallback((e)=>{
        setCity(e.target.value);
    },[city])
    const handleExp = useCallback((e)=>{
        setHotelExp(e.target.value);
    },[hotelExp])
    const handlePool = useCallback((e)=>{
        setPool(e.target.value);
    },[pool]);

    
console.log(hotelData);
    const onSubmit =() =>{

    const obj = {
        

    }

    fetch("http://192.168.0.129:8080/hotel", {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(obj)
    })
        .then(async response => {
            const data = await response.json();
            setHotelData(data);
        })
        .catch(err => {
            console.log(err)
            const updateUser = 'Error saving info!';
        
        });
 

}


  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: '10%'}}>
      <form action="">
      <h1>Hotel Main Page</h1>

        <table style={{width: "50%"}}>
            <tr>
                <td>   <label htmlFor="city">City:</label></td>
                <td>  <select name="" id="" onChange={handleCity}>
                    <option value={city}>karachi</option>
                    <option value={city}>Islamabad</option>
                    <option value={city}>Lahore</option>
                    </select></td>
            </tr>
            <tr>
                <td>   <label htmlFor="hotel-experience">Hotel Experience:</label></td>
                <td>   <select name="" id="" onChange={handleExp}>
                    <option value={hotelExp}>budget</option>
                    <option value={hotelExp}>business</option>
                    <option value={hotelExp}>luxury</option>
                    </select></td>
            </tr>
            <tr>
                <td>   <label htmlFor="swimming-pool">Swimming Pool:</label></td>
                <td>    <input type="radio" value={pool} name='swimm' onChange={handlePool} />YES<input type="radio" name='swimm' value={''} onChange={''} />NO</td>
            </tr>
            <tr>
                <td><button type='submit'>Search</button></td>
            </tr>
            
        </table>
     
    
      </form>
      {hotelData ?   hotelData.map((item, index) =>(
            <p>{item.name}</p>
        ))
      :''}
    </div>
  )
}
