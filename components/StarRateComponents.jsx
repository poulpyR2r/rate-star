import React from 'react';
import { View } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const Rating = ({ note, maxNote }) => {
  const filledStars = Math.round(note / maxNote * 5);

  return (
    <View style={{ flexDirection: 'row' }}>
      {Array.from({ length: filledStars }).map((_, index) => (
        <FontAwesomeIcon key={`filled-${index}`} name="star" size={24} color="gold" />
      ))}
      {Array.from({ length: 5 - filledStars }).map((_, index) => (
        <FontAwesomeIcon key={`empty-${index}`} name="star-o" size={24} color="gold" />
      ))}
    </View>
  );
};

export default Rating;
