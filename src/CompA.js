import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Aos from 'aos'
import 'aos/dist/aos.css';
import './components/Boxes.css'
import Navbar from './components/Navbar'
import Header from './components/Header'



const CompA = () => {


  const [data, setData] = useState([]);

  const getData = async() => {
    const res = await axios.get(`https://api.covid19india.org/data.json`)
     console.log(res.data.statewise)
     setData(res.data.statewise)
  }

  useEffect(()=>{
      getData();
  },[]);

  useEffect(()=>{
    Aos.init({duration:2000});
  }, []);
   
  return (
    <>
    <Header />
    <Navbar /> 
  <div className = 'total-container' >
    
    <div className = 'section'>
    <div className='container-fluid'>
      <div className = 'heading'>
        <h1 className='head'><span className ='font-weight-bold'></span>INDIA COVID 19 TRACKER</h1>
      </div>  

      <div className = 'table-responsive'>
      <table className = 'table table-hover'>
        <thead className = 'table-head'>
          <tr>
            <th>State</th>
            <th>Confirmed</th>
            <th>Recovered</th>
            <th>Deaths</th>
            <th>Active</th>
            <th>Last Updated Time</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((firstElement,index) => {
              return (
                <tr key = {index}>
                  <td>{firstElement.state}</td>
                  <td>{firstElement.confirmed}</td>
                  <td>{firstElement.recovered}</td>
                  <td>{firstElement.deaths}</td>
                  <td>{firstElement.active}</td>
                  <td>{firstElement.lastupdatedtime}</td>
                </tr>
                

              )
            })
          }

        </tbody>

      </table>
    </div>
  </div>
  </div>

 <div className = 'section'>
  <div className = 'content'>
    <p className = 'para'> <b>Positive quotes to replace your negative thoughts.</b> </p>
    <ul>
      <li>
      Once you replace negative thoughts with positive ones, you’ll start having positive results –Willie Nelson.
      </li>
      <li>
      Few things in the world are more powerful than a positive push. A smile.A world of optimism and hope.A ‘you can do it when things are tough.-Richard M.DeVos.
      </li>
      <li>
      Live life to the fullest, focus on the positive-Matt Cameron.
      </li>
      <li>
      Always turn a negative situation into a positive situation –Micheal Jordan.
      </li>
      <li>
      Your smile will give you a positive countenance that will make people feel comfortable around you.-Les Brown.
      </li>
    </ul>

  </div> 
  </div> 

  <div className = "behind">
  </div>
</div>



  </>

  )
}


export default CompA



