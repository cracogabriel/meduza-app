import { LinearGradient } from 'expo-linear-gradient'
import { ActivityIndicator, Image, StyleSheet } from 'react-native'

export function Loading() {
  return (
    <>
      <LinearGradient
        start={{x: 0.7, y: 0}}
        locations={[0, 0.89, 0.99]}
        colors={['#ca36be', '#629DC0', '#36A3AA']}
        style={styles.loading}>
        <Image source={require('../assets/extended-logo.png')} />
        <ActivityIndicator color={'#fff'} size={35} style={{marginTop: 10}} />
      </LinearGradient>
    </>
  )
}

const styles = StyleSheet.create({
  loading: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
