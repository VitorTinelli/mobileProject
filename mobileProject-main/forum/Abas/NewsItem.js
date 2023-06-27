import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const NewsItem = ({ newsItem, onPress }) => {
  return (
    <SafeAreaView>
      
      <Text>{}</Text>
      <Text>{}</Text>
      <TouchableOpacity onPress={() => onPress(newsItem)}>
        <Text>Leia Mais</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
  );
};

export default NewsItem;
