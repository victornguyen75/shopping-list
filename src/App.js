import React, { useState } from 'react';
import styled from 'styled-components';

function App() {
  const [item, setItem] = useState('');
  const [pending, setPending] = useState([]);
  const [completed, setCompleted] = useState([]);

  const addItem = e => {
    e.preventDefault();
    let newPending = [...pending];

    newPending.push(
      {
        id: 1 + Math.random(),
        name: item,
        category: '',
        quantity: '',
        price: '',
      }
    );

    setPending(newPending);
    setItem('');
  }

  const moveItemToCompleted = id => {
    let itemIndex = pending.findIndex(item => {
      return item.id === id;
    });

    let newCompleted = [...completed];
    newCompleted.push({ 
        id: pending[itemIndex].id,
        name: pending[itemIndex].name,
        category: pending[itemIndex].category,
        quantity: pending[itemIndex].quantity,
        price: pending[itemIndex].price,
    });

    setCompleted(newCompleted);

    let newPending = pending.filter(item => {
      return item.id !== id;
    });

    setPending(newPending);
  }

  const moveItemToPending = id => {
    let itemIndex = completed.findIndex(item => {
      return item.id === id;
    });

    let newPending = [...pending];
    newPending.push({ 
      id: completed[itemIndex].id,
      name: completed[itemIndex].name,
      category: completed[itemIndex].category,
      quantity: completed[itemIndex].quantity,
      price: completed[itemIndex].price,
  });

    setPending(newPending);

    let newCompleted = completed.filter(item => {
      return item.id !== id;
    });

    setCompleted(newCompleted);
  }

  return (<>
  <h1>Shopping List Application</h1>
    <form onSubmit={addItem}>
      <input value={item} onChange={e => setItem(e.target.value)} placeholder="Add a new item"/>
      <button type="submit" disabled={!item}>Add</button>
    </form>
    <h2>Pending Items</h2>
    <ul>
      {pending.map(item => {
        return (
          <li key={item.id} onClick={() => moveItemToCompleted(item.id)}>
            {item.name}
          </li>
        );
      })}
    </ul>
    <h2>Completed Items</h2>
    <ul>
      {completed.map(item => {
        return (
          <li key={item.id} onClick={() => moveItemToPending(item.id)}>
            {item.name}
          </li>
        );
      })}
    </ul>
  </>);
}

export default App;