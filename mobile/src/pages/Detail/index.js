import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './style';

export default function Detail(){
    const navigation = useNavigation();
    const route = useRoute();

    const menu = route.params.menu;

    function navigateBack(){
        navigation.goBack();
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#e02041"/>
                </TouchableOpacity>
            </View>
            <View style={styles.menu}>

                <Text style={[styles.menuProperty, {marginTop: 0}]}>Acompanhamento:</Text>
                <Text style={styles.menuValue}>{menu.description}</Text>

                <Text style={styles.menuProperty}>Valor:</Text>
                <Text style={styles.menuValue}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(menu.value)}</Text>
            </View>
            <View style={styles.contactBox}>
                
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action}>
                        <Text style={styles.actionText}>Pedir</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action}>
                        <Text style={styles.actionText}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}