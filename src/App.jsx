import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [reactions, setReactions] = useState(() => {
    const savedReactions = localStorage.getItem('reactions');
    return savedReactions ? JSON.parse(savedReactions) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('reactions', JSON.stringify(reactions));
  }, [reactions]);

  const reactionController = {
    updateGood: () => {
      setReactions({
        ...reactions,
        good: reactions.good + 1,
      });
    },
    updateNeutral: () => {
      setReactions({
        ...reactions,
        neutral: reactions.neutral + 1,
      });
    },
    updateBad: () => {
      setReactions({
        ...reactions,
        bad: reactions.bad + 1,
      });
    },
    clearAllReactions: () => {
      setReactions({
        good: 0,
        neutral: 0,
        bad: 0,
      });
    },
  };

  const totalCount = reactions.good + reactions.neutral + reactions.bad;

  return (
    <>
      <Description
        title="Sip Happens Café"
        subtitle="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options reactions={reactions} reactionController={reactionController} />

      {totalCount ? <Feedback reactions={reactions} /> : <Notification />}
    </>
  );
}

export default App;
