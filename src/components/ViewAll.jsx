import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
  const [data,changeData] = useState([])
  const fetchData=()=>{
    axios.get("http://localhost:8082/view").then(
      (response)=>{
        changeData(response.data)
      }).catch().finally()
    

    }
      useEffect(()=>{fetchData()},[])  
  return (
    <div>
        <Navbar/>
        <div className="container">
        <h2 align="center"><u><i>VIEW EMPLOYEE</i></u></h2><br></br>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                <table class="table table-dark table-striped">
                <thead>
    <tr>
      <th scope="col">SL.NO</th>
      <th scope="col">ID</th>
      <th scope="col">NAME</th>
      <th scope="col"> JOB</th>
      <th scope="col">SALARY</th>
    </tr>
  </thead>
  <tbody>
    
    {data.map(
      (value,index)=>{
        return <tr>
        <th scope="row">{index+1}</th>
        <td> {value.id}</td>
        <td>{value.name}</td>
        <td>{value.job}</td>
        <td>{value.salary}</td>
      </tr>
      }
    )}

  </tbody>
                </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAll