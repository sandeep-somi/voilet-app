import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TextInput } from 'react-native';
import UserIcon from '../assets/images/user.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';

const bgSecondary = '#EAE8FE';
const headerColor = '#252D96';
const searchText = '#C8BBFC';

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#fff',
        flex: 1
    },
    header: {
        paddingTop: 30,
        paddingBottom: 20,
        paddingRight: 30,
        paddingLeft: 30,
        backgroundColor: bgSecondary,
        height: 250,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        position: 'relative'
    },
    userPanel: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
    },
    heading: {
        fontSize: 20,
        color: headerColor,
        fontWeight: 'bold'
    },
    subHeading: {
        color: '#999'
    },
    userImage: {
        borderWidth: 4,
        borderColor: '#FFF',
        borderRadius: 8,
        height: 45,
        width: 45
    },
    searchContainer: {
        borderRadius: 8,
        backgroundColor: '#FFF',
        height: 50,
        marginTop: 16,
        justifyContent: "flex-start",
        alignItems: 'center',
        flexDirection: 'row'
    },
    searchIcon: {
        color: searchText,
        fontSize: 20,
        paddingLeft: 12,
        paddingRight: 6,
    },
    formControl: {
        color: searchText,
        fontSize: 16,
        width: '100%'
    },
    scrollableWrapper: {
        position: 'absolute',
    },
    scrollArea: {
        
    }
})

export default function (props) {
    const [search, setSearch] = useState('');

    return (
        <SafeAreaView style={styles.root}>
            <ScrollView>
                <View style={styles.header}>
                    <View style={styles.userPanel}>
                        <View>
                            <Text style={styles.heading}>Hi Sandeep</Text>
                            <Text style={styles.subHeading}>Need help?</Text>
                        </View>
                        <View>
                            <Image style={styles.userImage} source={UserIcon} />
                        </View>
                    </View>
                    <View style={styles.searchContainer}>
                        <Icon name="search" style={styles.searchIcon} />
                        <TextInput
                            style={styles.formControl}
                            onChangeText={text => setSearch(text)}
                            value={search}
                            placeholder="Search"
                        />
                    </View>
                    <View style={styles.scrollableWrapper}>
                        <ScrollView style={styles.scrollArea}>

                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}