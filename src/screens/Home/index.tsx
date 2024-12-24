import { useState } from 'react';
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Participant } from '../../components/participant';

import { styles } from './styles';

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert('Wool!', 'Esse participante já foi adicionado a sua lista!')
    }

    setParticipants(prev => [...prev, participantName])
    setParticipantName('')
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert(
      'Atenção!',
      `Tem certeza que deseja remover o participante ${name} da lista?`,
      [
        {
          text: 'SIM',
          onPress: () => setParticipants(prev => prev.filter(row => row !== name))
        },
        {
          text: 'NÃO'
        }
      ]
    )
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
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Participant name={item} onRemove={() => handleRemoveParticipant(item)} />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Adicione participantes a sua lista de presença.</Text>
        )}
      />

      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map(row => <Participant name={row} onRemove={handleRemoveParticipant} />)}
      </ScrollView> */}
    </View>
  );
}
