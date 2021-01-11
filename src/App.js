import React, { useState } from 'react';
import styled from 'styled-components';

function App() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState('');

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
          <li key={item.id}>
            {item.name}
          </li>
        );
      })}
    </ul>
    <h2>Completed Items</h2>
  </>);
}

export default App;