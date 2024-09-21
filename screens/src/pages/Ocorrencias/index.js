import React from 'react';
import { StyleSheet, View, Text, FlatList, Button, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Ocorrencias() {
    const navigation = useNavigation();
    const route = useRoute();
    const { ocorrencias } = route.params;

    const handleDetalhes = (item) => {
        Alert.alert(
            "Detalhes da Ocorrência",
            `Descrição: ${item.descricao}\nLocalização: ${item.localizacao}`
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={ocorrencias}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.descricao}>{item.descricao}</Text>
                        <Text>{item.localizacao}</Text>
                        <Button title="Ver Detalhes" onPress={() => handleDetalhes(item)} />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        textAlign: "center",
    },
    item: {
        padding: 10,
        marginVertical: 8,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
    },
    descricao: {
        textAlign: "center",
        fontWeight: 'bold',
    },
});
