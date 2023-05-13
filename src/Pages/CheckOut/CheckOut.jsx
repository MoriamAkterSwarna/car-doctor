import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();

  const {user} = useContext(AuthContext)
//    console.log(service);
  const { title, _id, img, price } = service;
  const bookedHandleService = event =>{
    event.preventDefault();
    const form = event.target;
    const firstName = form.first.value;
    const lastName = form.last.value;
    const email = form.email.value;
    const phone =  form.phone.value;
    const message = form.message.value;
    console.log(firstName, lastName, email, phone, message)

    const bookedOrder = {
        customerFirstName: firstName,
        customerLastName: lastName,
        email: email,
        phone: phone,
        message: message,
        service: title,
        service_id: _id,
        image: img,
        price: price
    }
    console.log(bookedOrder)

    fetch('http://localhost:5000/bookings',{
        method: "POST",
        headers:{
            'content-type': 'application/json'

        },
        body: JSON.stringify(bookedOrder)
    })
    .then(res => res.json())
    .then( data => {console.log(data);
    if(data.insertedId){
        alert('service booked successfully')
    }}
    )
  }
  return (
    <div>
      <p className="text-3xl text-orange-500 text-center font-bold">Service:  {title}</p>

      <form onSubmit={bookedHandleService} className="w-3/4 mx-auto bg-orange-50 p-10 my-10 rounded">
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            
            <input
              type="text" name="first"
              placeholder="First Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            
            <input
              type="text" name="last"
              placeholder="Last Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            
            <input
              type="text" name="phone"
              placeholder="Your Phone"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            
            <input
              type="text" name="email"
              placeholder="Your Email"
              className="input input-bordered"
            />
          </div>
          </div>
          <div className="form-control">
            
            <input 
              type="text" name="message"
              placeholder="Your Message"
              className="input input-bordered h-32"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-block bg-orange-500">Order Confirm</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
