// create your App component here
import { useState } from "react";
import { useEffect } from "react";
function App() {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setLoaded(!loaded);
      });
  }, []);

  return (
    <div>
      {!loaded ? (
        <p>Loading...</p>
      ) : (
        <img src={data.message} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
