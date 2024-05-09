import { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://projects-api-server.onrender.com/tours";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    setTours(
      tours.filter((tour) => {
        return tour.id !== id;
      })
    );
  };

  const fetchTours = async () => {
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
  };

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
};

export default App;
