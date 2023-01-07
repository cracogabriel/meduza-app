import { useFonts } from 'expo-font'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import {
  ActivityIndicator,
  Dimensions,
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { SvgXml } from 'react-native-svg'
import YoutubePlayer from 'react-native-youtube-iframe'
import { exampleVideoXml } from '../../assets/icons/svgs'

export function DetailedTraining({route, navigation}: any) {
  const [fontsLoaded] = useFonts({
    Viga: require('../../assets/fonts/Viga-Regular.ttf'),
    KantumruyProBold: require('../../assets/fonts/KantumruyPro-Bold.ttf'),
  })

  const [isPlaying, setIsPlaying] = useState(false)

  const [videoLoading, setVideoLoading] = useState(true)
  const [playing, setPlaying] = useState(false)

  const closeVideo = () => {
    setIsPlaying(false)
    setVideoLoading(true)
  }

  const youtubeVideo = () => {
    return (
      <View style={styles.youtubeVideoModal}>
        <Pressable style={styles.backgroundCloseModal} onPress={closeVideo}>
          {videoLoading && <ActivityIndicator color={'#fff'} size={35} style={{opacity: 1}} />}
        </Pressable>
        <View style={styles.opacityBackgroundModal}>
          <YoutubePlayer
            onReady={() => setVideoLoading(false)}
            height={videoLoading ? 0 : 240}
            videoId={'1zV6_0jGNys'}
            play
            webViewStyle={{
              opacity: 0.99,
            }}
            webViewProps={{
              androidLayerType: Platform.OS === 'android' && Platform.Version <= 22 ? 'hardware' : 'none',
            }}
          />
        </View>
      </View>
    )
  }

  return (
    <>
      {fontsLoaded && (
        <View style={{alignItems: 'center', backgroundColor: 'white'}}>
          {isPlaying && youtubeVideo()}
          <LinearGradient
            start={{x: 0.7, y: 0}}
            locations={[0, 0.89, 0.99]}
            colors={['#ca36be', '#629DC0', '#36A3AA']}
            style={styles.header}>
            <View style={styles.headerContent}>
              <Text style={styles.headerTitle}>Treino A</Text>
              <Pressable onPress={() => navigation.goBack()}>
                <Text style={styles.exitText}> &lt; voltar</Text>
              </Pressable>
            </View>
          </LinearGradient>

          <ScrollView style={{paddingTop: 10, marginBottom: 100}} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
              <Image source={require('../../assets/supino.png')} style={styles.exerciseImage} />
              <View style={styles.exerciseContainer}>
                <Text style={styles.exerciseTitle}>Supino Reto</Text>
                <Text style={styles.exerciseInfo}>12 repetições</Text>
                <Text style={styles.exerciseInfo}>3 séries</Text>
                <Pressable style={styles.details} onPress={() => setIsPlaying(true)}>
                  <Text style={{fontFamily: 'Viga', fontSize: 12}}>Ver exemplo</Text>
                  <SvgXml xml={exampleVideoXml}></SvgXml>
                </Pressable>
              </View>
            </View>

            <View style={styles.container}>
              <Image source={require('../../assets/supino.png')} style={styles.exerciseImage} />
              <View style={styles.exerciseContainer}>
                <Text style={styles.exerciseTitle}>Supino Reto</Text>
                <Text style={styles.exerciseInfo}>12 repetições</Text>
                <Text style={styles.exerciseInfo}>3 séries</Text>
                <Pressable style={styles.details} onPress={() => setIsPlaying(true)}>
                  <Text style={{fontFamily: 'Viga', fontSize: 12}}>Ver exemplo</Text>
                  <SvgXml xml={exampleVideoXml}></SvgXml>
                </Pressable>
              </View>
            </View>
            <View style={styles.container}>
              <Image source={require('../../assets/supino.png')} style={styles.exerciseImage} />
              <View style={styles.exerciseContainer}>
                <Text style={styles.exerciseTitle}>Supino Reto</Text>
                <Text style={styles.exerciseInfo}>12 repetições</Text>
                <Text style={styles.exerciseInfo}>3 séries</Text>
                <Pressable style={styles.details} onPress={() => setIsPlaying(true)}>
                  <Text style={{fontFamily: 'Viga', fontSize: 12}}>Ver exemplo</Text>
                  <SvgXml xml={exampleVideoXml}></SvgXml>
                </Pressable>
              </View>
            </View>
            <View style={styles.container}>
              <Image source={require('../../assets/supino.png')} style={styles.exerciseImage} />
              <View style={styles.exerciseContainer}>
                <Text style={styles.exerciseTitle}>Supino Reto</Text>
                <Text style={styles.exerciseInfo}>12 repetições</Text>
                <Text style={styles.exerciseInfo}>3 séries</Text>
                <Pressable style={styles.details} onPress={() => setIsPlaying(true)}>
                  <Text style={{fontFamily: 'Viga', fontSize: 12}}>Ver exemplo</Text>
                  <SvgXml xml={exampleVideoXml}></SvgXml>
                </Pressable>
              </View>
            </View>
            <View style={styles.container}>
              <Image source={require('../../assets/supino.png')} style={styles.exerciseImage} />
              <View style={styles.exerciseContainer}>
                <Text style={styles.exerciseTitle}>Supino Reto</Text>
                <Text style={styles.exerciseInfo}>12 repetições</Text>
                <Text style={styles.exerciseInfo}>3 séries</Text>
                <Pressable style={styles.details} onPress={() => setIsPlaying(true)}>
                  <Text style={{fontFamily: 'Viga', fontSize: 12}}>Ver exemplo</Text>
                  <SvgXml xml={exampleVideoXml}></SvgXml>
                </Pressable>
              </View>
            </View>
            <View style={styles.container}>
              <Image source={require('../../assets/supino.png')} style={styles.exerciseImage} />
              <View style={styles.exerciseContainer}>
                <Text style={styles.exerciseTitle}>Supino Reto</Text>
                <Text style={styles.exerciseInfo}>12 repetições</Text>
                <Text style={styles.exerciseInfo}>3 séries</Text>
                <Pressable style={styles.details} onPress={() => setIsPlaying(true)}>
                  <Text style={{fontFamily: 'Viga', fontSize: 12}}>Ver exemplo</Text>
                  <SvgXml xml={exampleVideoXml}></SvgXml>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  headerContent: {
    display: 'flex',
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 42,
    flexDirection: 'row',
  },
  backgroundCloseModal: {
    width: '100%',
    height: Dimensions.get('window').height + 300,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    zIndex: 2,
  },
  opacityBackgroundModal: {
    width: '100%',
    height: 240,
    position: 'absolute',
    justifyContent: 'center',
    zIndex: 3,
  },
  youtubeVideoModal: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  exerciseImage: {
    borderRadius: 10,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    height: '100%',
    width: 130,
  },
  exerciseTitle: {
    color: '#3a3a3a',
    fontFamily: 'Viga',
    fontSize: 20,
  },
  exerciseInfo: {
    color: '#3a3a3a',
    fontFamily: 'Viga',
    fontSize: 16,
  },
  details: {
    color: '#3a3a3a',
    fontSize: 14,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 5,
    marginTop: 24,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  exerciseContainer: {
    width: Dimensions.get('window').width - 200,
    marginVertical: 10,
    alignItems: 'flex-start',
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
  },
  containerTitle: {
    color: '#3a3a3a',
    fontFamily: 'Viga',
    fontSize: 16,
  },
  header: {
    width: '100%',
    height: 100,
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
    borderRadius: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#F3F3F3',
    marginVertical: 10,
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
