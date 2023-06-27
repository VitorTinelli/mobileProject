import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { database } from '../fb';
import NewsItem from './NewsItem';
import FullNews from './FullNews';

export default function News({ navigation }) {
  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    const collectionRef = collection(database, 'news'); 
    const q = query(collectionRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const updatedNews = querySnapshot.docs.map((doc) => doc.data());
      setNews(updatedNews);
    });

    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <Text> Noticias: </Text>
      {news.map((item, index) => (
        <View key={index} style={styles.newsContainer}>
          <Text style={styles.newsText}>{item.title}</Text>
          <Text style={styles.newsText}>{item.content}</Text>
          
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd2d2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  newsContainer: {
    marginBottom: 20,
  },
  newsText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
