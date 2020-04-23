import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';

export default function NavigatorTab({ leftBtn, rightBtn }) {
    return (
        <View style={styles.main}>
            <TouchableOpacity style={styles.btn} onPress={leftBtn}>
                <Text style={styles.txt}>Início</Text>
            </TouchableOpacity>
            <View style={styles.divider} />
            <TouchableOpacity style={styles.btn} onPress={rightBtn}>
                <Text style={styles.txt}>Mapa</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        height: 70,
        width: '100%',
        flexDirection: 'row',
    },
    btn: {
        flex: 1,
        borderTopWidth: 0.2,
        borderColor: '#6e6e6e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt: {
        fontSize: 20,
        color: '#6e6e6e',
        fontWeight: '500'
    },
    divider: {
        height: 40,
        borderLeftWidth: 0.5,
        borderColor: '#6e6e6e',
        alignSelf: 'center'
    }
});