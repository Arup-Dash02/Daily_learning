import {
  RecoilRoot,
  useSetRecoilState,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}
function Count() {
  return (
    <div>
      <CountRenderer />
      <Button />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <div>{count}</div>
      <EvenCountRenderer />
    </div>
  );
}

function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector);
  return <div>{isEven ? "It is even" : "It is odd"}</div>;
  //here every time it will rerendered.so we have to use useMemo here to convert it into derived and it will depend on the count.that means whenever count changes it will rerender
  //But for better approach we should use selector provided by useRecoil
}

function Button() {
  // const [count, setCount] = useRecoilState(countAtom);
  const setCount = useSetRecoilState(countAtom);
  console.log("Button Rerendered");
  //Buttons are rerendering unnecessarily.To tackle this the following approach can be used
  //we know setCount can be defined in 2 ways
  // 1.setCount(count+1)
  // 2.setCount(count => count+1)
  //so here we dont need actually count

  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
