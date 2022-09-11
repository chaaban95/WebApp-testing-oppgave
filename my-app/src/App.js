import { useState } from "react";

function App() {
  const [city, setCity] = useState("Halden");

  return (
    <div>
      <h1>My favorite city is {city}!</h1>
      <button onClick={() => setCity()}>Don't click</button>
    </div>
  );
}

export default App;
