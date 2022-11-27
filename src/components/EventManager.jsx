import React from "react";
import PropTypes from 'prop-types';
import Event from "./Event";

function EventManager({eventlist}) {

    const events = eventlist.map(event => <Event heihgt={eventlist.length > 3 ? 25 : 100/eventlist.length} event={event} />)
    let displayEvents = events;

    if (eventlist.length > 3){
        displayEvents = displayEvents.slice(0,3);
        displayEvents.push(<button style={{height: '25%', width: '100%', textAlign: 'center', backgroundColor:'#000000', color:'#FFFFFF'}}> +{eventlist.length - 3}</button>)
    }

    return (
        <div style={{width: "100%", display: "flex", flexDirection: "column", height: "100%"}}>
            {displayEvents}
        </div>
    );
}

EventManager.propTypes = {
    eventlist : PropTypes.arrayOf({
        event : PropTypes.shape({
            libEvent : PropTypes.string,
            heureDeb : PropTypes.string,
            heureFin : PropTypes.string
        })
    })
};

EventManager.defaultProps = {
    eventlist : [{
    libEvent : "Event",
        heureDeb : null,
        heureFin: null,
        desc_event : "Description",
        },
        {
            libEvent : "Event",
            heureDeb : null,
            heureFin: null,
            desc_event : "Descriptionvyiffiiiiiiiiiiivyiffiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiigivtfbgyhunijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjiiiiiiiiiiiiiiiiiiiiiii iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiigivtfbgyhunijjjjjjjjjjjjjjjjjjjjjjvyiffiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiigivtfbgyhunijjjjjjjjjj jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj jjjjjvyiffiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii iiiiiiiiiigivtfbgyhunijjjjjjjjjjjjjjjjjjjjjjj jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
        },
        {
            libEvent : "Event",
            heureDeb : null,
            heureFin: null,
            desc_event : "Description",
        },
        {
            libEvent : "Event",
            heureDeb : null,
            heureFin: null,
            desc_event : "Description",
        },
        {
            libEvent : "Event",
            heureDeb : null,
            heureFin: null,
            desc_event : "Descriptionvyiffiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiigivtfbgyhunijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
        }],
};

export default EventManager;