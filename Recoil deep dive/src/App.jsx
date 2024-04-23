import { useMemo, useState } from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import { jobsAtom, messageAtom, networkAtom, notificationAtom, totalNotificationSelector } from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  // const [networkCount, setNetworkCount] = useState(0);
  // const [jobsCount, setJobsCount] = useState(0);
  // const [messageCount, setMessageCount] = useState(0);
  // const [notificationCount, setNotificationCount] = useState(0);
  const networkCount = useRecoilValue(networkAtom);
  const jobCount = useRecoilValue(jobsAtom);
  const messageCount = useRecoilValue(messageAtom);
  const notificationCount = useRecoilValue(notificationAtom);

  //1 way of doing this
  // const totalNotificationCount = useMemo(() => {
  //   return networkCount + jobCount + messageCount + notificationCount;
  // }, [networkCount, jobCount, messageCount, notificationCount]);

  //Another wat of doing this is by using selector
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <div>
      <button>Home</button>
      <button>
        My network(
        {networkCount >= 100 ? "99+" : networkCount})
      </button>
      <button>Jobs({jobCount})</button>
      <button>Messaging({messageCount})</button>
      <button>Notifications({notificationCount})</button>
      <button>Me({totalNotificationCount})</button>
    </div>
  );
}

export default App;
