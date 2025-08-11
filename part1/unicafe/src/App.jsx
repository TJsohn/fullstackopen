import { useState } from 'react'

const Header = (props) => {
  return <h1>{props.title}</h1>
}

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>
}

const StatisticsLine = (props) => {
  return (
    <p>{props.text} {props.value}</p>
  )
}

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const average = all === 0 ? 0 : (props.good - props.bad) / all
  const positive = all === 0 ? 0 : (props.good / all) * 100

  return (
    <div>
      <h2>statistics</h2>
      <StatisticsLine text="good" value={props.good} />
      <StatisticsLine text="neutral" value={props.neutral} />
      <StatisticsLine text="bad" value={props.bad} />
      <StatisticsLine text="all" value={all} />
      <StatisticsLine text="average" value={average} />
      <StatisticsLine text="positive" value={positive + ' %'} />
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const title = 'give feedback'
  const all = good + neutral + bad

  return (
    <div>
      <Header title={title} />
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      {all === 0
        ? <div><h2>statistics</h2><p>No feedback given</p></div>
        : <Statistics good={good} neutral={neutral} bad={bad} all={all} />
      }
    </div>
  )
}

export default App