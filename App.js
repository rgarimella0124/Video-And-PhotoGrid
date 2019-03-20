import React from "react";
import { View } from "react-native";
import BottomNavigation, {
  ShiftingTab
} from "react-native-material-bottom-navigation";
import { Entypo } from "@expo/vector-icons";
import FaceScreen from "./FaceScreen.js";
import TweetScreen from "./TweetScreen.js";
import InstagramScreen from "./InstagramScreen";
export default class SocialActivityScreen extends React.Component {
  tabs = [
    {
      key: "Facebook",
      label: "Facebook",
      barColor: "#4267b2",
      pressColor: "rgba(255, 255, 255, 0.16)",
      icon: "facebook"
    },

    {
      key: "Instagram",
      label: "Instagram",
      barColor: "#231F20",
      pressColor: "rgba(255, 255, 255, 0.16)",
      icon: "instagram"
    },
    {
      key: "Twitter",
      label: "Twitter",
      barColor: "#38A1F3",
      pressColor: "rgba(255, 255, 255, 0.16)",
      icon: "twitter"
    }
  ];

  state = {
    activeTab: this.tabs[0].key
  };

  renderIcon = icon => ({ isActive }) => (
    <Entypo size={25} color="white" name={icon} />
  );

  renderTab = ({ tab, isActive }) => (
    <ShiftingTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
    />
  );

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          {this.state.activeTab === "Facebook" ? (
            <FaceScreen />
          ) : this.state.activeTab === "Twitter" ? (
            <TweetScreen />
          ) : (
            <InstagramScreen />
          )}
        </View>
        <BottomNavigation
          tabs={this.tabs}
          activeTab={this.state.activeTab}
          onTabPress={newTab => this.setState({ activeTab: newTab.key })}
          renderTab={this.renderTab}
          useLayoutAnimation
        />
      </View>
    );
  }
}
