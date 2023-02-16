import React, { useCallback, useEffect, useState } from "react";
import BookingForm from "./BookingForm";
import HotelDescription from "./HotelDescription";
import HotelList from "./HotelList";
import styles from './HotelMainPage.module.css'
import logo1 from './imges/Logo1.png'
import logo2 from './imges/Logo2.png'
import logo3 from './imges/Logo3.png'


const hotelSerchData = [
    {
        id: 1,
        thumbnail_image: logo1,
        hotel_name: "PC Hotel",
        description: "PC hotel short description",
        city: "Karachi",
        pool: "Yes",
        experience: "Luxuary",
        price: 5000,
    },
    {
        id: 2,
        thumbnail_image: logo2,
        hotel_name: "DC Hotel",
        description: "DC hotel short description",
        city: "Turbat",
        pool: "No",
        experience: "Business",
        price: 3000,
    },
    {
        id: 3,
        thumbnail_image: logo3,
        hotel_name: "GC Hotel",
        description: "GC hotel short description",
        city: "Islamabad",
        pool: "Yes",
        experience: "Budget",
        price: 1000,
    },
];

export default function HotelMainPage() {
    const [city, setCity] = useState("");
    const [hotelExp, setHotelExp] = useState("");
    const [pool, setPool] = useState(false);
    const [hotelData, setHotelData] = useState(hotelSerchData);
    const [swimmPool, setSwimmPool] = useState(false);
    const [hotelPrice, setHotelPrice] = useState('')

    const [showdata, setShowData] = useState(false);
    const [moreDescription, setMoreDescription] = useState(false)
    const [showBookingForm, setShowBookingForm] = useState(false);
    // useEffect(() =>{
    //     const fetchData = () =>{
    //         fetch("http://192.168.0.129:8080/hotel/all")
    //         .then(response => response.json())
    //         .then(data => setHotelData(data));
    //     }
    //     fetchData();
    // },[])

    const handleCity = useCallback(
        (e) => {
            setCity(e.target.value);
        },
        [city]
    );
    const handleExp = useCallback(
        (e) => {
            setHotelExp(e.target.value);
            console.log("i am in experience");
        },
        [hotelExp]
    );
    const handlePool = useCallback(
        (e) => {
            let value = e.target.value;
            setPool(value);
            if (value === "Yes") {
                setSwimmPool(true);
            } else if (value === "No") {
                setSwimmPool(false);
            }
        },
        [pool]
    );

    const handleBookBtn = (price) => {
        setHotelPrice(price);
        setShowBookingForm(true);
        setShowData(false)
    }

    console.log(hotelData);
    //     const onSubmit =() =>{

    //     const obj = {
    // location: city,
    // experience: hotelExp,
    // pool: pool

    //     }

    //     fetch("http://192.168.0.129:8080/hotel", {
    //         method: 'POST',
    //         mode: 'cors',
    //         cache: 'no-cache',
    //         credentials: 'same-origin',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         redirect: 'follow',
    //         referrerPolicy: 'no-referrer',
    //         body: JSON.stringify(obj)
    //     })
    //         .then(async response => {
    //             const data = await response.json();
    //             setHotelData(data);
    //         })
    //         .catch(err => {
    //             console.log(err)
    //             const updateUser = 'Error saving info!';

    //         });

    // }

    const onClicBtn = () => {
        setShowData(!showdata);
        setMoreDescription(false)
    };
    const handleHotelNameBtn = () => {
        setShowData(false)
        setMoreDescription(!moreDescription)
    }

    return (
      <>
       <div style={{backgroundColor: "#4d3fb375"}}>
            <div className={styles.navbar}>
            <h1 className={styles.heading}>Exotourista</h1>
                <form action="">
                    <label htmlFor="city" className={styles.formLabel}>City:</label>
                    <select className={styles.selectField} name="" id="" onChange={handleCity}>
                        <option value={city}>karachi</option>
                        <option value={city}>Islamabad</option>
                        <option value={city}>Lahore</option>
                    </select>
                    <label htmlFor="hotel-experience" className={styles.formLabel}>Hotel Experience:</label>
                    <select className={styles.selectField} name="" id="" onChange={handleExp}>
                        <option value={hotelExp}>budget</option>
                        <option value={hotelExp}>business</option>
                        <option value={hotelExp}>luxury</option>
                    </select>
                    <label htmlFor="swimming-pool" className={styles.formLabel}>Swimming Pool:</label>
                    <input
                        type="checkbox"
                        checked={pool === "Yes"}
                        value={"Yes"}
                        onChange={handlePool}
                    />
                    <span className={styles.checkOption}>Yes</span>
                    <input
                        type="checkbox"
                        checked={pool === "No"}
                        value={"No"}s
                        onChange={handlePool}
                    />{" "}
                    <span className={styles.checkOption}>No</span>
                    <button type="button" onClick={onClicBtn} className={styles.searchBtn}>
                        Search
                    </button>
                </form>
            </div>
            </div>
            {//**********************************Hotel List*********************************************************/
            }
            {showdata ? <HotelList hotelData={hotelData} handleHotelNameBtn={handleHotelNameBtn} handleBookBtn={handleBookBtn} /> : null}

            {//**********************************Hotel Description*********************************************************/
            }
            {moreDescription ? <HotelDescription onClicBtn={onClicBtn} hotelData={hotelData} handleBookBtn={handleBookBtn} /> : null}
            {showBookingForm ? <BookingForm price={hotelPrice} /> : null}
       </>
    );
}
