import { useState } from "react";
import "./App.css";
import Login from "./Login";
import EventForm from "./EventForm";
import EventList from "./EventList";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);

  auth.onAuthStateChanged((currentUser) => {
    console.log("Auth state on Vercel:", currentUser ? currentUser.email : "No user");
    setUser(currentUser);
  });

  const logout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      signOut(auth);
    }
  };

  return (
    <div className="App">
      <h1>Smart Community Hub</h1>
      {user ? (
        <>
          <p>Welcome, {user.email}</p>
          <EventForm />
          <EventList />
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;