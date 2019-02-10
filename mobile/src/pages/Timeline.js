import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import api from "../services/api";
import Icon from "react-native-vector-icons/MaterialIcons";
import Tweet from "../components/Tweet";

export default class Timeline extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Início",
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate("New")}>
        <Icon
          style={{ marginRight: 20 }}
          name="add-circle-outline"
          size={24}
          color="#4BB0EE"
        />
      </TouchableOpacity>
    )
  });

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
        <FlatList
          data={tweets}
          keyExtractor={tweet => tweet._id}
          renderItem={({ item }) => <Tweet tweet={item} />}
        />
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
