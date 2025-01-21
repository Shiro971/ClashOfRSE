import "../../../global.css";

import React from 'react';
import { View, Text, TouchableOpacity, Image, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IndexDropdown from '../Dropdowns/IndexDropdown'; // Make sure this is defined and imported correctly

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const navigation = useNavigation();

  return (
    <View>
      <View className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white">
        <View className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <View className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')} // Replace with your Home screen name
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              <Text>ClashOfRSE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setNavbarOpen(!navbarOpen)}
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            >
              <Text className="fas fa-bars">☰</Text> {/* Icon using text for simplicity */}
            </TouchableOpacity>
          </View>

          <View
            className={
              'lg:flex flex-grow items-center bg-white lg:bg-opacity-0'
            }
            id="example-navbar-warning"
          >
            <View className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <View className="flex items-center">
                <IndexDropdown />
              </View>

              <View className="flex items-center">
                <TouchableOpacity
                  onPress={() => console.log('Download pressed')} // Handle Download button press
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                >
                  <Text className="fas fa-arrow-alt-circle-down">↓</Text> {/* Icon using text for simplicity */}
                  <Text>Download</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
