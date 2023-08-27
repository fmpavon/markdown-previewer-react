import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function Preview() {
  return (
    <div id="preview"></div>
  );
}

function Editor() {
  return (
    <textarea name="editor" id="editor"></textarea>
  );
}

export { Preview, Editor };
