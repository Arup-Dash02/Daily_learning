import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 104,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});

export const messageAtom = atom({
  key: "messageAtom",
  default: 12,
});

export const notificationAtom = atom({
  key: "notificationAtom",
  default: 0,
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const networkAtomCount = get(networkAtom);
    const jobsAtomCount = get(jobsAtom);
    const messageAtomCount = get(messageAtom);
    const notificationAtomCount = get(notificationAtom);

    return (
      networkAtomCount +
      jobsAtomCount +
      messageAtomCount +
      notificationAtomCount
    );
    //this is exactly work as useMemo state. That means when these 4 changes it will change. Basically it depends on these 4.
  },
});
//we know that selector is derived or depends on other atoms
