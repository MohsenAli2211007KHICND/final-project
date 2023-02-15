import React from 'react'

export default function HotelDescription({onClicBtn,hotelData, handleBookBtn}) {
  return (
<div>
              <button onClick={onClicBtn}>Return to Results</button>
          <h3>Hotels Description</h3>
          <table border={2}>
            <thead>
              <tr>
                <th>Hotel Name</th>
                <th>Long Description</th>
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
                    <td>{item.hotel_name}</td>
                    <td>
                      Hotel Swiss is a 2-star property located in Karachi. With
                      free WiFi, this 2-star hotel offers a shared lounge and
                      room service. The property has a 24-hour front desk and a
                      concierge service for guests.
                      All rooms feature a private bathroom, free toiletries and
                      bed linen. A halal breakfast is available every morning at
                      Hotel Swiss. The nearest airport is Jinnah Internatio nal
                      Airport, 8.7 miles from the accommo dation
                    </td>
                    <td>{item.thumbnail_image}</td>
                    <td>{item.experience}</td>
                    <td>{item.city}</td>
                    <td>{item.pool}</td>
                    <td>{item.price}</td>
                    <td><button onClick={()=> handleBookBtn(item.price)} type='button' >Book Now</button></td>
                  </>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  )
}
