function App() {
  return (
    // <div>
    //   <CardWrapper innerComponent={<TextComponent />} />
    //   {/* Int his way we can pass a component to another component */}
    //   <CardWrapper innerComponent={<TextComponent2 />} />
    // </div>

    // the above code is not a cleaner syntax to do that.We should always try to use the below syntax
    <CardWrapper>hi there</CardWrapper>
    //Int his way we should actually create wrapper in the real world
  );
}

function CardWrapper({ children }) {
  //here children have everything that are written insde the CardWrapper
  return (
    <div style={{ border: "2px solid black", padding: 20 }}>{children}</div>
  );
}

// function TextComponent() {
//   return <div>hi there</div>;
// }

// function TextComponent2() {
//   return <div>hi there22222222</div>;
// }

export default App;
