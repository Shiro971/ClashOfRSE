import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';

export default function Footer() {
  return (
    <View className="bg-blueGray-200 pt-8 pb-6">
      {/* Decorative SVG equivalent */}
      <View className="w-full absolute bottom-0 left-0 right-0 h-20 -mt-20">
        {/* You can replace the svg-like decoration with a static image or other visual decorations */}
      </View>
      
      {/* Main content */}
      <View className="container mx-auto px-4">
        <View className="flex flex-wrap text-center lg:text-left">
          {/* First Column */}
          <View className="w-full lg:w-6/12 px-4">
            <Text className="text-3xl font-semibold">Let's keep in touch!</Text>
            <Text className="text-lg mt-0 mb-2 text-blueGray-600">
              Find us on any of these platforms, we respond 1-2 business days.
            </Text>
            <View className="mt-6 lg:mb-0 mb-6 flex flex-row justify-center">
              <TouchableOpacity
                onPress={() => Linking.openURL('https://twitter.com')}
                className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              >
                <Ionicons name="logo-twitter" size={24} color="lightblue" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Linking.openURL('https://facebook.com')}
                className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              >
                <FontAwesome name="facebook-square" size={24} color="lightblue" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Linking.openURL('https://dribbble.com')}
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              >
                <FontAwesome name="dribbble" size={24} color="pink" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Linking.openURL('https://github.com')}
                className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              >
                <FontAwesome name="github" size={24} color="gray" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Second Column */}
          <View className="w-full lg:w-6/12 px-4">
            <View className="flex flex-wrap items-top mb-6">
              <View className="w-full lg:w-4/12 px-4 ml-auto">
                <Text className="uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</Text>
                <View>
                  <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.creative-tim.com/presentation')}
                    className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  >
                    <Text>About Us</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => Linking.openURL('https://blog.creative-tim.com')}
                    className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  >
                    <Text>Blog</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.github.com/creativetimofficial')}
                    className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  >
                    <Text>Github</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => Linking.openURL('https://www.creative-tim.com/bootstrap-themes/free')}
                    className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  >
                    <Text>Free Products</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View className="w-full lg:w-4/12 px-4">
                <Text className="uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</Text>
                <View>
                  <TouchableOpacity
                    onPress={() => Linking.openURL('https://github.com/creativetimofficial/notus-react/blob/main/LICENSE.md')}
                    className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  >
                    <Text>MIT License</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => Linking.openURL('https://creative-tim.com/terms')}
                    className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  >
                    <Text>Terms & Conditions</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => Linking.openURL('https://creative-tim.com/privacy')}
                    className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  >
                    <Text>Privacy Policy</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => Linking.openURL('https://creative-tim.com/contact-us')}
                    className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                  >
                    <Text>Contact Us</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Footer Bottom */}
        <View className="my-6 border-blueGray-300" />
        <View className="flex flex-wrap items-center md:justify-between justify-center">
          <View className="w-full md:w-4/12 px-4 mx-auto text-center">
            <Text className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © {new Date().getFullYear()} Notus React by{' '}
              <TouchableOpacity
                onPress={() => Linking.openURL('https://www.creative-tim.com')}
              >
                <Text className="text-blueGray-500 hover:text-blueGray-800">
                  Creative Tim
                </Text>
              </TouchableOpacity>
              .
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
