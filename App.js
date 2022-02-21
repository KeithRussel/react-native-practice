import React, {useState} from 'react';
// import type {Node} from 'react';
import {
  Image,
  ImageBackground,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <ImageBackground
      style={styles.body}
      source={{
        uri: 'https://cdn.vox-cdn.com/thumbor/Gg1MpR0z5829nHwlFcHGVUEnV94=/0x0:1456x747/920x613/filters:focal(612x258:844x490):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69990832/https___bucketeer_e05bbc84_baa3_437e_9518_adb32be77984.s3.amazonaws.com_public_images_418f3acf_2d81_4f05_ad62_2c875ec2c33f_4463x2289.0.png',
      }}>
      <Modal
        visible={showWarning}
        transparent
        onRequestClose={() => setShowWarning(false)}
        animationType="slide"
        hardwareAccelerated>
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Text style={styles.text}>Warning!</Text>
            </View>
            <View style={styles.warning_body}>
              <Text style={styles.text}>
                The name must be longer than 3 characters
              </Text>
            </View>
            <Pressable
              onPress={() => setShowWarning(false)}
              style={styles.warning_button}
              android_ripple={{color: '#fff'}}>
              <Text style={styles.text}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text style={styles.text}>Please write your name:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="e.g. John"
        onChangeText={value => setName(value)}
      />
      {/* <Button
        title={submitted ? 'Clear' : 'Submit'}
        onPress={onPressHandler}
        color="#00f"
      /> */}
      {/* <TouchableWithoutFeedback
        onPress={onPressHandler}
        activeOpacity={0.5}
        underlayColor="#dddddd">
        <View style={styles.button}>
          <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
        </View>
      </TouchableWithoutFeedback> */}
      <Pressable
        onPress={onPressHandler}
        hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
        android_ripple={{color: '#00f'}}
        style={({pressed}) => [
          {backgroundColor: pressed ? '#dddddd' : '#00ff00'},
          styles.button,
        ]}>
        <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
      </Pressable>
      {submitted ? (
        <View style={styles.body}>
          <Text style={styles.text}>You are registered as {name}</Text>
          <Image
            source={require('./assets/done.png')}
            resizeMode="stretch"
            style={styles.image}
          />
        </View>
      ) : (
        <Image
          source={require('./assets/error.png')}
          resizeMode="stretch"
          style={styles.image}
          blurRadius={3}
        />
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
  },
  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning_button: {
    backgroundColor: '#00ffff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});

export default App;
