import React from 'react';
import styled from 'styled-components';

function App() {
  return (<>
    <AddItem />
  </>);
}

export default App;

function AddItem() {
  return (
    <form>
      <input />
      <button>Add item</button>
    </form>
  );
}