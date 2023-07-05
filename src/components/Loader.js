import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { THEME_COLOR } from '../utilities/Color';

const Loader = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="50%" color={THEME_COLOR} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Loader;
