import "../../global.css";

import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import IndexNavbar from '../components/Navbars/IndexNavbar.js';
import Footer from '../components/Footers/Footer.js';

export default function Index() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <Text>
        <IndexNavbar fixed />
      </Text>
      <View className="relative pt-16 items-center flex h-full">
        <View className="container mx-auto items-center flex flex-wrap">
          <View className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <View className="pt-32 sm:pt-0">
              <Text className="font-semibold text-4xl text-blueGray-600">
                Relevez le défi RSE : Classez, optimisez, et devenez un leader de l’engagement responsable avec Clash of RSE !
              </Text>
              <Text className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Découvrez Clash of RSE, l'application qui transforme l'engagement RSE en un levier de performance et de collaboration.
              </Text>
              <View className="mt-12 flex-row">
                <TouchableOpacity
                  onPress={() => navigation.navigate('Login')}
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow-lg"
                >
                  <Text>Commencer maintenant</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Landing')}
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow-lg"
                >
                  <Text>En savoir plus</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Text>
            <Footer />
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
