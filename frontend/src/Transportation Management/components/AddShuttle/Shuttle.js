import React,{useState} from "react";
import axios from "axios"
import './Shuttle.css'

const AddShuttle = () => {

   
    const [VehicleNumber , setNo] = useState("")
    const [Route , setRoute] = useState("")
    const [DriverName , setDriverName] = useState("")
    const [submitted, setSubmitted] = useState(false);
    const [VehicleType, setType] = useState(false);
    const [VehicleImage, setImage] = useState(null);

    function sendData(e){ 
        e.preventDefault()
        
        const formData = new FormData();
        formData.append("VehicleNumber", VehicleNumber);
        formData.append("Route", Route);
        formData.append("VehicleType", VehicleType);
        formData.append("VehicleImage", VehicleImage);
        formData.append("DriverName", DriverName);

        axios
          .post("http://localhost:8070/shuttle/add", formData, {
            headers: {
              "Content-Type": "multipart/form-data", // Set the content type to form data for file uploads
            },
          })
          .then(() => {
            alert("Shuttle Added");
            setSubmitted(true);
            console.log(formData);
          })
          .catch((error) => {
            alert("fill all fields");
          });
      }

    return ( 
        <div className="container">
            <form onSubmit={sendData}>
                
                

                <div class="mb-3">
                    <label for="VehicleNumber" class="form-label">Vehicle Number</label>
                    <input type="text" class="form-control" id="VehicleNumber"  placeholder="Enter your VehicleNumber" onChange={(e)=>{
                        setNo(e.target.value)
                    }}/>
                </div>

        <div className="mb-3">
            <label htmlFor="Route" className="form-label">
                Route
            </label>
            <div className="input-group">
                <select
                    className="form-control"
                    id="Route"
                    onChange={(e) => {
                       setRoute(e.target.value);
                    }}
                    defaultValue=""
                    >
                        <option value="">Select a Route</option>
                        <option value="Colombo">Colombo</option>
                        <option value="Kaduwela">Kaduwela</option>
                        <option value="Gampaha">Gampaha</option>
                        {/* Add more options as needed */}
                </select>
                    <div className="input-group-append">
                        <span className="input-group-text">
                            <i className="fas fa-chevron-down"></i>
                        </span>
                    </div>
            </div>
        </div>

      
        
        <div className="mb-3">
          <label htmlFor="VehicleImage" className="form-label">
            Vehicle Image
          </label>
          <input
            type="file"
            className="form-control"
            id="VehicleImage"
            onChange={(e) => {
setImage(e.target.files[0]);
            }}
          />
        </div>


                <div className="mb-3">
            <label htmlFor="Type" className="form-label">
                Vehicle Type
            </label>
            <div className="input-group">
                <select
                    className="form-control"
                    id="Type"
                    onChange={(e) => {
                       setType(e.target.value);
                    }}
                    defaultValue=""
                    >
                        <option value="">Vehicle Type</option>
                        <option value="Van-AC">Van-AC</option>
                        <option value="Van-Non-AC">Van-Non-AC</option>
                        <option value="Bus-AC">Bus-AC</option>
                        <option value="Bus-Non-AC">Bus-Non-AC</option>
     </select>
                    <div className="input-group-append">
                        <span className="input-group-text">
                            <i className="fas fa-chevron-down"></i>
                        </span>
                    </div>
            </div>
        </div>
        <div class="mb-3">
                    <label for="DriverName" class="form-label">Driver Name</label>
                    <input type="text" class="form-control" id="DriverName"  placeholder="Enter Driver Name" onChange={(e)=>{
                        setDriverName(e.target.value)
                    }}/>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
     );
}
 
export default AddShuttle;