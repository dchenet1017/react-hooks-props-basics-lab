import React from "react";

function Home(props) {
  console.log('Home')
  console.log(props)
  return (
    <div id="home">
      <h1 style={{ color: 'props.corn }}>
        {prop.name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
