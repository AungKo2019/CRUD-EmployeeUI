import React,{ useState,useEffect } from "react";
import { View,Text,StyleSheet, TextInput,ScrollView,Keyboard,TouchableWithoutFeedback ,FlatList,TouchableOpacity, Alert,ActivityIndicator, SafeAreaView} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import AnimatedLoading from './animated-loading';

export default function EmployeeDetail({navigation}){
    const requestOptions ={
            method:'GET',
            headers:{'Content-Type':"application/json"},
    };
   
    const [data,setData]=useState([]);
    const [isLoading,setLoading]=useState(false);

    let port="http://192.168.100.11:3001";
    let employees="/employees"
    let url=port+employees;

    async function GetInfo (){
    try {
       
        const response=await fetch(url,requestOptions);
        const resJson=await response.json();
        setData(resJson);
        console.log(data);
    } catch (error) {
        console.log(error)
    }
    }

    useEffect(()=>{
        setLoading(true);
        setInterval(()=>{
            setLoading(false);
        },5000)
        GetInfo ();
    },[]);

    return(
       
        <View style={styles.container}>
            {isLoading ? (
                 <AnimatedLoading/>
            ):(
                <View>
                {/* Header */}
               <View style={{flexDirection:"row" ,padding:10, backgroundColor:'#62CDFF'}}>
                   <Ionicons name="people" size={35} color='white'/>
                   <Text style={styles.header}>Employee Listing</Text>
                   <Ionicons name="people" size={35} color='white'/>
               </View>
               {/* Body */}
              <View>
                  <FlatList
                      data={data}
                      keyExtractor={(item)=>item.employee_id}
                      renderItem={({item})=>
                          <Text style={styles.text}>{item.employee_id}  |  {item.first_name}  |  {item.last_name}  |  {item.email}</Text>}
                  />
              </View>
              {/* Footer */}
               <View style={styles.footer}>
                   <TouchableOpacity onPress={()=>(navigation.navigate("Detail"))}> 
                     <View>
                          <Text style={styles.ftext}>Detail Entry</Text>
                     </View>
                  </TouchableOpacity>
                  
              </View>
              </View>
            )}
      
        </View>
    )


}

const styles= StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        fontSize:20,
        //fontWeight:"bold",
       marginHorizontal:50,

    },
   
    text:{
        width:"100%",
        height:30,
        backgroundColor:'#BBD6B8',
        borderWidth:1,
       // textAlign:"center",
        justifyContent:"center",
        marginVertical:5,
        fontWeight:"bold",
    },
    footer:{
        padding:20,
        backgroundColor:'#62CDFF',
        flexDirection:"row",
        marginTop:350,
        
    },
    ftext:{
        fontSize:20,
        textAlign:"center",
        paddingHorizontal:15,
        borderRadius:10,
        backgroundColor:'#BBD6B8',
    }

});