import React from 'react';
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Content from "./components/Content/Content";
import './App.css'




function App() {
  return (
      <div className="container">
        <Header/>
          <Banner/>
          <Content/>
      </div>

  )
}
export default App;
