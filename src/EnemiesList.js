import React from 'react';
import './EnemiesList.css';
function EnemiesList(props) {
    return (
        <div className="list">
            {props.counters?props.counters.slice(1,4).map((counter,index)=>(
                <div key={index}>
                    <p>{counter.count}</p>
                </div>
            )):<p>penis</p>}
        </div>
    );
}
export default EnemiesList;
