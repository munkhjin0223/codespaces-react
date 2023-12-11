import { useState, useCallback, useMemo } from 'react';
import FinishBtn from './FinishBtn';

export default function CounterWrapper() {
  const [counter, setCounter] = useState(0);
  const [x, setX] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);
  }

  function incrementX() {
    setX(x + 1);
  }

  const finish = useCallback(function() {
    setCounter(0);
  }, [])

  const result = useMemo(() => {
    console.log('calculating ...')

    return x * 10000;
  }, [x])

  return (
    <>
      <h2>{counter}</h2>
      <button className='todo-btn' onClick={incrementCounter}>
        1-ээр нэмэгдүүлэх
      </button>
      <h2>{result}</h2>
      <button className='todo-btn' onClick={incrementX}>
        X 1-ээр нэмэгдүүлэх
      </button>
      <br />
      <br />
      <FinishBtn onClick={finish} />
    </>
  );
}
