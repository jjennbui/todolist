import Song from "./Song";
import SongForm from "./SongForm";
import { useState } from "react";

const initialSongs = [
  {
    title: "wash dishes",
    played: false,
    id: 1
  }
];

export default function Playlist() {
  const [songs, setSongs] = useState(initialSongs);

  function addSong(song) {
    setSongs([...songs, song]);
  }

  function removeSong(track) {
    const updatedSongs = songs.filter(function (song) {
      return song.id !== track.id;
    });
    setSongs(updatedSongs);
  }

  function togglePlayed(track) {
    const updatedSongs = songs.map(function (song) {
      if (song.id === track.id) {
        song.played = !song.played;

        return song;
      } else {
        return song;
      }
    });

    setSongs(updatedSongs);
  }

  return (
    <div>
      <ul>
        {songs.map((song) => (
          <Song
            key={song.id}
            song={song}
            remove={removeSong}
            togglePlayed={togglePlayed}
          />
        ))}
      </ul>
      <SongForm addSong={addSong} />
    </div>
  );
}
