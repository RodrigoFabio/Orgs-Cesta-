import React from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';

import Texto from '../../../componentes/Texto';

export default function Item({item: {nome, imagem}}) {

return <View style={estilos.lista}> 
            <Image source={imagem}  style={estilos.imagem}/>
            <Texto style={estilos.texto}>{nome}</Texto>
       </View>
}

const estilos= StyleSheet.create({
    lista:{
        flexDirection:"row",
        borderBottomWidth:1,
        borderBottomColor:"#ECECEC",
        paddingVertical: 16,
        marginHorizontal:16,
        alignItems:"center",
    },
    imagem:{
        width:46,
        height:46,
        marginRight: 11,
        borderRadius:6, 
    },
    texto:{
        fontSize:16,
        lineHeight:26,
        color:"#464646",
    }

})