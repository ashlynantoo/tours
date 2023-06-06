import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  function removeTour(id) {
    setTours(
      tours.filter((tour) => {
        return tour.id !== id;
      })
    );
  }

  async function fetchTours() {
    try {
      setIsLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setTours(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("Error: " + error);
    }
  }

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <main>
      {isLoading ? (
        <Loading />
      ) : tours.length > 0 ? (
        <Tours tours={tours} removeTour={removeTour} />
      ) : (
        <div className="title">
          <h2>No tours left</h2>
          <button
            className="btn"
            onClick={() => {
              fetchTours();
            }}
          >
            Refresh
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
