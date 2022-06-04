import React from 'react';

import { FaList } from 'react-icons/fa';

function Empty() {
  return (
    <div className="note-app__empty-list">
      <div className="note-app__empty-list-icon"><FaList /></div>
      <h2>Note Not Found</h2>
    </div>
  );
}

export default Empty;
