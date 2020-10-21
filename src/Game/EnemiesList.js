import React from 'react';
import './EnemiesList.css';

function EnemiesList(props) {
    return (
        <div className="list">
            {props.amounts?props.amounts.slice(1,4).map((amount,index)=>(
                <div key={index} style={{display:"flex", flexDirection:"column"}}>
                    <p>Amount:{amount}</p>

                    <p>Bet:{props.bets?props.bets[index+1]:0}</p>
                </div>

            )):<p>penis</p>}
        </div>
    );
}
export default EnemiesList;
