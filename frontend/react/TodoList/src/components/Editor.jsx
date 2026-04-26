import { useEffect, useRef, useState } from "react";
import "./Editor.css";

const Editor = ({onCreate}) => {
  const contentRef = useRef();

  useEffect(() => {
    contentRef.current.focus();
  }, [])


  const [content, setContent] = useState("");
  const onChangeContent = (e) => {
    setContent(e.target.value);
  }

  const onKeydown = (e) => {
    if (e.key == "Enter") {
      onSubmit();
    }
  }

  const onSubmit = () => {
    if (content === "") {
      alert("Input Your Todo..!!!");
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  } 

  return (
    <div className="Editor">
      <input ref={contentRef} id="todo" placeholder="새로운 Todo..." type="text" value={content} onChange={onChangeContent} onKeyDown={onKeydown}/>
      <button onClick={onSubmit}>추가</button>
    </div>
  )
}

export default Editor;