import React from "react";
import { View, Text, ImageBackground, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";

// Components
const Navbar = () => (
  <View className="w-full py-4 bg-transparent flex-row justify-center">
    <Text className="text-white text-lg font-bold">Clash of RSE</Text>
  </View>
);

const Footer = () => (
  <View className="w-full py-4 bg-gray-900">
    <Text className="text-center text-white text-sm">© 2025 Clash of RSE. All rights reserved.</Text>
  </View>
);

export default function Landing() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <Navbar />

      <ScrollView>
        {/* Hero Section */}
        <View className="relative flex-1 justify-center items-center h-[75vh]">
          <ImageBackground
            source={{
              uri: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
            }}
            resizeMode="cover"
            style={StyleSheet.absoluteFillObject}
          >
            <View className="absolute inset-0 bg-black opacity-75" />
          </ImageBackground>
          <View className="container relative mx-auto px-4">
            <Text className="text-white text-5xl font-bold text-center">Clash of RSE</Text>
            <Text className="mt-4 text-blueGray-200 text-center text-lg text-white">
              Clash of RSE est une application innovante qui permet aux entreprises de mesurer
              et d'optimiser leur score RSE (Responsabilité Sociétale des Entreprises)...
            </Text>
          </View>
        </View>

        {/* Features Section */}
        <View className="py-10 px-4 bg-gray-200">
          <View className="flex flex-row flex-wrap justify-around">
            {/* Feature Card */}
            <FeatureCard
              title="Objectif"
              color="bg-red-400"
              description="L'objectif de Clash of RSE est de permettre aux entreprises de mesurer, classer et optimiser leur score RSE..."
            />
            <FeatureCard
              title="Engagement"
              color="bg-lightBlue-400"
              description="L'engagement dans Clash of RSE concerne la participation des collaborateurs aux initiatives responsables..."
            />
            <FeatureCard
              title="QR Code"
              color="bg-emerald-400"
              description="Le QR code permettra de scanner les produits de consommation pour obtenir des informations sur leur impact..."
            />
          </View>
        </View>
      </ScrollView>

      <Footer />
    </SafeAreaView>
  );
}

const FeatureCard = ({ title, color, description }) => (
  <View className="w-full md:w-[30%] bg-white rounded-lg shadow-lg p-5 my-4">
    <View className={`w-12 h-12 ${color} rounded-full flex items-center justify-center mb-4`}>
      <Text className="text-white text-xl font-bold">{title[0]}</Text>
    </View>
    <Text className="text-xl font-semibold">{title}</Text>
    <Text className="mt-2 text-gray-600">{description}</Text>
  </View>
);
