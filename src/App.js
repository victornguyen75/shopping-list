import React, { useState } from 'react';
import styled from 'styled-components';

function App() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState('');
  const [completed, setCompleted] = useState([]);

  const addItem = e => {
    e.preventDefault();
    let newList = [...list];

    newList.push(
      {
        id: 1 + Math.random(),
        name: item,
        category: '',
        quantity: '',
        price: '',
      }
    );

    setList(newList);
    setItem('');
  }

  const moveItemToCompleted = id => {
    let itemIndex = list.findIndex(item => {
      return item.id === id;
    });

    let newCompleted = [...completed];
    newCompleted.push({ 
        id: list[itemIndex].id,
        name: list[itemIndex].name,
        category: list[itemIndex].category,
        quantity: list[itemIndex].quantity,
        price: list[itemIndex].price,
    });

    setCompleted(newCompleted);

    let newList = list.filter(item => {
      return item.id !== id;
    });

    setList(newList);
  }

  const moveItemToPending = id => {
    let itemIndex = completed.findIndex(item => {
      return item.id === id;
    });

    let newList = [...list];
    newList.push({ 
      id: completed[itemIndex].id,
      name: completed[itemIndex].name,
      category: completed[itemIndex].category,
      quantity: completed[itemIndex].quantity,
      price: completed[itemIndex].price,
  });

    setList(newList);

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
      {list.map(item => {
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