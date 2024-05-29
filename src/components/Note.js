import "./Notes.css";
import Notes from "./Notes";
const Note = () => {
  return (
    <div className="note-div">
      {Notes.map((note, key) => {
        return (
          <div className="note" key={key}>
            <h1>{note.title}</h1>
            <p style={{color:"red"}}>Silas</p>
            <p>{note.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Note;
