import React from 'react';
import NoteItem from './NoteItem';
import Empty from './Empty';

function NoteList({
  notes, onDelete, activeTab, archiveClick, input,
}) {
  const searchData = notes.filter((el) => {
    if (input === '') {
      return el;
    }
    return el.title.toLowerCase().includes(input);
  });

  const notesItem = (data) => {
    const noteItem = data.filter((note) => !note.archived);

    const result = noteItem.map((item) => (
      <NoteItem key={item.id} {...item} id={item.id} onDelete={onDelete} archiveClick={archiveClick} />
    ));

    if (noteItem.length >= 1) {
      return result;
    }
    return <Empty />;
  };

  const archivesItem = (data) => {
    const archiveItem = data.filter((note) => note.archived);

    const result = archiveItem.map((item) => (
      <NoteItem key={item.id} {...item} id={item.id} onDelete={onDelete} archiveClick={archiveClick} />
    ));

    if (archiveItem.length >= 1) {
      return result;
    }
    return <Empty />;
  };

  return (
    <div className="notes-list__wrapper">
      {/* {activeTab === 'notes' && notesItem([...notes])}
        {activeTab === 'archive' && archiveItem([...notes])} */}
      {activeTab === 'notes' && notesItem([...searchData])}
      {activeTab === 'archive' && archivesItem([...searchData])}
    </div>
  );
}

export default NoteList;
