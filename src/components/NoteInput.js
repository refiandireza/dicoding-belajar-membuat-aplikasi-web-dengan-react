import React from 'react';
import { RiEraserLine } from 'react-icons/ri';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasTitleError: false,
      hasBodyError: false,
      title: '',
      body: '',
      count: 50,
      isSuccess: false,
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitHandle = this.onSubmitHandle.bind(this);
    this.onResetHandler = this.onResetHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    const maxLength = 50;
    const inputValue = event.target.value.slice(0, maxLength);
    const inputLength = inputValue.length;
    const isEmpty = inputValue === '';
    this.setState((prevState) => ({
      ...prevState,
      hasTitleError: isEmpty,
      title: inputValue,
      count: maxLength - inputLength,
    }));
  }

  onBodyChangeHandler(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue === '';
    this.setState((prevState) => ({
      ...prevState,
      hasBodyError: isEmpty,
      body: inputValue,
    }));
  }

  onSubmitHandle(event) {
    event.preventDefault();
    if (this.state.title === '' || this.state.body === '') {
      this.setState({
        hasTitleError: true,
        hasBodyError: true,
      });
    } else {
      this.props.addNote(this.state);
      this.setState({
        title: '',
        body: '',
        count: 50,
        isSuccess: true,
      });
    }
  }

  onResetHandler() {
    this.setState({
      title: '',
      body: '',
      count: 50,
    });
  }

  render() {
    let errorTitleText;
    if (this.state.hasTitleError) {
      errorTitleText = (
        <p className="note-title__error--message">Please Input Your Note Title</p>
      );
    }

    let errorBodyText;
    if (this.state.hasBodyError) {
      errorBodyText = (
        <p className="note-body__error--message">Please Input Your Note Description</p>
      );
    }

    let successMessage;
    if (this.state.isSuccess) {
      successMessage = (
        <p className="note-success--message">
          Data has been updated.
        </p>
      );
    }

    return (
      <div className="note-input">
        <h2>New Notes</h2>
        <form onSubmit={this.onSubmitHandle}>
          <input type="text" placeholder="Title..." className="note-input__title" onChange={this.onTitleChangeHandler} value={this.state.title} />

          {errorTitleText}
          <p>
            Characters Left:
            {' '}
            <b>{this.state.count}</b>
          </p>

          <textarea type="text" placeholder="Take a note..." className="note-input__body" value={this.state.body} onChange={this.onBodyChangeHandler} />
          {errorBodyText || successMessage}

          <div className="note-btn-input__container">
            <button type="submit" className="note-btn__submit" aria-label="Create Note Button">Create</button>
            <button type="reset" className="note-btn__reset" aria-label="Reset Button" onClick={this.onResetHandler}><RiEraserLine /></button>
          </div>

        </form>
      </div>
    );
  }
}

export default NoteInput;
