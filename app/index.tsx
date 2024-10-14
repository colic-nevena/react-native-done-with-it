import Card from "./components/Card";
import WelcomeScreen from "./screens/WelcomeScreen";


export default function Index() {
  return (
    // <WelcomeScreen />
    <Card
      title="Red jacket"
      subtitle="$100"
      image={require("./assets/images/jacket.jpg")}
    />
  );
}