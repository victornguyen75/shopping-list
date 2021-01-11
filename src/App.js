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
        item,
        category: '',
        quantity: '',
        price: '',
      }
    );

    setList(newList);
    setItem('');
  }

  return (<>
    <form onSubmit={addItem}>
      <input value={item} onChange={e => setItem(e.target.value)} placeholder="Add a new item"/>
      <button type="submit" disabled={!item}>Add</button>
    </form>
  </>);
}

export default App;