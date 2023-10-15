import React, { useState } from 'react';

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setExpression(expression + value);
  };

  const handleClear = () => {
    setExpression('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(expression).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2>Calculator</h2>
      <div style={{ marginBottom: '10px' }}>{expression}</div>
      <div style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' }}>{result}</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridGap: '10px' }}>
        {[1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', 'C', 0, '=', '/'].map((item, index) => (
          <button key={index} onClick={() => (item === 'C' ? handleClear() : item === '=' ? handleCalculate() : handleButtonClick(item))}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
