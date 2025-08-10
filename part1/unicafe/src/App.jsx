import { useState } from 'react'

const Header = (props) => {
  console.log(props)
  return <h1>{props.title}</h1>
}

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const average = all === 0 ? 0 : (props.good - props.bad) / all
  const positive = all === 0 ? 0 : (props.good / all) * 100

  return (
    <div>
      <h2>statistics</h2>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const title = 'give feedback'

  return (
    <div>
      <Header title={title} />
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} all={good + neutral + bad} average={((good - bad) / (good + neutral + bad))} positive={((good / (good + neutral + bad)) * 100)} />
    </div>
  )
}

export default App