import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TextInput } from 'react-native';
import UserIcon from '../assets/images/user.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';

const bgSecondary = '#EAE8FE';
const headerColor = '#252D96';
const searchText = '#C8BBFC';
const primary = '#7310FF'

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
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        height: 220
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
        position: 'relative',
    },
    scrollArea: {
        flexDirection: 'row',
        paddingLeft: 25,
        paddingRight: 25,
    },
    menuItem: {
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10,
        width: 90,
        height: 100,
        padding: 16,
        paddingBottom: 20,
        backgroundColor: primary,
        borderRadius: 10,
    },
    menuIconWrapper: {
        backgroundColor: '#FFF',
        padding: 4,
        borderRadius: 4
    },
    menuIcon: {
        fontSize: 24,
        color: primary,
    },
    menuTitle: {
        color: '#FFF'
    }
})

export default function (props) {
    const [search, setSearch] = useState('');

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.root}>
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
                    </View>
                    <View style={styles.scrollableWrapper}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            automaticallyAdjustContentInsets={true}
                        >
                            <View style={styles.scrollArea}>
                                <View style={styles.menuItem}>
                                    <View style={styles.menuIconWrapper}><Icon name="edit" style={styles.menuIcon} /></View>
                                    <Text style={styles.menuTitle}>Message</Text>
                                </View>
                                <View style={styles.menuItem}>
                                    <View style={styles.menuIconWrapper}><Icon name="crosshairs" style={styles.menuIcon} /></View>
                                    <Text style={styles.menuTitle}>Clean</Text>
                                </View>
                                <View style={styles.menuItem}>
                                    <View style={styles.menuIconWrapper}><Icon name="wrench" style={styles.menuIcon} /></View>
                                    <Text style={styles.menuTitle}>Repair</Text>
                                </View>
                                <View style={styles.menuItem}>
                                    <View style={styles.menuIconWrapper}><Icon name="gear" style={styles.menuIcon} /></View>
                                    <Text style={styles.menuTitle}>Settings</Text>
                                </View>
                                <View style={styles.menuItem}>
                                    <View style={styles.menuIconWrapper}><Icon name="archive" style={styles.menuIcon} /></View>
                                    <Text style={styles.menuTitle}>Archive</Text>
                                </View>
                                <View style={styles.menuItem}>
                                    <View style={styles.menuIconWrapper}><Icon name="search" style={styles.menuIcon} /></View>
                                    <Text style={styles.menuTitle}>Find</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}