import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { fetchImages } from '../api/images'
import { useDispatch, useSelector } from 'react-redux'
import { selectImages, setImages } from '../redux/slices/imagesSlice'
import Loader from './Loader'
import ImageCard from './ImageCard'

const ImageList = ({ navigation }) => {

  const dispatch = useDispatch();
  const images = useSelector(selectImages);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchImages();
      dispatch(setImages(data))
    }
    fetchData();
  }, []);

  const renderImages = () => {
    return images.map((image) => {
      return <ImageCard key={image.id} image={image} navigation={navigation} />
    })
  }

  if (images == null) {
    return <Loader />
  }

  return (
    <ScrollView>
      <View style={styles.imagesContainer}>
        {renderImages()}
      </View>
    </ScrollView>



  );
}

const styles = StyleSheet.create({
  imagesContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16
  }
});

export default ImageList;