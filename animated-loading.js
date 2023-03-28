import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { LogBox,Animated,Easing,StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

//export default function App() {
const AnimatedLoading =()=> {

  const [spinValue]=useState(new Animated.Value(0));
  const [fadeValue]=useState(new Animated.Value(0));

  const spinRight=spinValue.interpolate({
    inputRange:[0,1],
    outputRange:['0deg','360deg'],
  });

  const spinLeft=spinValue.interpolate({
    inputRange:[0,1],
    outputRange:['360deg','0deg'],
  });

  const runAnimation=()=>{
    Animated.timing(
      fadeValue,
      {toValue:1,duration:4000,useNativeDriver:true,}
    ).start();

    Animated.loop(
      Animated.timing(
        spinValue,
        {toValue:1,duration:3000,easing: Easing.linear,useNativeDriver:true,}
      ),
    ).start();
  }

  useEffect(()=>{
    runAnimation();
    // UPDATE RN V0.63 ABOVE
    // LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    // UPDATE RN V0.63 Below
    // YellowBox.ignoreWarnings(['Animated: `useNativeDriver`']);
  });

  return (
   <Animated.View style={[styles.container,{opacity:fadeValue}]} >
      <View style={styles.row}>
        <Animated.View style={{transform:[{rotate:spinRight}]}}>
          <View>
            {/* Red Icon */}
            <Icon name='cog' size={80} color='#DB4437'/>
          </View>
        </Animated.View>
        <View>
          <Animated.View style={{transform:[{rotate:spinLeft}]}}>
            <View>
              {/* Yellow Icon */}
              <Icon name='cog' size={40} color='#F4B400'/>
            </View>
          </Animated.View>
          <Animated.View style={{transform:[{rotate:spinLeft}]}}>
            <View>
              {/* Yellow Green */}
              <Icon name='cog' size={40} color='#0F9D58'/>
            </View>
          </Animated.View>
        </View>
      </View>
      <Text style={{paddingTop:10,fontWeight:'bold',color:'#4285F4'}}>DATA LOADING ...</Text>
   </Animated.View>
  );
}

export default AnimatedLoading

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row:{
    flexDirection:'row' 
  },
});
