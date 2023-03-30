import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";

import color from "../config/color";

function UploadScreen({ onDone, uploadProgress = 0, visible }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {uploadProgress < 1
          ? <Progress.Bar
              progress={uploadProgress}
              color={color.primary}
              width={200}
            />
          : <LottieView
              style={styles.annimation}
              onAnimationFinish={onDone}
              source={require("../assets/annimations/done.json")}
              loop={false}
              autoPlay
            />}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  annimation: {
    height: 400
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  }
});

export default UploadScreen;
