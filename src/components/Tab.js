import React, { useState } from "react";
import data from '../data/data.json';
import './Tab.css';
import TabContent from "./TabContent";
function Tab() {
    const [tab, setTab] = useState(2015);
    return(
        <div className="tab-container">
            <ul>    
                {data.map((data, i)=>{
                    return<li className="tab-li" key={i} onClick={() => {setTab(data.year)}}>{data.year}</li>
                })}
            </ul>
            <br/>
            <TabContent tab={tab}/>
        </div>
    )
}
export default Tab;