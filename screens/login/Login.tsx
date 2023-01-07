import { useFonts } from 'expo-font'
import { LinearGradient } from 'expo-linear-gradient'

import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { emailXml, passwordXml } from '../../assets/icons/svgs'
import { Loading } from '../../components/Loading'

export function Login({route, navigation}: any) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loginLoading, setLoginLoading] = useState(false)
  const [loading, setLoading] = useState(false)

  const [fontsLoaded] = useFonts({
    UbuntuBold: require('../../assets/fonts/Ubuntu-Bold.ttf'),
    KantumruyProBold: require('../../assets/fonts/KantumruyPro-Bold.ttf'),
  })

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        navigation.navigate('Home')
        setTimeout(() => {
          setLoading(false)
          setLoginLoading(false)
        }, 2000)
      }, 2000)
    }
  }, [loading])

  if (loading) return <Loading />

  return (
    <>
      {fontsLoaded && (
        <>
          <LinearGradient
            start={{x: 0.7, y: 0}}
            locations={[0, 0.89, 0.99]}
            colors={['#ca36be', '#629DC0', '#36A3AA']}
            style={styles.header}>
            <Image source={require('../../assets/extended-logo.png')} style={styles.logo}></Image>
          </LinearGradient>
          <View style={{height: '100%', alignItems: 'center', justifyContent: 'center'}}>
            <View style={styles.container}>
              <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                  <SvgXml xml={emailXml} style={styles.icon}></SvgXml>
                  <TextInput
                    value={email}
                    style={styles.textInput}
                    placeholder={'Email'}
                    onChangeText={(value) => setEmail(value)}
                    allowFontScaling={false}
                    autoComplete='off'
                    autoCorrect={false}
                    keyboardType='email-address'
                  />
                </View>
                <View style={styles.inputContainer}>
                  <SvgXml xml={passwordXml} style={styles.icon}></SvgXml>
                  <TextInput
                    value={password}
                    style={{...styles.textInput, paddingLeft: 8}}
                    placeholder={'Senha'}
                    onChangeText={(value) => setPassword(value)}
                    allowFontScaling={false}
                    autoCorrect={false}
                    secureTextEntry={true}
                    keyboardType='default'
                  />
                </View>
                <Pressable
                  style={styles.button}
                  onPress={() => {
                    setLoginLoading(true)

                    setTimeout(() => {
                      setLoading(true)
                    }, 2000)
                  }}>
                  {loginLoading ? (
                    <ActivityIndicator color={'#fff'} size={16} />
                  ) : (
                    <Text style={styles.buttonText}>entrar</Text>
                  )}
                </Pressable>
                <Pressable style={styles.forgotPasswordButton}>
                  <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </>
      )}
      <StatusBar style='auto' />
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 290,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'absolute',
  },
  button: {
    width: Dimensions.get('window').width - 50,
    backgroundColor: '#3FA1AE',
    height: 36,
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: '55%',
    width: '95%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  inputContainer: {
    fontSize: 13,
    color: '#626262',
    width: Dimensions.get('window').width - 50,
    paddingHorizontal: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 36,
    borderRadius: 5,
    borderBottomColor: '#3fa1ae',
    borderBottomWidth: 2,
    backgroundColor: '#f8f8f8',
  },
  formContainer: {
    width: '100%',
    height: 250,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textInput: {
    paddingLeft: 4,
    paddingRight: 12,
    fontSize: 13,
    width: '100%',
  },
  logo: {
    marginLeft: 20,
    marginTop: 60,
  },
  buttonText: {
    fontFamily: 'KantumruyProBold',
    letterSpacing: 2,
    color: 'white',
  },
  forgotPasswordButton: {
    width: 'auto',
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 5,
  },
  forgotPasswordText: {
    fontFamily: 'UbuntuBold',
    color: '#3fa1ae',
  },

  icon: {},
})
