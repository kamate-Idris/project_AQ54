import { useState } from "react"
import "./DifferTimeTable.css"
import Pagination from "../Pagination"


const DifferTimeTable = ({ rawData }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 10;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = Object.values(rawData).slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = ({ pageNumber }) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <table className="differ-time-table">
                <thead className="thead">
                    <tr>
                        <th>AUX1</th>
                        <th>AUX1_INPUT</th>
                        <th>AUX2</th>
                        <th>AUX2_INPUT</th>
                        <th>AUX3</th>
                        <th>co</th>
                        <th>extT</th>
                        <th>intT</th>
                        <th>lat</th>
                        <th>long</th>
                        <th>no2</th>
                        <th>03</th>
                        <th>pm10</th>
                        <th>rh</th>

                    </tr>
                </thead>
                <tbody className="tbody">
                    {
                        currentItems.map((r, index) => (
                            <tr key={index}>
                                <td>{r["AUX1"]}</td>
                                <td>{r["AUX1_INPUT"] === null ? 'null' : r["AUX1_INPUT"]}</td>
                                <td>{r["AUX2"]}</td>
                                <td>{r["AUX2_INPUT"]}</td>
                                <td>{r["AUX3"]}</td>
                                <td>{r["co"]}</td>
                                <td>{r["extT"]}</td>
                                <td>{r["intT"]}</td>
                                <td>{r["lat"].toFixed(2)}</td>
                                <td>{r["long"]}</td>
                                <td>{r["no2"]}</td>
                                <td>{r["o3"]}</td>
                                <td>{r["pm10"]}</td>
                                <td>{r["rh"]}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Pagination
                currentPage={currentPage}
                totalItems={Object.values(rawData).length}
                itemsPerPage={itemsPerPage}
                handlePageChange={handlePageChange}
            />
        </>
    )
}

export default DifferTimeTable
