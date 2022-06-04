import React from 'react';
import autoBindReact from 'auto-bind/react';
import Header from './components/Header';
import NoteInput from './components/NoteInput';
import NoteListBody from './components/NoteListBody';
import ThemeButton from './components/ThemeButton';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import { getInitialData } from './utils';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      query: '',
    };

    autoBindReact(this);
  }

  onArchiveHandler(id) {
    this.setState((prevState) => ({
      notes: prevState.notes.map((el) => (el.id === id ? { ...el, archived: !el.archived } : el)),
    }));
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => ({
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          title,
          body,
          archived: false,
          createdAt: new Date(),
        },
      ],
    }));
  }

  onSearchHandler(event) {
    const inputValue = event.target.value;
    const lowerCase = inputValue.toLowerCase();
    this.setState({
      query: lowerCase,
    });
  }

  render() {
    return (
      <>
        <Header />
        <div className="note-app__body">
          <NoteInput
            addNote={this.onAddNoteHandler}
            onSearchHandler={this.onSearchHandler}
          />
          <NoteListBody
            data={this.state.notes}
            input={this.state.query}
            onDelete={this.onDeleteHandler}
            archiveClick={this.onArchiveHandler}
            onSearchHandler={this.onSearchHandler}
          />
        </div>
        <ScrollTop />
        <ThemeButton />
        <Footer />
      </>
    );
  }
}

export default App;
