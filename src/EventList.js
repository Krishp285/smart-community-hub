import { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { auth } from "./firebase";

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "events"), (snapshot) => {
      const eventData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEvents(eventData);
    });
    return () => unsubscribe();
  }, []);

  const deleteEvent = async (id) => {
    if (window.confirm("Delete this event?")) {
      await deleteDoc(doc(db, "events", id));
    }
  };

  return (
    <div>
      <h3>Community Events</h3>
      {events.length === 0 ? (
        <p>No events yet.</p>
      ) : (
        events.map((event) => (
          <div key={event.id} className="event-item">
            <h4>{event.title}</h4>
            <p>{event.description}</p>
            <p>{event.date}</p>
            {auth.currentUser && event.userId === auth.currentUser.uid && (
              <button onClick={() => deleteEvent(event.id)}>Delete</button>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default EventList;