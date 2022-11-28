import React from "react";
import PropTypes from 'prop-types';

function Event({color, event, heihgt}) {
    return (
        <button style={{height: `${heihgt}%`,flexGrow: 1, borderRadius: "10px",width: "100%", backgroundColor: color, marginBottom: "0.6%"}}>
            <div style={{ fontSize:"1em" ,height:"25%", width: "100%", justifyContent: "space-between", display: "flex"}}>
                <span style={{marginLeft: "0.5vw", alignSelf:"center"}}> {event.libEvent} </span>
            </div>
            <div  style={{width: "100%", height:"75%", margin: "0.4vh 0 0 0.5vw", overflow: "hidden", textAlign:"start", fontSize:"0.85em"}}>
                {event.desc_event}
            </div>
        </button>
    );
}

Event.propTypes = {
    color : PropTypes.string,
    height : PropTypes.number,
    event : PropTypes.shape({
        libEvent : PropTypes.string,
        desc_event : PropTypes.string,
    })
};

Event.defaultProps = {
    height : 100,
    color : "#bb3e03",
    event : {
        libEvent : "Event",
        desc_event : "Description",
    }

};

export default Event;