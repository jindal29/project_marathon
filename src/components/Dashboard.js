/* eslint-disable no-unused-vars */
import React,{ useState } from 'react'
import './Dashboard.css'

function Dashboard(){
    const [students, setStudents] = useState(
        [{rollNumber:123,name:"kashika",email:"kashu@gmail.com"},{rollNumber:124,name:"subi",email:"subi@gmail.com"},{rollNumber:125,name:"gourav",email:"gourav@gmail.com"}]
         )
         return (
           <>
           <div className="container">
       
       
             <div className="header">
               <h3 style={{flex:0.33,backgroundColor:"red",textAlign:"center"}}>Roll Number</h3>
               <h3 style={{flex:0.33,backgroundColor:"yellow",textAlign:"center"}}>Name</h3>
               <h3 style={{flex:0.33,backgroundColor:"green",textAlign:"center"}}>Email</h3>
             </div>
       
             
             {students.map((student)=> <div className="student">
             <h3 style={{flex:0.33,backgroundColor:"red",textAlign:"center"}}>{student.rollNumber}</h3>
             <h3 style={{flex:0.33,backgroundColor:"yellow",textAlign:"center"}}>{student.name}</h3>
               <h3 style={{flex:0.33,backgroundColor:"green",textAlign:"center"}}>{student.email}</h3>
               </div>
       
        )}
           </div>
           </>
         )
       }
export default Dashboard;