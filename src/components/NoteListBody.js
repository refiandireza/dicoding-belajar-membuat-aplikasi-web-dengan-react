import React from 'react';
// import { getInitialData } from '../utils';
import NoteListTab from './NoteListTab';
import NoteList from './NoteList';
import SearchBar from './SearchBar';

class NoteListBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'notes',

    };

    this.archiveTabHandler = this.archiveTabHandler.bind(this);
    this.notesTabHandler = this.notesTabHandler.bind(this);
  }

  archiveTabHandler() {
    this.setState({ activeTab: 'archive' });
  }

  notesTabHandler() {
    this.setState({ activeTab: 'notes' });
  }

  render() {
    return (
      <div className="notes-list__body">
        <SearchBar onSearchHandler={this.props.onSearchHandler} />

        <NoteListTab archiveTabHandler={this.archiveTabHandler} notesTabHandler={this.notesTabHandler} activeTab={this.state.activeTab} />

        <NoteList
          activeTab={this.state.activeTab}
          notes={this.props.data}
          input={this.props.input}
          onDelete={this.props.onDelete}
          archiveClick={this.props.archiveClick}
        />
      </div>

    );
  }
}

export default NoteListBody;
