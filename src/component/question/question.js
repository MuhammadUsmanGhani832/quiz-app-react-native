import { Text } from "@rneui/base";
import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Question = ({ question, onUserClick }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Q.{question.question}</Text>
      <View style={styles.btnContainer}>
        {question.answerOptions.map((option) => {
          return (
            <TouchableOpacity
              key={option.text}
              style={styles.btn}
              onPress={() => onUserClick(option.isCorrect)}
            >
              <Text style={styles.btnText}>{option.text}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    fontSize:20,
    marginHorizontal:20,
    marginBottom:40
  },
  btnContainer: {
    alignItems:'center',
    justifyContent:'space-around',
    flexDirection:'row',
    flexWrap:'wrap'
  },
  btn: {
    backgroundColor:'lightblue',
    padding:20,
    width:130,
    alignItems:'center',
    justifyContent:'center',
    margin:10,
    borderRadius:5
  },
  btnText: {
    fontSize:16,
    fontWeight:'bold'
  },
});

export default Question;
