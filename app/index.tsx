import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';
import 'react-native-reanimated';
import Config from './config';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the home screen - listening at ${Config.BE_HOST}</Text>
      <Link href={"/login"} style={styles.button}>
        Go to login screen
      </Link>
      <Link href={"/slogin"} style={styles.button}>
        Go to student login screen
      </Link>
      <Link href={"/view-decks"} style={styles.button}>
        Go to view decks screen 
      </Link>
      <Link href={"/studentClicks"} style={styles.button}>
        Go to student click count screen 
      </Link>
      <Link href={"/endgame"} style={styles.button}>
         Go to end game screen 
      </Link>
      <Link href={"/roundend"} style={styles.button}>
         Go to end of round screen 
      </Link>
      <Link href={"/reading"} style={styles.button}>
        Go to reading screen 
      </Link>
      <Link href={"/questiontimer"} style={styles.button}>
        Go to teacher-side question with timer screen  
      </Link>
      <Link href={"/finalscorers"} style={styles.button}>
         Go to final leaderboard 
      </Link>
      <Link href={"/roundScorers"} style={styles.button}>
        Go to round leaderboard 
      </Link>
      <Link href={"/review"} style={styles.button}>
        Go to review screen 
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FC6A03",
  },
  text: {
    color: '#fff'
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
