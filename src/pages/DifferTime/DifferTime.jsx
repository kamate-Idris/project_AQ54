import React from 'react'
import "./DifferTime.css"
import { useState, useEffect } from 'react';
import { baseURl } from '../../utils';
import * as d3 from 'd3';
import DifferTimeTable from '../../components/Table/DifferTimeTable';



const DifferTime = () => {
  const [capteur, setCapteur] = useState({
    name: "",
    from: "",
    to: ""
  })
  const [isEmpty, setIsEmpty] = useState(false)
  const [rawData, setRawData] = useState(null)

  // Delimiter la selection de date 30 jours au maximum
  const currentDate = new Date();
  const currentDateString = currentDate.toISOString().split('T')[0];
  const maxDate = new Date(currentDate)
  maxDate.setDate(currentDate.getDate() + 30)
  const maxDateString = maxDate.toDateString().split("T")[0]

  


  /**
   * 
   * @returns {}
   */
  const handleSubmit = async () => {
    
    try {
      // Verifie si un champ est vide
      if (capteur.name === '' || capteur.from === '' || capteur.to === '') {
        setIsEmpty(true)
        console.log("enpty");
        return
      }
      const res = await baseURl(`getRange/${capteur.name}/${capteur.from}/${capteur.to}`)
      setIsEmpty(false)
      setRawData(res['raw_data'])
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className='differ'>
      {isEmpty && < div className='empty'>
        <h4>Veuillez renseigner tout les champs</h4>
      </div>}
      <div className="inputs">
        <input type="text" onChange={e => setCapteur({ ...capteur, name: e.target.value })}
          placeholder='Entrer le nom du capteur' />
        <input type="date" placeholder='Entrer la date de debut' min={currentDateString}
          max={maxDateString}
          onChange={e => setCapteur({ ...capteur, from: e.target.value })}
        />
        <input type="date" placeholder='Entrer la date de fin' min={currentDateString}
          max={maxDateString}
          onChange={e => setCapteur({ ...capteur, to: e.target.value })}
        />
        <button className='btn' onClick={handleSubmit}>envoyer</button>
      </div>
      <div className="display-data" id="stacked-bar-chart">
        {rawData && <DifferTimeTable rawData={rawData} />}
      </div>
    </div >
  )
}



export default DifferTime
