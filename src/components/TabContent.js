import React from "react";
import data from '../data/data.json';
import './TabContent.css';
function TabContent(props) {
    const{tab} = props;

    const yearData = data.filter(i=>{
        return i.year == tab;
    })
    const album = yearData[0].album;

    return(
        <div className="content-container">

            {album.map((data, i)=>{
                    return(
                            <li className="album-li">
                                <a href={data.mv} target='_blank'>
                                    <img className="content-img" src={data.image}></img>
                                </a>
                                <p>{data.앨범명}</p>
                                <p>{data.제목}</p>
                                <p className="album-date">{data.date}</p>
                            </li>
                    )
            })}
        </div>
    )
}

export default TabContent;