// import React, {useState,useEffect} from "react";
// import axios from 'axios';



// function OffTimeView ()  {

//     const [OffTimeViews, setOffTimeViews] = useState([]);


//     useEffect(() => {
//         function getOffTimeViews() {
//             axios.get("http://localhost:8070/offTime/offTimeDis").then((res) => {
//                 setOffTimeViews(res.data)
//             }).catch((err) => {
//                 alert(err.message);
//             })
//         }
//         getOffTimeViews();
//     }, []);

// const formatTimestamp = (timestamp) => {
//     try {
//       const date = new Date(timestamp);
//       return date.toLocaleString(); // You can adjust the format as needed
//     } catch (error) {
//       console.error('Error formatting timestamp:', error);
//       return 'Invalid Timestamp';
//     }
//   };

//     return ( 
//      <div className="container">
//         <br/>
//         <h1>Working Hours</h1>
//        <table className="table">
//                 <thead>
//                     <tr className="table-success">  
//                         <th scope="col">No</th>
//                         <th scope="col">Employee ID</th>
//                         <th scope="col">Employee Name</th>
//                         <th scope="col">Off Time</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {OffTimeViews.map((OffTimeView, index) => (
//                         <tr key={OffTimeView._id}>
//                             <th scope="row">{index + 1}</th>
//                             <td>{OffTimeView.employeeId}</td>
//                             <td>{OffTimeView.employeeName}</td>
//                             <td>{formatTimestamp(OffTimeView.timestamp)}</td>  
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//      </div>

//      );
// }
 
// export default OffTimeView ;


import React, {useState,useEffect} from "react";
import axios from 'axios';



function OffTimeView ()  {

    const [OffTimeViews, setOffTimeViews] = useState([]);


    useEffect(() => {
        function getOffTimeViews() {
            axios.get("http://localhost:8070/offTime/offTimeDis").then((res) => {
                setOffTimeViews(res.data)
            }).catch((err) => {
                alert(err.message);
            })
        }
        getOffTimeViews();
    }, []);

const formatTimestamp = (timestamp) => {
    try {
      const date = new Date(timestamp);
      return date.toLocaleString(); // You can adjust the format as needed
    } catch (error) {
      console.error('Error formatting timestamp:', error);
      return 'Invalid Timestamp';
    }
  };

    return ( 
     <div className="container">
        <br/>
        <h1>Working Hours</h1>
       <table className="table">
                <thead>
                    <tr className="table-success">  
                        <th scope="col">No</th>
                        <th scope="col">Employee ID</th>
                        <th scope="col">Employee Name</th>
                        <th scope="col">Off Time</th>
                    </tr>
                </thead>
                <tbody>
                    {OffTimeViews.map((OffTimeView, index) => (
                        <tr key={OffTimeView._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{OffTimeView.employeeId}</td>
                            <td>{OffTimeView.employeeName}</td>
                            <td>{formatTimestamp(OffTimeView.timestamp)}</td>  
                        </tr>
                    ))}
                </tbody>
            </table>
     </div>

     );
}
 
export default OffTimeView ;