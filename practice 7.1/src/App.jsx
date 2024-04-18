// import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
// import { Suspense, lazy } from "react";
// // import { Dashboard } from "./components/Dashboard";
// // using lazy loading
// // const Dashboard = React.lazy(() => import("./components/Dashboard"));
// //the above code is same as below code
// const Dashboard = lazy(() => import("./components/Dashboard"));
// const Landing = lazy(() => import("./components/Landing"));

// //it is client side routing in react
// function App() {
//   // to do routing we have to wrap everything inside browserrouter then inside Routes

//   return (
//     <div>
//       <BrowserRouter>
//         <Appbar />
//         <Routes>
//           <Route
//             path="/dashboard"
//             element={
//               <Suspense fallback={"loading..."}>
//                 <Dashboard />
//               </Suspense>
//               //suspense is another API that react provide you
//               //it is used when you have async function or components
//             }
//           />
//           {/* Understand:-
//           here we have two components and we have used lazy function for load when needed eventually.So here is the component is async in nature,that means it takes some times to load.So react provide suspense API which gives you a imp feature.i.e. when the component is not comes or yet to come it renders the fallback and after the component come it override the fallback */}
//           <Route
//             path="/"
//             element={
//               <Suspense fallback={"loading..."}>
//                 <Landing />
//               </Suspense>
//             }
//           />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// function Appbar() {
//   //the best way to do navigate from one route to another is following
//   const navigate = useNavigate();
//   return (
//     <div>
//       <button
//         onClick={() => {
//           navigate("/");
//         }}
//       >
//         Landing Page
//       </button>
//       <button
//         onClick={() => {
//           navigate("/dashboard");
//         }}
//       >
//         Dashboard
//       </button>
//     </div>
//   );
// }

// export default App;

//-------------------------------Propdrilling & context API------------------------------------------------------------
import { useContext, useState } from "react";
import { CountContext } from "./context";

function App() {
  const [count, setCount] = useState(0);
  //After creating context,wrap anyone that wants to use the teleported value inside a provider
  return (
    <div>
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
      {/* this Count component doesnot need setCount still it passing it as props beacuse the child component of it i.e Button component need setCount.similar type of thing is k/a prop drilling */}
    </div>
  );
}

function Count({ setCount }) {
  return (
    <div>
      <CountRenderer />
      <Button setCount={setCount} />
    </div>
  );
}

function CountRenderer() {
  const count = useContext(CountContext);
  return <div>{count}</div>;
}

function Button({ setCount }) {
  const count = useContext(CountContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
