import { atom, selector } from "recoil";

export const countAtom = atom({
  key: "countAtom",
  default: 0,
});

export const evenSelector = selector({
  key: "evenSelector",
  // get: (props) => {
  //   const count = props.get(countAtom);
  //   return count % 2;
  // },
  //the above code is exactly same as the below code.
  //But below code is more recommended
  get: ({ get }) => {
    const count = get(countAtom);
    return count % 2;
  },
});
