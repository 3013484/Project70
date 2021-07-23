import React from 'react';
import Header from 'react-native';
import {  StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default class WriteStoryScreen extends React.Component {
    render () {
        return (
            <View>
                <Header>Write a Story!</Header>

                <View>
                    <TextInput style = {styles.inputBox} placeholder = {'Title'}/>
                    <TouchableOpacity 
                        style = {styles.scanButton}
                        onPress = {()=>{
                            this.getCameraPermissions('bookID');
                        }}>
                        <Text style = {styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TextInput style = {styles.inputBox} placeholder = {'Author'}/>
                    <TouchableOpacity 
                        style = {styles.scanButton}
                        onPress = {()=>{
                            this.getCameraPermissions('bookID');
                        }}>
                        <Text style = {styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TextInput style = {styles.inputBox} placeholder = {'Write the story here!'} props = {{multiline: true}}/>
                    <TouchableOpacity 
                        style = {styles.scanButton}
                        onPress = {()=>{
                            this.getCameraPermissions('bookID');
                        }}>
                        <Text style = {styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    scanButton:{
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10
    },
    buttonText:{
      fontSize: 15,
      textAlign: 'center',
      marginTop: 10
    },
    inputView:{
      flexDirection: 'row',
      margin: 20
    },
    inputBox:{
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20
    },
    scanButton:{
      backgroundColor: '#66BB6A',
      width: 50,
      borderWidth: 1.5,
      borderLeftWidth: 0
    }
  });