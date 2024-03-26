/* eslint-disable react/prop-types */
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Result = ({ userAnswers, resetQuiz, questions }) => {
  const correctAnswer = userAnswers.filter((answer) => answer).length;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Result</Text>
      <Text>
        you have answered {correctAnswer} out of {questions.length} questions
      </Text>
      <TouchableOpacity onPress={resetQuiz} style={{ backgroundColor:'lightblue',padding:5,marginVertical:10,borderRadius:5 }}>
        <Text>click here to retry</Text>
      </TouchableOpacity>
      <View style={{width:'95%',marginHorizontal:10}}>
        {questions.map((question, index) => {
          return (
            <Text key={index} style={userAnswers[index]?{color:'green'}:{color:'red'}}>
              Q{index + 1}. {question.question}
            </Text>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    marginHorizontal: 20,
    marginBottom: 40,
  },
  container:{
    alignItems:'center'
  }
});
export default Result;
