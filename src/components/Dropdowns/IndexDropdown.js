import "../../../global.css";

import React from 'react';
import { View, Text, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const IndexDropdown = () => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const navigation = useNavigation();

  const openDropdownPopover = () => setDropdownPopoverShow(true);
  const closeDropdownPopover = () => setDropdownPopoverShow(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => (dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover())}
        className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
      >
        <Text>Compte</Text>
      </TouchableOpacity>

      <Modal
        visible={dropdownPopoverShow}
        transparent={true}
        animationType="fade"
        onRequestClose={closeDropdownPopover}
      >
        <TouchableWithoutFeedback onPress={closeDropdownPopover}>
          <View className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50" />
        </TouchableWithoutFeedback>

        <View className="absolute top-12 left-0 right-0 bg-white rounded-lg shadow-lg py-2 min-w-48">
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')} // Replace 'Login' with your actual route
            className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          >
            <Text>Se connecter</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Register')} // Replace 'Register' with your actual route
            className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          >
            <Text>S'inscrire</Text>
          </TouchableOpacity>

          <View className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
        </View>
      </Modal>
    </>
  );
};

export default IndexDropdown;
