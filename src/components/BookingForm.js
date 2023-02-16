import React, { useCallback, useState } from 'react'
import HotelMainPage from './HotelMainPage';
import styles from './BookingForm.module.css'


let curr =new Date(Date.now()).toISOString()
let current = curr.substring(0,10).replaceAll('-','')

export default function BookingForm({price}) {
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');

    const [startPage, setStartPage] = useState(false)

    const handleFullName = useCallback((e)=>{
        setFullName(e.target.value);
    },[fullName]);
    const handleAddress = useCallback((e)=>{
        setAddress(e.target.value);
    },[address]);
    
    const handleEmail = useCallback((e) =>{
        setEmail(e.target.value)
    },[email])
    const handleDate = useCallback((e) =>{
        setDate(e.target.value)
    },[email])

    const handleCancelBtn = ()=>{
        setStartPage(true)
    }

let bookDate = date.substring(0,10).replaceAll('-','')
 let stayDurtion=date ? bookDate-current : 0;
  return (
    <div>
        {/* name, address and email address, and the dates of their stay */}
      <form action="">
        <table>
            <tbody>
                <tr>
                    <td><label htmlFor="name">Full Name:</label></td>
                    <td><input type="text" value={fullName} onChange={handleFullName} placeholder='Enter name' /></td>
                </tr>
                <tr>
                    <td><label htmlFor="address">Address:</label></td>
                    <td><input type="text" value={address} onChange={handleAddress} placeholder='Enter Full Address' /></td>
                </tr>
                <tr>
                    <td><label htmlFor="email">Email:</label></td>
                    <td><input type="Email" value={email} onChange={handleEmail} placeholder='Enter Email' /></td>
                </tr>   
                 <tr>
                    <td><label htmlFor="date">Staying Date:</label></td>
                    <td><input type="date" value={date} onChange={handleDate} /></td>
                    <td><label htmlFor="total">Total Price=</label></td>
                    <td>{(price * stayDurtion)+((price * stayDurtion)/100)*12}</td>
                    <td><label htmlFor="total">Tax=</label></td>
                    <td>{((price * stayDurtion)/100)*12}</td>
                </tr>
            </tbody>
        </table>     
        <button type='butthon'>Book My Stay</button>
        <button type='butthon'onClick={handleCancelBtn}>Cancel</button>
      </form>
      {startPage ? <HotelMainPage /> : null}
    </div>
  )
}
