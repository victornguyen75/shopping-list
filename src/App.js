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

    newPending.sort(alphabetize);
    setPending(newPending);
    setItem('');
  }

  const moveItem = (id, sourceList, destinationList, actionType) => {
    let itemIndex = sourceList.findIndex(item => {
      return item.id === id;
    });

    let newSourceList = sourceList.filter(item => {
      return item.id !== id;
    });

    let newDestinationList = [...destinationList];
    newDestinationList.push({ 
      id: sourceList[itemIndex].id,
      name: sourceList[itemIndex].name,
      category: sourceList[itemIndex].category,
      quantity: sourceList[itemIndex].quantity,
      price: sourceList[itemIndex].price,
    });

    newSourceList.sort(alphabetize);
    newDestinationList.sort(alphabetize);

    if (actionType === "toCompleted") {
      setPending(newSourceList);
      setCompleted(newDestinationList);
    } else {
      setPending(newDestinationList);
      setCompleted(newSourceList);
    }
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
          <li key={item.id} onClick={() => moveItem(item.id, pending, completed, "toCompleted")}>
            {item.name}
          </li>
        );
      })}
    </ul>
    <h2>Completed Items</h2>
    <ul>
      {completed.map(item => {
        return (
          <li key={item.id} onClick={() => moveItem(item.id, completed, pending, "toPending")}>
            {item.name}
          </li>
        );
      })}
    </ul>
  </>);
}

export default App;

function alphabetize(item1, item2) {
  return item1.name > item2.name ? 1 : -1;
}