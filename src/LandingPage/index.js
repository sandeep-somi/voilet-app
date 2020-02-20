import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import Button from '../Common/Button';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#7310FF',
        display: 'flex',
        flex: 1
    },
    greet: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 3,
        transform: [{ rotate: '4deg' }]
    },
    intro: {
        flex: 2,
        margin: 40,
    },
    greetContainer: {
        height: 100,
        width: 100,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    hi: {
        color: '#7310FF',
        fontSize: 70,
        fontWeight: 'bold'
    },
    introText: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 20,
        marginTop: 40,
    },
    buttonText: {
        color: '#7310FF',
        fontSize: 14
    }
})

export default function (props) {
    const navigation = useNavigation();
    
    return (
        <View style={styles.root}>
            <StatusBar backgroundColor="#7310FF" barStyle="light-content" />
            <View style={styles.greet}>
                <View style={styles.greetContainer}>
                    <Text style={styles.hi}>hi</Text>
                </View>
            </View>
            <View style={styles.intro}>
                <Text style={styles.introText}>Have a problem that you</Text>
                <Text style={styles.introText}>can't solved?</Text>
                <Text style={styles.introText}>Don't worry, lets get</Text>
                <Text style={styles.introText}>started</Text>                
                <Button
                    buttonStyle={styles.button}
                    textStyle={styles.buttonText}
                    title="Get Started"
                    onPress={() => navigation.navigate('SignIn')}
                />
            </View>
        </View>
    )
}