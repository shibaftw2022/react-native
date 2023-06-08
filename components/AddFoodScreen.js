/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function Section({children, title}) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function AddFoodScreen() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  
  const [text, onChangeText] = React.useState('');
  const placeHolderText = ('Enter New Food.');
  return (
  
        <View style={{
            flexDirection:"row",
            flex: 1, alignItems: 'center', justifyContent: 'center'
          }}>
          
          <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder= {placeHolderText}
        backgroundColor = '#ffffff'
        value = {text}

      />
        </View>

        
  
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  textInput: {
    justifyContent: "center",
    alignItems: "stretch",
    borderRightWidth: 30,
    borderLeftWidth: 30,
    height: 50,
    borderColor: "#FFFFFF",
  }
  
});

export default AddFoodScreen;
