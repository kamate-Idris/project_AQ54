import React from 'react'
import "./DifferTime.css"
import { useState, useEffect } from 'react';
import { baseURl } from '../../utils';
import * as d3 from 'd3';
import DifferTimeTable from '../../components/Table/DifferTimeTable';

/* const StackedBarChart = ({ data }) => {
  useEffect(() => {
    // Supprimer le contenu existant
    d3.select('#stacked-bar-chart').selectAll('*').remove();

    const keys = ['co', 'extT', 'intT', 'no2', 'o3', 'pm10', 'pm25'];

    const stackedData = d3.stack().keys(keys)([data]);

    const width = 500;
    const height = 300;

    const svg = d3.select('#stacked-bar-chart')
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const xScale = d3.scaleBand()
      .domain(Object.keys(data))
      .range([0, width])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(stackedData[stackedData.length - 1], d => d[1])])
      .range([height, 0]);

    const colorScale = d3.scaleOrdinal()
      .domain(keys)
      .range(d3.schemeCategory10);

    svg.selectAll('g')
      .data(stackedData)
      .enter().append('g')
      .attr('fill', d => colorScale(d.key))
      .selectAll('rect')
      .data(d => d)
      .enter().append('rect')
      .attr('x', d => xScale(d.data))
      .attr('y', d => yScale(d[1]))
      .attr('height', d => yScale(d[0]) - yScale(d[1]))
      .attr('width', xScale.bandwidth());

    // Ajouter l'axe des x
    svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    // Ajouter l'axe des y
    svg.append('g')
      .call(d3.axisLeft(yScale));
  }, [data]);

} */

const DifferTime = () => {
  const [capteur, setCapteur] = useState({
    name: "",
    from: "",
    to: ""
  })
  const [isEmpty, setIsEmpty] = useState(false)

  const currentDate = new Date();
  const currentDateString = currentDate.toISOString().split('T')[0];
  const maxDate = new Date(currentDate)
  maxDate.setDate(currentDate.getDate() + 30)
  const maxDateString = maxDate.toDateString().split("T")[0]

  


  /**
   * 
   * @returns 
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
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className='differ'>
      {isEmpty && < div className='empty'>
        <h3>Veuillez renseigner tout les champs</h3>
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
        <DifferTimeTable />
      </div>
    </div >
  )
}



export default DifferTime
