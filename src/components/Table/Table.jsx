import { useState } from "react"
import "./Table.css"
import { useEffect } from "react"
const Table = ({ stationInfo }) => {

    const [stationData, setStationData] = useState(Object.values(stationInfo['values']))

    // Mettre a jour l'etat si les donnees changent
    useEffect(() => {
        setStationData(Object.values(stationInfo['values']))
    }, [stationInfo])

    return (
        <div>
            <div className="station-name">Capteur {stationInfo["station_name"]}</div>
            <table className="table">
                <thead className="thead">
                    <tr className="tr">
                        <th>Sensor</th>
                        <th>Unit</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody className="tbody">
                    {stationData.map((sensorData, index) => (
                        <tr key={index} className="tr">
                            <td>{sensorData['sensor']}</td>
                            <td>{sensorData['unit']}</td>
                            <td>{sensorData['value'].toFixed(2)}
                                {/* <span className={`${sensorData['value'] > sensorData[index - 1]?.value? "up" : "down"}`}> i</span> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
