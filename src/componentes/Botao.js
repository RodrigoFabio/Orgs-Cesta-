import React from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';

import Texto from './Texto';

export default function Botao() {
 return <>
       <TouchableOpacity style={estilos.botao}>
                <Texto style={estilos.textoBotao}> Ola </Texto>
            </TouchableOpacity>
 </>
 
}


const estilos = StyleSheet.create({
    botao:{
        marginTop:16,
        backgroundColor:"#2A9F85",
        paddingVertical: 16,
        borderRadius:6,
    },
    textoBotao:{
        color:"#fff",
        fontSize:16,
        textAlign:"center",
        lineHeight:26,
        fontWeight:"bold",
    },
})

