import React, { useEffect, useState } from "react";
import { getEvents, joinEvent, leaveEvent } from "../../managers/EventManager.js";

export const EventList = (props) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then((data) => setEvents(data));
  }, []);

  const handleJoinEvent = (eventId) => {
    joinEvent(eventId).then(() => {
      const updatedEvents = events.map((event) => {
        if (event.id === eventId) {
          return { ...event, joined: true };
        }
        return event;
      });
      setEvents(updatedEvents);
    });
  };

  const handleLeaveEvent = (eventId) => {
    leaveEvent(eventId).then(() => {
      const updatedEvents = events.map((event) => {
        if (event.id === eventId) {
          return { ...event, joined: false };
        }
        return event;
      });
      setEvents(updatedEvents);
    });
  };

  return (
    <article className="events">
      {events.map((event) => {
        return (
          <section key={`event--${event.id}`} className="event">
            <div className="event__name">
              {event.name} by {event?.organizer?.full_name}
            </div>
            <div className="event__date">{event.date}</div>
            <div className="event__location">
              {event.location} at {event.location}
            </div>
            <div className="event__game">{event.game.name}</div>
            {event.joined ? (
              <button onClick={() => handleLeaveEvent(event.id)}>Leave</button>
            ) : (
              <button onClick={() => handleJoinEvent(event.id)}>Join</button>
            )}
          </section>
        );
      })}
    </article>
  );
};
