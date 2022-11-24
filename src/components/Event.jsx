import React from "react";
import PropTypes from 'prop-types';

function Event({color, event, heihgt}) {
    return (
        <div style={{height: `${heihgt}%`,flexGrow: 1, borderRadius: "10px",width: "99%", backgroundColor: color, marginBottom: "0.5vh"}}>
            <div style={{height:"50%" ,width: "100%", justifyContent: "space-between", display: "flex"}}>
                <h2 style={{marginLeft: "0.5vw", alignSelf:"center"}}> {event.libEvent} </h2>
                <h5 style={{marginRight: "0.5vw"}}>{`${event.heureDeb} - ${event.heureFin}`}</h5>
            </div>
            <div  style={{width: "100%", height:"50%", margin: "0 0 0 0.5vw"}}>
                {event.desc_event}
            </div>
        </div>
    );
}

Event.propTypes = {
    color : PropTypes.string,
    height : PropTypes.number,
    event : PropTypes.shape({
        libEvent : PropTypes.string,
        heureDeb : PropTypes.string,
        heureFin : PropTypes.string,
        desc_event : PropTypes.string,
    })
};

Event.defaultProps = {
    height : 100,
    color : "#bb3e03",
    event : {
        libEvent : "Event",
        heureDeb : null,
        heureFin: null,
        desc_event : "Description",
    }

};

export default Event;