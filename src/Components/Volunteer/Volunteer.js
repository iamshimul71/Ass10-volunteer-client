import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData'
import NetVolunterDataLoad from '../NetworkVolunterLIst/NetVolunterDataLoad';


const Volunteer = () => {
    const [volunteer,newVolunter] = useState([])
   const HandleaddVolunteer = ()=>{
       fetch('http://localhost:5000/addvolunteer',{
           method:'POST',
           headers:{
               'Content-Type':'application/json'
           },
           body:JSON.stringify(fakeData)
       })
   }

   useEffect(()=>{
     fetch('http://localhost:5000/volunteerAllList')
     .then(res=>res.json())
     .then(data=>newVolunter(data))

   },[])
    
    return (
        <div>
          
           {
               volunteer.map(data=><NetVolunterDataLoad alldata={data}></NetVolunterDataLoad>)
           }
        </div>
    );
};

export default Volunteer;