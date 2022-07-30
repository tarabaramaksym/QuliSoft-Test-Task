import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  images: null,
  selectedImage: null
}

export const imagesSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    setImages: (state, action) => {
      state.images = action.payload;
    },
    setSelectedImage: (state, action) => {
      state.selectedImage = action.payload;
    }
  }
});

export const { setImages, setSelectedImage } = imagesSlice.actions;

export const selectImages = (state) => state.images.images;
export const selectSelectedImage = (state) => state.images.selectedImage;

export default imagesSlice.reducer;