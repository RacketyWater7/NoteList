import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const Note = ({ setNotes, notes, notee }) => {
  const deleteNote = () => {
    setNotes(notes.filter((state) => state.id !== notee.id));
  };
  return (
    <View style={styles.noteS}>
      <Text style={styles.noteText}>{notee.date}</Text>
      <Text style={styles.noteText}>{notee.note}</Text>
      <TouchableOpacity onPress={deleteNote} style={styles.noteDelete}>
        <Text style={styles.noteDeleteText}>D</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  noteS: {
    position: "relative",
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: "#ededed",
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: "#E91E63",
  },
  noteDelete: {
    position: "absolute",
    justifyContent: "center",
    backgroundColor: "#2980b9",
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
  },
  noteDeleteText: {
    color: "white",
  },
});

export default Note;
