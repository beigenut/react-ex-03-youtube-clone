import React, { useState } from 'react';
import ResourceList from './ResourceList.js';

const App = () => {
  const [resourceName, setResourceName] = useState('posts');
  // const arr = [1, 2]
  // const [first, second] = arr 
  // console.log(first) = 1
  // console.log(arr[1]) = 2

  return (
    <div className="App">
      <button onClick={() => setResourceName('posts')}>Posts</button>
      <button onClick={() => setResourceName('todos')}>Todos</button>
      <ResourceList resourceName={resourceName} />
    </div>
  );
}

export default App;
