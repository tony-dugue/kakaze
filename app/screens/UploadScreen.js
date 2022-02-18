import React from 'react';
import {View, StyleSheet, Modal} from 'react-native'
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native'

import colors from '../config/colors'

function UploadScreen({ onDone, progress = 0, visible = 0 }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1
          ? <Progress.Bar color={colors.primary} progress={progress} width={200}/>
          : <LottieView
            source={require('../assets/animations/done.json')}
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            style={styles.animation}
          />
        }
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  animation: {
    width: 150
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default UploadScreen;
