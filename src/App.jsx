import React from "react"
import Navbar from "./components/Navbar"
import Aboutus from "./components/Aboutus"

function App() {


  return (
    <>
      <nav className="ml-28 mt-16">
        <Navbar />
      </nav>

      <div className="float-right mr-[12%] mt-[4%]">
        <Aboutus />
      </div>

    </>
  )

}

export default App
