import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<HomePage />} />)
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

{
  /* <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </> */
}

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
