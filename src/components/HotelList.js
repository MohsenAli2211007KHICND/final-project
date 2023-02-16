import React from 'react'
import styles from './HotelList.module.css'

export default function HotelList({hotelData, handleHotelNameBtn, handleBookBtn}) {
    return (
        <div>
            <h3>Search Hotels Result</h3>
            <table border={2}>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Hotel Name</th>
                        <th>Short Description</th>
                        <th>Hotel Image</th>
                        <th>Experience</th>
                        <th>Location</th>
                        <th>Swimming Pool</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {hotelData.map((item) => (
                        <tr>
                            <>
                                <td>{item.id}</td>
                                <td><a role='button' onClick={handleHotelNameBtn}>{item.hotel_name}</a></td>
                                <td>{item.description}</td>
                                <td>{item.thumbnail_image}</td>
                                <td>{item.experience}</td>
                                <td>{item.city}</td>
                                <td>{item.pool}</td>
                                <td>{item.price}</td>
                                <td><button onClick={() => handleBookBtn(item.price)} >Book Now</button></td>
                            </>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
