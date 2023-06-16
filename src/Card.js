import React from "react";

const Card = (props) => {
    const { doInc, doDec, count } = props;
    return (
        <>
            <div className="main">
                <div className="counter-box">
                    <h1>{count}</h1>
                    <button className="incre" onClick={doInc}>Incre</button>
                    <button className="decre" onClick={doDec}>Decre</button>
                </div>
            </div>
        </>
    );
}
export default Card;