import { View, Text , StyleSheet, TextInput, KeyboardAvoidingView} from 'react-native'
import React, { useState }  from 'react'
import StarRateComponents from '../components/StarRateComponents'

const StarRate = () => {
    const [note, setNote] = useState('');


    // const note = 3; 
    const maxNote = 5;  
  return (
    <KeyboardAvoidingView behavior = "padding">

            <View>
            <View style={styles.containerInput}>
                <Text style={styles.textInput}>Set rate :</Text>
                <TextInput 
                style={styles.input} 
                placeholder="rate" 
                type='text'
                onChangeText={text => setNote(text)}
                value={note}
                ></TextInput>
            </View>
            <View style={styles.rate}>
                <Text style={styles.rateText}>Rate : {note}/{maxNote}</Text>
                <StarRateComponents note={note} maxNote={maxNote} style={styles.rateStar}/>
            </View>
            </View>

   
    </KeyboardAvoidingView>
  )
}

export default StarRate


const styles = StyleSheet.create({

    rate :{
        padding: 50,
        alignItems : 'center',
        backgroundColor : 'white',
        borderRadius : 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },

    rateText :{
        fontSize : '20px',
    },

    rateStar: {
        width : 99,

    },


    containerInput :{
       marginBottom : 50,

    },
    textInput:{
        fontSize : 15,
    },

    input : {
        backgroundColor : 'white',
        height : 50,
        borderRadius : 15,
        paddingStart : 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        
        elevation: 8,
    },
    
})