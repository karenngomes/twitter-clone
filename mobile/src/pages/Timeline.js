import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import api from "../services/api";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Timeline extends Component {
  static navigationOptions = {
    title: "Início",
    headerRight: (
      <TouchableOpacity onPress={() => {}}>
        <Icon
          style={{ marginRight: 20 }}
          name="add-circle-outline"
          size={24}
          color="#4BB0EE"
        />
      </TouchableOpacity>
    )
  };

  state = {
    tweets: []
  };

  async componentDidMount() {
    const response = await api.get("tweets");
    this.setState({ tweets: response.data });
  }

  render() {
    const { tweets } = this.state;

    return (
      <View style={styles.container}>
        {tweets.map(tweet => (
          <Text>{tweet.author}</Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});
