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



function AddFoodScreen() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  
  const [text, onChangeText] = React.useState('');
  const placeHolderText = ('Enter New Food.');
  return (
    <View style={{
       alignItems: 'center', justifyContent: 'center',
       borderColor:'red',borderBottomWidth:1,borderTopWidth:1,
       flex: 2

    }}>
          <View style={{
       alignItems: 'center', justifyContent: 'center',
       borderColor:'red',borderBottomWidth:1,borderTopWidth:1,
       flex: 2,  

    }}>
          <TextInput
        onChangeText={onChangeText}
        placeholder= {placeHolderText}
        backgroundColor = '#ffffff'
        value = {text}

      />
      </View>

      <View>
          
          <Button
            title="Add New Food Choice"
            onPress={() => navigation.push('AddFoodScreen')}
          />
        </View>



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
