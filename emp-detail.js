import React,{ useState } from "react";
import { View,Text,StyleSheet, TextInput,ScrollView,Keyboard,TouchableWithoutFeedback ,TouchableOpacity, Alert} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
//import {FloatingButton} from "./floating-button";

export default function EmployeeDetail({navigation}){
    const [getEmpID,setEmpID]=useState('');
    const [getFname,setFname]=useState('');
    const [getLname,setLname]=useState('');
    const [getEmail,setEmail]=useState('');
    const [getPhno,setPhno]=useState('');
    const [getHdate,setHdate]=useState('');
    const [getJobid,setJobid]=useState('');
    const [getDepID,setDepID]=useState('');
    const [getSalary,setSalary]=useState('');
    const [getCommission,setCommission]=useState('');
    const [getManagerID,setManagerID]=useState('');

    let port="http://192.168.100.11:3001";
    let employees="/employees"
    let url=port+employees;

    async function Create (){
        const requestOptions ={
            method:'POST',
            headers:{'Content-Type':"application/json"},
            body:JSON.stringify({
                employee_id:getEmpID,
                first_name:getFname,
                last_name:getLname,
                email:getEmail,
                phone_number:getPhno,
                hire_date:getHdate,
                job_id:getJobid,
                department_id:getDepID,
                salary:getSalary,
                commission:getCommission,
                manager_id:getManagerID,    
            })
        };
        // try {
        //     let port="http://192.168.100.11:3001";
        //     let employees="/employees"
        //     let url=port+employees;
           
        //     const response=await fetch(url,requestOptions);
        //     const data=await response.json();
        //     alert(`${data.employee_id} is Created successfully`);
        //     // navigation.navigate("Listing", {data: data});
        // } catch (error) {
        //     console.log(error)
        // }
        // let port="http://192.168.100.11:3001";
        // let employees="/employees"
        // let url=port+employees;
        fetch(url,requestOptions)
        .then(res=>res.json())
        .then(data=>{
            Alert.alert(`${data.employee_id} is Created successfully`);
            navigation.navigate("Listing");
            console.log(data);
        })
        .catch(err=>{
            Alert.alert(err);
            console.log(err);
        })
    };

    async function Update (){
        const requestOptions ={
            method:'PATCH',
            headers:{'Content-Type':"application/json"},
            body:JSON.stringify({
                employee_id:getEmpID,
                first_name:getFname,
                last_name:getLname,
                email:getEmail,
                phone_number:getPhno,
                hire_date:getHdate,
                job_id:getJobid,
                department_id:getDepID,
                salary:getSalary,
                commission:getCommission,
                manager_id:getManagerID,    
            })
        };
        
        // let port="http://192.168.100.11:3001";
        // let employees="/employees"
        // let url=port+employees;
        fetch(url,requestOptions)
        .then(res=>res.json())
        .then(data=>{
            Alert.alert(`${data.employee_id} is Updated successfully`);
            console.log(data);
        })
        .catch(err=>{
            Alert.alert(err);
            console.log(err);
        })
    };

    async function Delete (){
        const requestOptions ={
            method:'DELETE',
            headers:{'Content-Type':"application/json"},
            body:JSON.stringify({
                employee_id:getEmpID,
                
            })
        };
        
        fetch(url,requestOptions)
        .then(res=>res.json())
        .then(data=>{
            Alert.alert(`Deleted successfully`);
            console.log(data);
        })
        .catch(err=>{
            Alert.alert(err);
            console.log(err);
        })
    };

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            {/* Header */}
            <View style={{flexDirection:"row" ,padding:10, backgroundColor:'#62CDFF'}}>
                <Ionicons name="people" size={35} color='white'/>
                <Text style={styles.header}>Employee Detail Entry</Text>
                <Ionicons name="people" size={35} color='white'/>
            </View>
            {/* Body */}
            <View style={{flex:1,flexDirection:"column",justifyContent:"center"}}>
                <ScrollView>
                        <TextInput style={styles.textinput} placeholder="Employee ID" onChangeText={setEmpID}/>
                        <TextInput style={styles.textinput} placeholder="First Name" onChangeText={setFname}/> 
                        <TextInput style={styles.textinput} placeholder="Last Name" onChangeText={setLname}/>
                        <TextInput style={styles.textinput} placeholder="Email" onChangeText={setEmail}/>
                        <TextInput style={styles.textinput} placeholder="Phone No" keyboardType="numeric" onChangeText={setPhno}/>
                        <TextInput style={styles.textinput} placeholder="Hire Date" onChangeText={setHdate}/>
                        <TextInput style={styles.textinput} placeholder="Job ID" onChangeText={setJobid}/>
                        <TextInput style={styles.textinput} placeholder="Department ID" onChangeText={setDepID}/>
                        <TextInput style={styles.textinput} placeholder="Salary" keyboardType="numeric"  onChangeText={setSalary}/>
                        <TextInput style={styles.textinput} placeholder="Commission" keyboardType="numeric"  onChangeText={setCommission}/>
                        <TextInput style={styles.textinput} placeholder="Manager ID" onChangeText={setManagerID}/>
                </ScrollView>
            </View>

            {/* Footer */}
            {/* <View>
            <FloatingButton/>
            </View> */}
            <View style={styles.footer}>
                <TouchableOpacity onPress={()=>Create()}> 
                    <View>
                        <Text style={styles.ftext}>Save</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>(navigation.navigate("Listing"))}>
                    <View >
                        <Text style={styles.ftext}>Listing</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>Update()}>
                    <View>
                        <Text style={styles.ftext}>Update</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>Delete()}>
                    <View>
                        <Text style={styles.ftext}>Delete</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        fontSize:20,
        //fontWeight:"bold",
       marginLeft:20,
       marginRight:20,

    },

    textinput:{
        width:300,
        height:50,
        backgroundColor:'#BBD6B8',
        borderWidth:1,
        marginHorizontal:25,
        textAlign:"center",
        justifyContent:"center",
        marginVertical:10,
        borderRadius:15,
        fontWeight:"bold",
    },
    footer:{
        padding:20,
        backgroundColor:'#62CDFF',
        flexDirection:"row",
    },
    ftext:{
        fontSize:20,
        textAlign:"center",
        paddingHorizontal:15,
        borderRadius:10,
        backgroundColor:'#BBD6B8',
    }

});