import { SafeAreaView } from "react-native-safe-area-context";
import Card from "./components/Card";
import ListingScreen from "./screens/ListingScreen";
import MessagesScreen from "./screens/MessagesScreen";
import ViewImageScreen from "./screens/ViewImageScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import Icon from "./components/Icon";


export default function Index() {
  return (
    <SafeAreaView>
      <Icon
        name="email"
        size={50}
        backgroundColor="red"
        iconColor="white"
      />
    </SafeAreaView>
  );
}