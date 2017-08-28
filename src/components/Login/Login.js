/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Image, Text,  } from 'react-native';


export default class Login extends Component {

  render() {
    return (
       <View style={styles.container}>
        <Image style={styles.backGroundImage}
            source={require('../../img/pg.jpg')}>
             <View style={styles.content}>
                 <Text style={styles.logo}>
                     جزلة
                 </Text>
                <Text style={styles.interLogin}>
                   التسجيل بإستخدام
                </Text>


             </View>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
},
backGroundImage: {
  alignItems: 'center',
  flex: 1,
  alignSelf: 'stretch',
   width: null,
  justifyContent: 'center',
},
content: {
  alignItems: 'center',
  backgroundColor:'rgba(26,112,186,0.6)',
  height: 450,
  width:300,
  borderRadius: 15,

},
logo: {
  color: '#ffffff',
  fontSize: 80,
  fontWeight: '400',
  fontFamily: 'Cairo-Regular',
},
interLogin: {
  color: '#ffffff',
  fontSize: 24,
  fontWeight: '400',
  fontFamily: 'Cairo-Regular',
}
});
