import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import WelcomeImage from '../assets/images/welcome.jpg';
import Button from '../Common/Button';

const primary = '#7310FF';

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#FFF',
        flex: 1
    },
    imageWrapper: {
        alignItems: 'center',
        paddingTop: 100
    },
    imageContainer: {
        height: 250,
        width: 250
    },
    image: {
        height: '100%',
        width: '100%'
    },
    captionWrapper: {
        padding: 40,
        alignItems: 'center'
    },
    captionText: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        color: '#999'
    },
    buttonContainer: {
        paddingLeft: 40,
        paddingRight: 40,
        marginTop: 40,
        alignItems: 'center'
    },
    button: {
        backgroundColor: primary,
        width: '100%',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 40,
        marginBottom: 20
    },
    buttonText: {
        fontSize: 14,
        color: '#FFF',
    },
})

export default function (props) {

    const userName = 'Sandeep'
    return (
        <SafeAreaView style={styles.root}>
            <ScrollView>
                <View style={styles.imageWrapper}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={WelcomeImage} />
                    </View>
                </View>
                <View style={styles.captionWrapper}>
                    <Text style={styles.captionText}>Welcome {userName}</Text>
                    <Text style={styles.text}>Have some problem today?</Text>
                    <Text style={styles.text}>Don't worry, now you are part of</Text>
                    <Text style={styles.text}>Hi Service, Let us help you.</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        buttonStyle={styles.button}
                        textStyle={styles.buttonText}
                        title="Back to Home"
                        onPress={() => ''}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}