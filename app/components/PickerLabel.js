import React from "react";
import { TouchableOpacity } from "react-native";
import AppText from "./AppText";

function PickerLabel({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={{ padding: 20 }}>
        {label}
      </AppText>
    </TouchableOpacity>
  );
}

export default PickerLabel;
