//This file code i have already uploaded to the github.To see this code go to practice week 6.2 file
//It is used to practice and revise all the concepts I have learned till now in react
//lets create a simple react app

// import { useEffect, useMemo, useState, memo, useCallback } from "react";

// function App() {
//   const [exchange1Data, setExchange1Data] = useState({});
//   const [exchange2Data, setExchange2Data] = useState({});
//   const [bankData, setBankData] = useState({});

//   useEffect(() => {
//     setExchange1Data({
//       returns: 100,
//     });
//   }, []);

//   useEffect(() => {
//     setExchange2Data({
//       returns: 100,
//     });
//   }, []);

//   useEffect(() => {
//     setTimeout(() => {
//       setBankData({
//         income: 100,
//       });
//     }, 3000);
//   });

//   // const cryptoReturns = useMemo(() => {
//   //   exchange1Data.returns + exchange2Data.returns;
//   // }, [exchange1Data, exchange2Data]);
//   const calculateCryptoReturns = useCallback(
//     function () {
//       return exchange1Data.returns + exchange2Data.retruns;
//     },
//     [exchange1Data, exchange2Data]
//   );
//   //useCallback is not about minimizing the amount of code that is run
//   //useCallback is about not rendering a child component,if the function hasn't/doesn't need to change across renders

//   // const incomeTax = (calculateCryptoReturns() + bankData.income) * 0.3;

//   return (
//     <div>
//       <CryptoGainsCalculator calculateCryptoReturns={calculateCryptoReturns} />
//       <Dummy></Dummy>
//     </div>
//   );
// }
//The difference between useState and useMemo is, useState does not returns anything,but useMemo can be used to perform various operations inside it and then return the value to store somewhere

//memo and useMemo are two differen things.
//memo lets you skip re-rendering a component when its props are unchanged

// const Dummy = memo(function () {
//   return <div>Hii</div>;
// });

//the below code should not rerender because we used memo here.But it rerendered because the functions are different even their bodys remain same
//as it takes function as input so react thinks the value is changed so it rerendered
//so this is where useCallback comes into picture
//it says if the function is not changed please wrap it inside useCallback give me the dippendecies array and the values by whichj the change in those value i know that the function has changed

// const CryptoGainsCalculator = memo(function ({ calculateCryptoReturns }) {
//   console.log("crypto child rerenders");
//   return <div>Your crypto returns are {calculateCryptoReturns}</div>;
// });

// export default App;

//---------------------------understanding useRef---------------------------------------
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

function App() {
  const [incomeTax, setIncomeTax] = useState(20000);
  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      divRef.current.innerHTML = 10;
      //by divRef.current you can get access to what you want to access
    }, 5000);
  });
  return (
    <div>
      hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div>
    </div>
  );
}

export default App;
