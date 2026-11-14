import React, { useState } from 'react';

import {
  View,
  Text,
  Pressable,
  ScrollView,
  StatusBar,
} from 'react-native';

import { styles } from '../styles';

interface Registro {
  id: number;
  numero: number;
  hora: string;
}

export default function Inicio() {

  const [contador, setContador] = useState(0);
  const [registros, setRegistros] = useState<Registro[]>([]);

  // Función para registrar cada clic
  const manejarClic = () => {

    const nuevoNumero = contador + 1;

    const horaActual = new Date().toLocaleTimeString('es-CO', {
      hour12: false,
    });

    const nuevoRegistro: Registro = {
      id: nuevoNumero,
      numero: nuevoNumero,
      hora: horaActual,
    };

    setContador(nuevoNumero);

    setRegistros((anteriores) => [
      nuevoRegistro,
      ...anteriores,
    ]);
  };

  return (
    <ScrollView contentContainerStyle={styles.contenedor}>

      <StatusBar
        barStyle="dark-content"
      />

      <View style={styles.tarjeta}>

        <Text style={styles.titulo}>
          Interactividad con el DOM
        </Text>

        <Text style={styles.descripcion}>
          Haz clic en el botón para incrementar el contador
          y registrar la hora exacta del evento en la tabla.
        </Text>

        <Text style={styles.contador}>
          {contador}
        </Text>

        <Pressable
          style={({ pressed }) => [
            styles.boton,
            pressed && styles.botonPresionado,
          ]}
          onPress={manejarClic}
        >
          <Text style={styles.textoBoton}>
            ¡Haz Clic Aquí!
          </Text>
        </Pressable>

        {/* Tabla de registros */}
        <View style={styles.tabla}>

          <View style={styles.filaEncabezado}>
            <Text style={styles.columna}>
              N° Clic
            </Text>

            <Text style={styles.columna}>
              Hora
            </Text>
          </View>

          {registros.length === 0 ? (

            <View style={styles.fila}>
              <Text style={styles.mensajeVacio}>
                Aún no hay clics registrados
              </Text>
            </View>

          ) : (

            registros.map((registro) => (

              <View style={styles.fila} key={registro.id}>

                <Text style={styles.dato}>
                  {registro.numero}
                </Text>

                <Text style={styles.dato}>
                  {registro.hora}
                </Text>

              </View>

            ))

          )}

        </View>

      </View>

    </ScrollView>
  );
}