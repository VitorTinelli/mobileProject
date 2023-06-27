import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { collection, addDoc, onSnapshot, query, where } from 'firebase/firestore';
import { database } from '../fb';

const FullNews = ({ newsItem }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const q = query(collection(database, 'comments'), where('newsId', '==', newsItem.id));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const updatedComments = querySnapshot.docs.map((doc) => doc.data());
      setComments(updatedComments);
    });

    return unsubscribe;
  }, [newsItem]);

  const addComment = async () => {
    if (newComment.trim() !== '') {
      const comment = {
        newsId: newsItem.id,
        comment: newComment.trim(),
      };
      await addDoc(collection(database, 'comments'), comment);
      setNewComment('');
    }
  };

  return (
    <View>
      <Text>{newsItem.title}</Text>
      <Text>{newsItem.content}</Text>
      <Text>Comentários:</Text>
      {comments.map((comment, index) => (
        <Text key={index}>{comment.comment}</Text>
      ))}
      <TextInput value={newComment} onChangeText={setNewComment} />
      <Button title="Adicionar Comentário" onPress={addComment} />
    </View>
  );
};

export default FullNews;
