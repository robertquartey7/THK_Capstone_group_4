import React, { useEffect, useState } from 'react' 
import './History.css'

function History(key, defaultValue) {
  
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key, defaultValue))
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];

}

export default History;