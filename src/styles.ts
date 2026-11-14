import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  contenedor: {
    flexGrow: 1,
    backgroundColor: '#f4f6f8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  tarjeta: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 25,
    alignItems: 'center',

    elevation: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.10,
    shadowRadius: 8,
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#343a40',
    textAlign: 'center',
    marginBottom: 15,
  },

  descripcion: {
    fontSize: 15,
    color: '#777777',
    textAlign: 'center',
    lineHeight: 23,
    marginBottom: 25,
  },

  contador: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 15,
  },

  boton: {
    backgroundColor: '#2ecc71',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 7,
    marginBottom: 25,
  },

  botonPresionado: {
    backgroundColor: '#27ae60',
    opacity: 0.8,
  },

  textoBoton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  tabla: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 8,
    overflow: 'hidden',
  },

  filaEncabezado: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },

  columna: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555555',
  },

  fila: {
    flexDirection: 'row',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
    alignItems: 'center',
  },

  dato: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    color: '#555555',
  },

  mensajeVacio: {
    flex: 1,
    textAlign: 'center',
    color: '#999999',
    fontSize: 13,
  },

});