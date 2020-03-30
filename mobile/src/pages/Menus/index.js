import React, {useState, useEffect} from 'react';
import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';
import styles from './style';

export default function Menus(){
    const [menus, setMenus] = useState([]);
    const [total, setTotal] = useState(0);

    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    function navigationToDetail(menu){
        navigation.navigate('Detail', {menu})
    }

    async function loadMenus(){
        if(loading){
            return;
        }

        if(total > 0 && menus.length === total){
            return;
        }

        setLoading(true);

        const response = await api.get('menus', {
            params: {page}
        });

        
        setMenus([... menus, ...response.data]); // adiciona dois vetores
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);

    };
    useEffect(() => {
        loadMenus();
    }, []);

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} lanches.</Text>
                </Text>
            </View>
            <Text style={styles.title}>Bem Vindo!</Text>
            <Text style={styles.description}>Escolha um lanche!</Text>
            
            <FlatList 
            data={menus}
            style={styles.menuList}
            keyExtractor={menu => String(menu.id)}
            // showsVerticalScrollIndicator={false}
            onEndReached={loadMenus}
            onEndReachedThreshold={0.2}
            renderItem={({item: menu}) => (
                <View style={styles.menu}>
                    {/* <Text style={[styles.menuProperty, {marginTop: 0}]}>Restaurante:</Text>
                    <Text style={styles.menuValue}>{menu.name}</Text> */}

                    <Text style={styles.menuProperty}>Lanche:</Text>
                    <Text style={styles.menuValue}>{menu.title}</Text>

                    <Text style={styles.menuProperty}>Valor:</Text>
                    <Text style={styles.menuValue}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(menu.value)}</Text>
                    <TouchableOpacity 
                    style={styles.detailsButton} 
                    onPress={() => navigationToDetail(menu)}
                    >
                        <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={16} color="#e02041"/>
                    </TouchableOpacity>
                </View>
            )}
            />
        </View>
    );
}