/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="ligth-content" />
        <SafeAreaView>
          <View>
            <Text>Hola món!!</Text>
          </View>
        </SafeAreaView>
        </>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
