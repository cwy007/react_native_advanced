import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ListView,
} from 'react-native';

export default class ProductsScreen extends Component {
  constructor(props) {
    super(props);

    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.dataRows = [
      {name: 'Ruby'},
      {name: 'Rails'},
      {name: 'Python'},
      {name: 'PHP'},
      {name: 'Django'},
      {name: 'React'},
      {name: 'React Native'},
      {name: 'MongoDB'},
      {name: 'PostgreSQL'},
      {name: 'JavaScript'},
      {name: 'MySQL'},
      {name: 'Linux'},
      {name: 'Erlang'},
      {name: 'NodeJS'},
      {name: 'Go'},
    ];

    this.state = {
      isDataLoaded: false,
      dataSource: ds.cloneWithRows(this.dataRows),
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          style={styles.listView}
          dataSource={this.state.dataSource}
          renderSeparator={this._renderSepatator.bind(this)}
          renderRow={this._renderRow.bind(this)}
        />
      </View>
    )
  }

  _renderSepatator(sectionID, rowID) {
    return (
      <View key={"sep_" + rowID} style={styles.rowLine}></View>
    )
  }

  _touchRow(rowData) {

  }

  _renderRow(rowData, sectionID, rowId) {
    return (
      <TouchableHighlight onPress={this._touchRow.bind(this, rowData)}>
        <View style={styles.row}>
          <Text style={styles.rowTitle}>{rowData.name}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listView: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    padding: 25,
    backgroundColor: '#eee',
  },
  rowTitle: {
    flex: 5,
    fontSize: 16,
    fontWeight: "700",
  },
  rowLine: {
    height: 1,
    backgroundColor: "white",
  },
});
