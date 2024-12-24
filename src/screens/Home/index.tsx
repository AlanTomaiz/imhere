import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Participant } from '../../components/participant';

import { styles } from './styles';

export default function Home() {
  const participants = [
    'Alanderson Tomaiz',
    'Luana Cristina',
    'Victor Hugo',
    'Lucas Bijora',
    'Bruno Maia',
    'Andre Paizan',
    'Andressa Barbosa',
    'Antonio Carlos',
    'Bruna Bono',
    'Carlos Augusto',
    'Carlos Danilo',
    'Davi Santana',
    'Debora Castilho',
    'Diego Teixeira',
    'Felipe Pimentel',
    'Fernando Tomaiz'
  ]

  function handleParticipantAdd() {
    console.log('Click Add')
  }

  function handleRemoveParticipant() {
    console.log('Click Remove')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2024</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={[]}
        keyExtractor={item => item}
        renderItem={({ item }) => <Participant name={item} onRemove={handleRemoveParticipant} />}
        ListEmptyComponent={() => <Text style={styles.listEmptyText}>Adicione participantes a sua lista de presença.</Text>}
      />

      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map(row => <Participant name={row} onRemove={handleRemoveParticipant} />)}
      </ScrollView> */}
    </View>
  );
}
