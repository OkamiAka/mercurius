import { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [api, setApi] = useState([]);
  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_URL)
      .then((res) => res.json())
      .then((res) => setApi(res));
  }, []);
  console.log(api);
  return <div className="App">test</div>;
}

export default App;
