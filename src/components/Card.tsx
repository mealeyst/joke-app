import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { color } from '../theme/color';
import { spacing } from '../theme/spacing';
import { Button } from './Button';

interface Joke {
  id: number
  setup: string
  type: string
  punchline: string
}

const fadeTextIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const Card = styled(({className}) => {
  const [joke, setJoke] = useState<Joke | null>(null)
  const [showPunchline, setShowPunchline] = useState(false);
  const fetchJoke = async () => {
    const response = await fetch("https://karljoke.herokuapp.com/jokes/random", {
      method: 'GET',
    })
    const result = await response.json()
    setJoke(result)
  }
  useEffect(() => {
    fetchJoke()
  }, [])
  return (
    <div className={className}>
      <header>
        <Button onClick={() => fetchJoke()}>Get a New Joke</Button>
        <a href="https://karljoke.herokuapp.com/" rel="noreferrer" target="_blank">View API docs</a>
      </header>
      <div className="joke-region">{joke && <span className="joke">{joke.setup}</span>}</div>
      <div className="punchline-region">{showPunchline && <span className="punchline">{joke?.punchline}</span>}</div>
      <footer>
        <Button onClick={() => setShowPunchline(!showPunchline)}>
          {showPunchline ? 'Hide Punchline' : 'Show Punchline'}
        </Button>
      </footer>
    </div>
  )
})`
  flex: 1;
  min-height: 80%;
  margin-left: ${spacing(10)};
  margin-right: ${spacing(10)};
  border-radius: ${spacing(10)};
  padding: ${spacing(10)};
  backdrop-filter: blur(10px);
  border: ${color('primary.900')} solid ${spacing(1)};
  display: flex;
  flex-direction: column;
  background-color: ${color('grey.50', 0.4)};
  .joke-region, .punchline-region {
    flex: 1;
  }
  footer {
    display: flex;
    justify-content: center;
  }
  header {
    display: flex;
    justify-content: space-between;
    margin: ${spacing(6, 0)};
  }
  .joke, .punchline {
    font-size: ${spacing(18)};
    animation: ${fadeTextIn} 0.5s ease-in-out;
  }
`