import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Question from "../../component/question/question";
import questions from "../../constant/questions.json";
import Result from "../../component/result";

const Home = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);

    const handleUserAnswer=(isCorrect)=>{
      setCurrentQuestion(currentQuestion+1);
      setUserAnswers([...userAnswers,isCorrect])
    }
    const resetQuiz = () => {
      setCurrentQuestion(0);
      setUserAnswers([]);
      console.log('done')
    };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Quiz App</Text>
      {/* quiz component */}
      {currentQuestion < questions.length && (
        <Question
          onUserClick={handleUserAnswer}
          question={questions[currentQuestion]}
        />
      )}

      {currentQuestion === questions.length && (
        <Result
          userAnswers={userAnswers}
          resetQuiz={resetQuiz}
          questions={questions}
        />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "blue",
    marginVertical: 80,
    borderBottomColor: "blue",
    borderBottomWidth: 1,
  },
});
