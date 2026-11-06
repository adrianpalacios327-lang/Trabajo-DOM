import { View, Text, StyleSheet } from "react-native";

const inicio = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        Mi primera App Movil
      </Text>
    </View>
  );
};

export default inicio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  texto: {
    color: '#000000',
  }
});