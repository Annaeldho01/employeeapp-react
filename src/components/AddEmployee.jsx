import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddEmployee = () => {
    const [data,changeData] = useState([{
        "id":"",
    "name":"",
    "job":"",
    "salary":"",
    }])
const inputHandler=(event)=>{
    changeData({...data,[event.target.name]:event.target.value})
}
const readValue=()=>{
    console.log(data)
    axios.post("http://localhost:8082/",data).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
                alert("succesfully added")
            } 
            else{
                alert("error")
            }
        }
    ).catch().finally()
    
}
  return (
    <div>
        <Navbar/>
        <div className="container">
            <h2 align="center"><u><i>ADD EMPLOYEE</i></u></h2><br></br>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">ID</label>
                            <input type="text" className="form-control" name='id' value={data.id} onChange={inputHandler}/>
                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Job</label>
                            <input type="text" className="form-control" name='job' value={data.job} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Salary</label>
                             <input type="text"   className="form-control" name='salary' value={data.salary} onChange={inputHandler}/>
                        </div>
                       
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddEmployee