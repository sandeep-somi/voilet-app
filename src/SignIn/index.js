import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Dimensions,
    NativeModules,
    Image,
    BackHandler
} from 'react-native';
import { useHistory } from 'react-router-native';
import GoogleIcon from '../assets/images/google.png';
import FacebookIcon from '../assets/images/facebook.png';
import TwitterIcon from '../assets/images/twitter.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../Common/Button';
import is from 'is_js';

const { StatusBarManager } = NativeModules;

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const primary = '#7310FF';
const primaryBackground = '#EAE8FE';

const styles = StyleSheet.create({
    root: {
        backgroundColor: primaryBackground,
    },
    backContainer: {
        marginLeft: 40,
        height: 120,
        flexDirection: 'row',
        alignItems: 'center'
    },
    backText: {        
        fontSize: 16,
        color: primary,
        fontWeight: 'bold'
    },
    backIcon: {
        fontSize: 14,
        color: primary,
        marginRight: 8
    },
    formContainer: {
        height: height - 120 - StatusBarManager.HEIGHT || 20,
        flex: 1,
        paddingTop: 60,
        paddingLeft: 40,
        paddingRight: 40,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        // justifyContent: 'space-between'
    },
    welcomeText: {
        color: primary,
        fontSize: 26,
        fontWeight: 'bold'
    },
    controlContainer: {
        marginTop: 30
    },
    formGroup: {
        marginBottom: 4
    },
    formControl: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: '#C3C3C3'
    },
    button: {
        backgroundColor: primary,
        width: 180,
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
    alternativeLogin: {
        marginTop: 30
    },
    alternativeLoginText: {
        color: primary,
        fontSize: 12
    },
    socialIcons: {
        marginTop: 20,
        flexDirection: 'row',
        marginBottom: 40
    },
    iconContainer: {
        marginRight: 16,
        backgroundColor: '#F9F9FB',
        padding: 8,
        borderRadius: 8
    },
    icon: {
        height: 22,
        width: 22,
        resizeMode: 'contain'
    }
})

export default function (props) {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setError] = useState({ email: '', password: '' });

    function onSubmit() {
        
    }

    function isValid() {
        if(email && !is.email(email)) {

        }
    }

    return (
        <SafeAreaView style={styles.root}>
            <ScrollView>
                <StatusBar backgroundColor={primaryBackground} barStyle="light-content" />
                <View style={styles.backContainer}>
                    <Icon name="long-arrow-left" style={styles.backIcon} />
                    <Text style={styles.backText} onPress={() => history.goBack()}>Hi Fix</Text>
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.welcomeText}>Here to Get</Text>
                    <Text style={styles.welcomeText}>Welcome!</Text>
                    <View style={styles.controlContainer}>
                        <View style={styles.formGroup}>
                            <TextInput
                                style={styles.formControl}
                                onChangeText={text => setEmail(text)}
                                value={email}
                                placeholder="Phone Number or Email"
                            />
                        </View>
                        <View style={styles.formGroup}>
                            <TextInput
                                secureTextEntry={true}
                                style={styles.formControl}
                                onChangeText={text => setPassword(text)}
                                value={password}
                                placeholder="Password"
                            />
                        </View>
                    </View>
                    <Button
                        buttonStyle={styles.button}
                        textStyle={styles.buttonText}
                        title="Sign In"
                        onPress={() => history.push('/welcome')}
                    />
                    <View style={styles.alternativeLogin}>
                        <Text style={styles.alternativeLoginText}>Or Sign in with</Text>
                    </View>
                    <View style={styles.socialIcons}>
                        <View style={styles.iconContainer}>
                            <Image style={styles.icon} source={GoogleIcon} />
                        </View>
                        <View style={styles.iconContainer}>
                            <Image style={styles.icon} source={FacebookIcon} />
                        </View>
                        <View style={styles.iconContainer}>
                            <Image style={styles.icon} source={TwitterIcon} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}