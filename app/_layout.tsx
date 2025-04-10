import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        headerTitle: "Tappt",
        headerLeft: () => <></>,
      }}/>
      <Stack.Screen name="about" options={{
        headerTitle: "About",
      }} />
      <Stack.Screen name="+not-found" options={{
        headerShown: false,
      }} />
      <Stack.Screen name="login" options={{
        headerShown: false,
      }} />
{/*      <Stack.Screen name="rules" options={{      //commenting out so that the "back" arrow is built-in during dev
        headerShown: false,
      }} />   */}
      <Stack.Screen name="slogin" options={{
        headerShown: false,
      }} />
      <Stack.Screen name="signUp" options={{
        headerShown: false,
      }} />

      <Stack.Screen name="studentWaiting" options={{
        headerShown: false,
      }} />
      
      <Stack.Screen name="createdecks" options={{
        headerShown: false, 
      }} />
      <Stack.Screen name="teacherwaiting" options={{
        headerShown: false, 
      }} />
      <Stack.Screen name="incorrect" options={{
        headerShown: false, 
      }} />
      <Stack.Screen name="correct" options={{
        headerShown: false, 
      }} />
{     <Stack.Screen name="view-decks" options={{  //commenting out so that the "back" arrow is built-in during dev
        headerShown: false,
      }} />}
      <Stack.Screen name="studentClicks" options={{
        headerShown: false,
      }} />
      <Stack.Screen name="answerchoices" options={{
        headerShown: false,
      }} />
      <Stack.Screen name="endgame" options={{
         headerShown: false,
       }} />
       <Stack.Screen name="roundend" options={{
         headerShown: false,
       }} />
       <Stack.Screen name="finalscorers" options={{
         headerShown: false,
       }} />
       <Stack.Screen name="roundScorers" options={{
         headerShown: false,
       }} />

      </Stack>
      
      
  );
}
