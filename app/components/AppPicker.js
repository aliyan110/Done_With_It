import React, { useState } from "react";
import { Button, FlatList, Modal, TextInput, TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import color from "../config/color";
import AppText from "./AppText";
import PickerLabel from "./PickerLabel";
import Screen from "./Screen";

function AppPicker({
  iconName,
  iconSize = 40,
  iconColor = color.meduimGrey,
  placeholder,
  items,
  numColumns,
  onSelectItem,
  selectedItem,
  width='100%',
  PickerItemType = PickerLabel,
  
}) {
    const[visible, setVisible]  = useState(false)
  return (
    <>
    <TouchableWithoutFeedback onPress={()=> setVisible(true)}>
    <View
      style={{
        width: width,
        borderRadius: iconSize,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: color.lightGrey,
        padding: 10,
        marginVertical: 10
      }}
    >
      <MaterialCommunityIcons
        name={iconName}
        size={iconSize}
        color={iconColor}
      />
        {selectedItem ? (<AppText style={styles.item}>{selectedItem.label}</AppText>):(<AppText style={styles.placeholder}>{placeholder}</AppText>)}
      <MaterialCommunityIcons
        name="chevron-down"
        size={20}
        color={color.meduimGrey}
      />
    </View>
    </TouchableWithoutFeedback>
    <Modal visible={visible} animationType='slide'>
        <Screen>
        <Button style={styles.closeButton} title="Close" onPress={()=> setVisible(false)} color={color.primary}/>
        <FlatList
        data={items}
        numColumns={numColumns}
        keyExtractor={(item) => item.value.toString()}
        renderItem={({item})=>(
            <PickerItemType
            item={item}
            label={item.label}
            onPress={()=>{
                setVisible(false);
                onSelectItem(item);

            }}/>
        )}/>
        </Screen>
    </Modal>
    </>
  );
}

const styles = StyleSheet.create({
    item:{
        flex: 1,
        marginLeft: 10 
    },
    placeholder:{
        color: color.meduimGrey,
        flex:1,
    },
})

export default AppPicker;
