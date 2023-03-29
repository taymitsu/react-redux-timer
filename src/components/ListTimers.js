import React from 'react';
import { useSelector } from 'react-redux';

export default function ListTimers() {
  const timers = useSelector(state => state.timers.value)
  
  return(
    <div>
      {timers.map((timer, i) => {
        return (
          <div>
            <h2>{timer.name}</h2>
            <h1>{timer.timer}</h1>
            <button>Start</button>
          </div>
        )
      })}
    </div>
  )
}