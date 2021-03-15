import React, { useContext, useEffect, useState } from 'react'
import  {createContext}  from "react";
import Auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import {navigate} from '../navigation/root-navigation/RootNavigation'

export const AuthContext = createContext(null)


export const AuthProvider =({children})=>{

    const [fullName, setfullName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setpassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [email, setemail] = useState('');
    const [loading, setloading] = useState(false)
    

    const onSignup=()=>{
        if(password !== confirmPassword){
            return
        }
  
        Auth().createUserWithEmailAndPassword(email,password).then((data) => {
          console.log('User account created & signed in!');
          firestore()
            .collection('Users')
            .add({
              name: fullName,
              username:userName,
              email:email,
              uid:data.user.uid
            })
            .then(() => {
              console.log('User added!');
              navigate('Login')
            });
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }
      
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
      
          console.error(error);
        });
        setfullName('')
        setemail('')
        setpassword('')
        setconfirmPassword('')
        setUserName('')
    }


    const onSignIn =()=>{
        Auth().signInWithEmailAndPassword(email,password).then((value) => {
            console.log('User account  signed in!');
            //setId(value.user.uid)
            setIsSignedIn(true)
          })
          .catch(error => {
            if (error.code === 'auth/user-not-found') {
              console.log('That email address!');
            }
        
            if (error.code === 'auth/wrong-password') {
              console.log('That password is invalid!');
            }
        
            console.error(error);
          })

          setpassword('')
          setemail('')
    }

    const Values={
        fullName, 
        setfullName,
        userName, 
        setUserName,
        password, 
        setpassword,
        confirmPassword, 
        setconfirmPassword,
        email, 
        setemail,
        onSignup,
        onSignIn,
    }
   
    return(
        <AuthContext.Provider value={Values}>
            {children}
        </AuthContext.Provider>
    )
}

