import React from 'react'
import styles from './HotelList.module.css'

export default function HotelList({ hotelData, handleHotelNameBtn, handleBookBtn }) {
    return (
        <div>
            <table style={{ width: '100%' }}>
                <h3>Search Hotels Result</h3>
                {hotelData.map((item) => (
                    <div className="card mb-2 ms-3" style={{ maxWidth: "70%", maxHeight: '40%' }}>
                        <div className="row g-0">
                            <div style={{ marginRight: '-50px' }} className="col-md-2">
                                <img src={`${item.thumbnail_image}`} className="img-fluid rounded-pill " width={100} alt="thumbnail" />
                            </div>
                            <div style={{}} className="card-body col-md-2">
                                <tr>
                                    <td style={{textAlign: 'center', borderRight: '1px solid gray'}}>Hotel Name</td>
                                    <td style={{textAlign: 'center', borderRight: '1px solid gray'}}>Description</td>
                                    <td style={{textAlign: 'center', borderRight: '1px solid gray'}}>City</td>
                                    <td style={{textAlign: 'center', borderRight: '1px solid gray'}}>Pool</td>
                                    <td style={{textAlign: 'center', borderRight: '1px solid gray'}}>Experience</td>
                                    <td style={{textAlign: 'center', borderRight: '1px solid gray'}}>Price</td>
                                    <td ></td>
                                </tr>
                                <tr>
                                    <td style={{borderRight: '1px solid gray'}}> <span className={`${styles.listItem} ${styles.hotelName}`}><a role='button' onClick={handleHotelNameBtn}>{item.hotel_name}</a></span></td>
                                    <td style={{borderRight: '1px solid gray'}}><span className={styles.listItem}><a role='button' onClick={handleHotelNameBtn}>{item.description}</a></span></td>
                                    <td style={{borderRight: '1px solid gray'}}><span className={styles.listItem}><a role='button' onClick={handleHotelNameBtn}>{item.city}</a></span></td>
                                    <td style={{borderRight: '1px solid gray'}}><span className={styles.listItem}><a role='button' onClick={handleHotelNameBtn}>{item.pool}</a></span></td>
                                    <td style={{borderRight: '1px solid gray'}}><span className={styles.listItem}><a role='button' onClick={handleHotelNameBtn}>{item.experience}</a></span></td>
                                    <td style={{borderRight: '1px solid gray'}}><span className={styles.listItem}><a role='button' onClick={handleHotelNameBtn}>{item.price}</a></span></td>
                                    <td><span className={styles.listItem}><button onClick={() => handleBookBtn(item.price)} >Book Now</button></span></td>
                                </tr>

                            </div>
                        </div>
                    </div>
                ))}
            </table>
        </div>
    )
}
