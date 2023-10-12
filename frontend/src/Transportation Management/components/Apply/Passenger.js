import axios from 'axios'
import React, {useState,useEffect} from 'react'
//import './AllShuttle.css'

const Passenger = () => {
  const [query, setQuery] = useState("");
  const [Applys, setApplys] = useState([])
  
  
  const handleSearch = () => {
    if (!query) {
      setQuery('');
      return;
    }

    axios.get(`http://localhost:8070/apply/search?query=${query}`)
      .then((res) => {
        setApplys(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  const [selectedRoute, setSelectedRoute] = useState('');
  

  //useEffect
    useEffect(()=>{
        const getApplys =()=>{
            axios.get("http://localhost:8070/apply").then((res)=>{
                setApplys(res.data)
            }).catch((err)=>{
                alert(err.message)
            })
        }

        getApplys()
    },[])

   

      //delete
    const handleDeleteApply= (applyId) => {
        const confirmDeletion = window.confirm("Are you sure you want to delete this Shuttle?");
        
        if (confirmDeletion) {
          axios
            .delete(`http://localhost:8070/apply/delete/${applyId}`)
            .then((response) => {
              // Handle the response if needed
              // Remove the deleted feedback from the feedback list
              const updatedApplys = Applys.filter((item) => item._id !== applyId);
              setApplys(updatedApplys);
            })
            .catch((error) => {
              console.error("Error deleting feedback:", error);
              // Handle errors if needed
            });
        }
      };

    return ( 
        <div className="shuttle-container">
                    <h1>All Passenger </h1>
                
                    
                    <div>
        <input
          type="text"
          placeholder="Search Name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
       <table className="shuttle-table">
                        <thead> 
                        <tr>
                            <th>Name</th>
                            <th>Id</th>
                            <th>PhoneNo</th>
                            <th>Route</th>
                            <th>PickupLocation</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>

            {Applys.map((apply, index) => (
             <tr
             key={index}
             style={{
              backgroundColor: 
              query && apply.Name.toLowerCase().includes(query.toLowerCase()) ? 'yellow' : 'transparent',
            }}>
             <td>{apply.Name}</td>
             <td>{apply.Id}</td>
             <td>{apply.PhoneNo}</td>
             <td>{apply.Route}</td>
             <td>{apply.PickupLocation}</td>
              <td>
                {/* Display the live location link */}
                {apply.liveLocationLink && (
                  <a href={apply.liveLocationLink} target="_blank" rel="noopener noreferrer">
                    View Live Location
                  </a>
                )}
              </td>


              <button onClick={() => handleDeleteApply(apply._id)}>Delete</button>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

 
export default Passenger;