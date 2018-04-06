import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>登录</Text>
        </View>
        <View style={styles.inputRow}>
          <TextInput
            ref="email"
            autoCapitalize="none"
            placeholder="邮箱"
            autoCorrect={false}
            style={styles.inputText}
          />
        </View>
        <View style={styles.inputRow}>
          <TextInput
            ref="password"
            autoCapitalize="none"
            placeholder="密码"
            autoCorrect={false}
            secureTextEntry={true}
            style={styles.inputText}
          />
        </View>
        <TouchableOpacity style={styles.btnContainer}>
          <Text style={styles.bigBtn}>登录</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 100,
  },
  header: {
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 16,
    color: "#333333",
    fontWeight: '900',
  },
  inputRow: {
    height: 50,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: "#eee",
    justifyContent: "center",
    borderRadius: 3,
  },
  inputText: {
    flex: 1,
  },
  btnContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 3,
    borderColor: "#ffffff",
    borderWidth: 1,
    backgroundColor: "#333333",
  },
  bigBtn: {
    color: "#ffffff",
  },
})
