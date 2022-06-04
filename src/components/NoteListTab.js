import React from 'react';

function NoteListTab({ archiveTabHandler, notesTabHandler, activeTab }) {
  return (
    <div className="notes--btn__tab">
      <button onClick={notesTabHandler} className={`btn--tab ${activeTab === 'notes' ? 'tab--active' : ''}`}>Notes</button>
      <button onClick={archiveTabHandler} className={`btn--tab ${activeTab === 'archive' ? 'tab--active' : ''}`}>Archive</button>
    </div>
  );
}

export default NoteListTab;
