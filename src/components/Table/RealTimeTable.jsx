import { useState } from "react"
import "./RealTimeTable.css"
import { useEffect } from "react"
const RealTimeTable = ({ stationInfo }) => {

    const [stationData, setStationData] = useState(Object.values(stationInfo.values))

    // Mettre a jour l'etat si les donnees changent
    useEffect(() => {
        setStationData(Object.values(stationInfo.values))
    }, [stationInfo])

    return (
        <div>
            <div className="station-name">Capteur {stationInfo["station_name"]}</div>
            <table className="real-time-table">
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
                            {/* Affciher la valeur et voir si le taux a augmente ou diminuer */}
                            <td>
                                {sensorData['value'].toFixed(2)}
                                {/* {sensorData['value'] !== undefined ? sensorData['value'].toFixed(2) : 'N/A'}
                                {(index === 0 || index > 0) && (
                                    <span className={` ${sensorData['value'] > (stationData[index - 1]?.value ?? -Infinity) ? "up" : "down"}`}> i</span>
                                )} */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default RealTimeTable
