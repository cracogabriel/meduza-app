import { useFonts } from 'expo-font'
import { LinearGradient } from 'expo-linear-gradient'
import { Dimensions, Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

export function Home({route, navigation}: any) {
  const [fontsLoaded] = useFonts({
    Viga: require('../../assets/fonts/Viga-Regular.ttf'),
    KantumruyProBold: require('../../assets/fonts/KantumruyPro-Bold.ttf'),
  })

  const greetingMessage = () => {
    const actualTime = new Date().getHours()
    if (actualTime <= 5) return 'Boa madrugada'
    if (actualTime < 12) return 'Bom dia'
    if (actualTime < 18) return 'Boa tarde'
    return 'Boa noite'
  }

  const handleWhatsApp = () => {
    Linking.openURL(`whatsapp://send?phone=+5544991133921`)
  }

  return (
    <>
      {fontsLoaded && (
        <View style={{alignItems: 'center', backgroundColor: 'white'}}>
          <LinearGradient
            start={{x: 0.7, y: 0}}
            locations={[0, 0.89, 0.99]}
            colors={['#ca36be', '#629DC0', '#36A3AA']}
            style={styles.header}>
            <View style={styles.headerContent}>
              <Pressable onPress={() => navigation.goBack('Login')}>
                <Text style={styles.exitText}> &lt; sair</Text>
              </Pressable>
              <Text style={styles.headerTitle}>{greetingMessage()} Gabriel</Text>
            </View>
          </LinearGradient>

          <View
            style={{
              height: Dimensions.get('window').height - 90,
              justifyContent: 'flex-start',
              marginVertical: 10,
            }}>
            <View style={styles.container}>
              <Text style={styles.containerTitle}>qual o treino de hoje?</Text>
              <ScrollView
                style={styles.contentContainer}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                horizontal>
                <Pressable style={{...styles.training, marginLeft: 10}} onPress={() => navigation.navigate('Details')}>
                  <Text style={styles.trainingTitle}>A</Text>
                </Pressable>
                <Pressable style={styles.training} onPress={() => navigation.navigate('Details')}>
                  <Text style={styles.trainingTitle}>B</Text>
                </Pressable>
                <Pressable style={styles.training} onPress={() => navigation.navigate('Details')}>
                  <Text style={styles.trainingTitle}>C</Text>
                </Pressable>
                <Pressable style={{...styles.training, marginRight: 10}} onPress={() => navigation.navigate('Details')}>
                  <Text style={styles.trainingTitle}>D</Text>
                </Pressable>
              </ScrollView>
            </View>

            <Pressable style={styles.button} onPress={handleWhatsApp}>
              <Text style={styles.buttonText}>contatar academia dos frangos</Text>
            </Pressable>
          </View>
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  headerContent: {
    display: 'flex',
    marginLeft: 20,
    marginTop: 60,
    flexDirection: 'column',
  },
  training: {
    width: 90,
    height: 90,
    marginHorizontal: 5,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#3FA1AE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  trainingTitle: {
    color: 'white',
    fontFamily: 'Viga',
    fontSize: 22,
  },
  button: {
    width: Dimensions.get('window').width - 40,
    backgroundColor: '#3FA1AE',
    height: 32,
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontFamily: 'KantumruyProBold',
    letterSpacing: 2,
    color: 'white',
    marginBottom: 2,
  },
  headerTitle: {
    color: 'white',
    fontFamily: 'Viga',
    fontSize: 24,
  },
  exitText: {
    color: 'white',
    fontFamily: 'Viga',
    fontSize: 14,
    marginBottom: 8,
  },
  containerTitle: {
    color: '#3a3a3a',
    fontFamily: 'Viga',
    fontSize: 16,
    marginBottom: 4,
  },
  header: {
    width: '100%',
    height: 150,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    top: 0,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  container: {
    width: Dimensions.get('window').width - 40,
    height: 140,
    justifyContent: 'center',
  },
  contentContainer: {
    display: 'flex',
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
    width: '100%',
    height: 100,
    flexDirection: 'row',
  },
})
