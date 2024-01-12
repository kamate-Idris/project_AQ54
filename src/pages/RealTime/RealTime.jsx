import "./RealTime.css"
import { useEffect, useState } from 'react';
import { baseURl } from '../../utils';
import Table from "../../components/Table/Table";

const RealTime = () => {
    const [firstSensor, setFirstSensor] = useState([])
    const [secondSensor, setSecondSensor] = useState([])



    /**
     * Recuperer les donnees d'un capteur
     * @param {string} sensor 
     */
    const fetchSensorDataAsync = async (sensor) => {
        try {
            const result = await baseURl(`getCurrentValues/${sensor}`);
            if (sensor === "SMART188") {
                setFirstSensor(result)
            } else {
                setSecondSensor(result)
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchSensorDataAsync("SMART188");
        fetchSensorDataAsync("SMART189");
    }, []);




    return (
        firstSensor &&
        <div className="realtime">
            <div className="realtime-container">
                <Table stationInfo={firstSensor}/>
                <Table stationInfo={secondSensor} />
            </div>
        </div>
    )
}

export default RealTime