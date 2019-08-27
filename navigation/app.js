import { createAppContainer, createSwitchNavigator } from "react-navigation";

// import screens
import Welcome from "../screens/Welcome";

const Screens = createSwitchNavigator({
  Welcome,
});

export default createAppContainer(Screens);