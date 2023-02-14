import React from 'react'

export default function HotelDescription() {
  return (
    <div>
      <h1>Hotel Description</h1>
      <form action="">
        <table>
            <tr>
                <td><label htmlFor="hotel-name">Hotel Name:</label></td>
                <td><input type="text" value={''} /></td>
                <td><label htmlFor="hotel-name">Hotel Description:</label></td>
                <td><textarea placeholder='Hotel Description:' value={''} /></td>
                <td><label htmlFor="hotel-name">Hotel Experience Level:</label></td>
                <td>   <select name="" id="">
                    <option value="budget">budget</option>
                    <option value="business">business</option>
                    <option value="luxury">luxury</option>
                    </select></td>

            </tr>
        </table>
      </form>
    </div>
  )
}
