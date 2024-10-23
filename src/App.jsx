import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import './ParkingLot.css'

import io from "socket.io-client"
import { ParkingSpot } from './components/ParkingSpot'

const socket = io('https://electronicaserver.onrender.com')

function App() {
  const [parkingStatus, setParkingStatus] = useState({
    sensor_1: 0,
    sensor_2: 0,
    sensor_3: 0,
    sensor_4: 0,
  });

  useEffect(()=> {
    socket.on('arduino', (newData) => {
      setParkingStatus(newData)
      console.log(newData)
    })

  return () => {
    socket.off('arduino')
  }
  }, [])

  return (
    
     <div className='parking-lot'> 
      <h1 className="titulo">Electrónica Digital 2024</h1>
      {/* <ParkingSpot status={parkingStatus.sensor_1}></ParkingSpot>
      <ParkingSpot status={parkingStatus.sensor_2}></ParkingSpot>
      <ParkingSpot status={parkingStatus.sensor_3}></ParkingSpot>
      <ParkingSpot status={parkingStatus.sensor_4}></ParkingSpot> */}

      <div className="parking-lot-2">
      {/* Línea de estacionamiento superior */}
      <div className="parking-line"></div>

      <div className="parking-space">
      <ParkingSpot status={parkingStatus.sensor_1} spotNumber = {1}></ParkingSpot>
      </div>
      <div className="parking-line"></div>
      <div className="parking-space">
      <ParkingSpot status={parkingStatus.sensor_2} spotNumber = {2}></ParkingSpot>
      </div>
      <div className="parking-line"></div>
      <div className="parking-space">
      <ParkingSpot status={parkingStatus.sensor_3} spotNumber = {3}></ParkingSpot>
      </div>
      <div className="parking-line"></div>
      <div className="parking-space">
      <ParkingSpot status={parkingStatus.sensor_4} spotNumber = {4}></ParkingSpot>
      </div>

      {/* Línea de estacionamiento inferior */}
      <div className="parking-line"></div>
    </div>
      </div>
  
  )
}

export default App
