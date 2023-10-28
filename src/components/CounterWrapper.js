import { useRef, useState } from 'react';

export default function CounterWrapper() {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(0);

  function incrementCounter() {
    // setCounter(counter + 1);
    counterRef.current = counterRef.current + 1;
  }

  function finish() {
    setCounter(counterRef.current);
  }

  return (
    <>
      <h2>{counter}</h2>
      <button className='todo-btn' onClick={incrementCounter}>
        1-ээр нэмэгдүүлэх
      </button>
      <br />
      <br />
      <button className='todo-btn' onClick={finish}>
        Дуусгах
      </button>
    </>
  );
}
