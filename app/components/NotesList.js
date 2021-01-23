import React from "react";
import { Text, View } from "react-native";
import Note from "./Note";

const NotesList = ({ notes, setNotes }) => {
  return (
    <View>
      {notes.map((note) => (
        <Note setNotes={setNotes} notee={note} notes={notes} key={note.id} />
      ))}
    </View>
  );
};

export default NotesList;
