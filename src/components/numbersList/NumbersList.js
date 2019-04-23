const getNumbers = (from, to, isOdd) => {
  const arr = [];

  for (let i = from; i <= to; i++) {
    arr.push(i);
  }

  return (
    <ul>
      {arr
        .filter(item => ((isOdd) ? item % 2 : !(item % 2)))
        .map(item => <li key={Math.random()}>{item}</li>)
      }
    </ul>
  );
};

export const NumbersList = ({ from = 0, to = 1, odd = true }) => getNumbers(from, to, odd);
