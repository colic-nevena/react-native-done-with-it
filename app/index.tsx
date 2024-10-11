import { Text, View, SafeAreaView } from "react-native";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "pink",
        alignItems: "center",
      }}
    >
      <Text>Hello there!</Text>
    </SafeAreaView>
  );
}
