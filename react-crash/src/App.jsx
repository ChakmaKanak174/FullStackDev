import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobListings />

      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Jobs
        </a>
      </section>
    </>
  );
};

export default App;

// import React from 'react'

// const App = () => {

//   const name = 'kanak'

//   const names = ['kanak', 'tukro', 'manish', 'sarah']

//   const style = {
//     color: 'red',
//     fontSize: '24px'
//   }

//   return (
//     <>
//       <div classNameName='text-5xl'>
//         <p style={style}>Hello {name}</p>
//       </div>

//       <ul>
//         {names.map((name, index) =>
//           (<li key={index}> {name}</li>)
//         ) }
//       </ul>

//     </>
//   )
// }

// export default App
