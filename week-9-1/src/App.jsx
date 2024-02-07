import { useEffect, useState } from 'react';

function useDebounce(value, timeout) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);

    return () => clearTimeout(timer); // Clear timeout on component unmount or value change
  }, [value, timeout]);

  return debouncedValue; // Return the debounced value
}

function App() {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 500);

  return (
    <>
      <p>Debounced value is {debouncedValue}</p>
      <input type='text' value={value} onChange={e => setValue(e.target.value)} />
    </>
  );
}

export default App;

