import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import BookingRow from './BookingRow';

const Bookings = () => {

    const {user} = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res => res.json()
        .then(data => setBookings(data)))
    }, [url])

    const handleDelete = ( id) =>{
        const proceed = confirm('Are you sure?')
        if(proceed){
            fetch(`http://localhost:5000/bookings/${id}`,
            {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {console.log(data)
            if(data.deletedCount>0)
        {
            alert('deleted successful');
            const remaining = bookings.filter(booking => booking._id !== id);
            setBookings(remaining)
        }})
        }
    }

    const handleBookingConfirm = id=>{
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if(data.modifiedCount > 0){
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking => booking._id === id);
                updated.status= 'confirm'
                const newBookings = [updated, ...remaining];
                setBookings(newBookings);
                
            }
        })
    }
    return (
        <div>
            <h2 className='text-5xl'>Your Bookings: {bookings.length}</h2>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Service</th>
        <th>Email</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        bookings.map(bk => <BookingRow key={bk._id} bk={bk} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm}></BookingRow>)
      }
      
      
      
      
    </tbody>
    
    
    
  </table>
</div>
        </div>
    );
};

export default Bookings;