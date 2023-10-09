import { useState } from "react";

export default function SongForm(props) {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleArtistChange(e) {
    setArtist(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newSong = { title: title, artist: artist, played: false };
    props.addSong(newSong);
    setTitle("");
    setArtist("");
  }

  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          Add Task
          <input type="text" onChange={handleTitleChange} value={title} />
          <button>Add</button>
        </label>
      </form>
    </div>
  );
}
