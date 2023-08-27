import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { Marked } from 'marked';

function Preview() {
  const inputState = useSelector((state) => state.input);
  const marked = new Marked({ breaks: true });
  const markdown = marked.parse(inputState);
  return (
    <div id="preview" dangerouslySetInnerHTML={{ __html: markdown }}></div>
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
