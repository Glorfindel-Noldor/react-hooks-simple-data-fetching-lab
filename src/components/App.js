import React, { useEffect, useState } from "react";
const API = "https://dog.ceo/api/breeds/image/random";

function App() {
  const [intel, setIntel] = useState({
    load: false,
    picture: "",
  });

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) =>
        setIntel({
          load: true,
          picture: data.message,
        })
      );
  }, []);

  return (
    <React.Fragment>
      {intel.load === false ? 
      (<p>Loading...</p>)
      : 
      (<div>
          <img src={intel.picture} alt="A Random Dog" />
        </div>)
      }
    </React.Fragment>
  )
}

export default App;
