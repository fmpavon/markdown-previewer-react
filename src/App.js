import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function Preview() {
  const inputState = useSelector((state) => state.input);
  return (
    <div id="preview">{inputState}</div>
  );
}

function Editor() {
  const inputState = useSelector((state) => state.input);
  const dispatch = useDispatch();
  return (
    <textarea name="editor" id="editor" defaultValue={inputState} onChange={e => dispatch({ type: 'INPUT', input: e.target.value })}></textarea>
  );
}

export { Preview, Editor };
