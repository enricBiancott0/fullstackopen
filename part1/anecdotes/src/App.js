import { useState } from 'react'

const Button = ({text, onClick}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  // votes array == anecdotes votes
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  // max value
  const [max, setMax] = useState(0)
  // max index in anecodtes
  const [maxIndex, setMaxIndex] = useState(0)

  const vote = () => {
    // add vote
    const votes_cp = [...votes]
    votes_cp[selected] += 1
    // update max votes
    if (votes_cp[selected] > max) {
      setMax(votes_cp[selected])
      setMaxIndex(selected)
    }
    // set state
    setVotes(votes_cp)
  }
  
  // generate anecdote randomically 
  const nextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      has {votes[selected]} votes
      <br />
      <Button onClick={vote} text="vote" />
      <Button onClick={nextAnecdote} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      {anecdotes[maxIndex]}
      <br />
      has {votes[maxIndex]} votes
    </div>
  )
}

export default App