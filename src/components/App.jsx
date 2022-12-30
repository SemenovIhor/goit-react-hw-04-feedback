import { useState } from "react";
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";

export const App = () => {

  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const onLeaveFeedback = (e) => {
    if (e === 'good') {
      setGood(prevState => prevState + 1);
    }

    if (e === 'bad') {
      setBad(prevState => prevState + 1);
    }

    if (e === 'neutral') {
      setNeutral(prevState => prevState + 1);
    }
  }

  const total = good+bad+neutral;
  const totalPro = Math.round(good/(good+bad+neutral)*100)

  return (
    <>
      <Section title="Please leave Feedback">
        <FeedbackOptions
          onLeaveFeedback = {onLeaveFeedback}
          options = {Object.keys({good, bad, neutral})}
        />
      </Section>

      <Section title="Statistics">
        {total === 0 ? (
            <p>There is no feedback</p>
        ) : (
            <Statistics
              good = {good}
              neutral = {neutral}
              bad = {bad}
              total = {total}
              positivePercentage = {totalPro}          
            />
        )}
      </Section>  
    </>
  );
};

