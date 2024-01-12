import "./Table.css"
const Table = ({ stationInfo }) => {

    const station_data = Object.values(stationInfo['values'])

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
                    {station_data.map((sensorData, index) => (
                        <tr key={index} className="tr">
                            <td>{sensorData['sensor']}</td>
                            <td>{sensorData['unit']}</td>
                            <td>{sensorData['value'].toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
