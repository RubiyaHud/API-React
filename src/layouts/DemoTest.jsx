import React, { useState, useEffect } from "react";
import axios from "axios";

const DemmoTest = () => {
    let [allData, setAllData] = useState([]);

    useEffect(() => {
        async function all() {

            let myData = await axios.get("https://dummyjson.com/products");
            setAllData(myData.data.products);
        }
        all();
    }, []);

    return (
        <>
            <h1>Api Testing</h1>

            <select>
                {allData.map(
                    (item) => (
                        <option key={item.id}>{item.title}</option>
                    )
                )}
            </select>

        </>
    );
};

export default DemmoTest;
