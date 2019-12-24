import React from "react";
import { View } from "react-native";
import BottomNavigation, {
  FullTab
} from "react-native-material-bottom-navigation";
import { Entypo } from "@expo/vector-icons";
import FaceScreen from "./FaceScreen.js";
import TweetScreen from "./TweetScreen.js";
import InstagramScreen from "./InstagramScreen";
export default class SocialActivityScreen extends React.Component {
  tabs = [
    {
      key: "Photos",
      label: "Photos",
      barColor: "#4267b2",
      pressColor: "rgba(255, 255, 255, 0.16)",
      icon: "facebook"
    },

    {
      key: "Videos",
      label: "Videos",
      barColor: "#231F20",
      pressColor: "rgba(255, 255, 255, 0.16)",
      icon: "instagram"
    },
    {
      key: "Conversation",
      label: "Conversation",
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
    <FullTab
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
          {this.state.activeTab === "Photos" ? (
            <FaceScreen />
          ) : this.state.activeTab === "Conversation" ? (
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
