import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#2a2a29',
    },

    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText:{
        fontSize: 15,
        color: '#fff',
    },

    headerTextBold:{
        fontWeight: 'bold',
    },

    title:{
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#fff',
        fontWeight: 'bold',
    },

    description:{
        fontSize: 16,
        lineHeight: 24,
        color: '#fff',
    },

    menuList:{
        marginTop: 32,
    },

    menu:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: 'rgb(241, 241, 241)',
        marginBottom: 16,
    },

    menuProperty:{
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },

    menuValue:{
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737390'
    },

    detailsButton:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailsButtonText:{
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold'
    },

});