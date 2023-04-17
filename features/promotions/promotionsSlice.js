import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';
import { db } from '../../firebase.config';
import { collection, getDocs } from 'firebase/firestore';

export const fetchCampsites = createAsyncThunk(
    'campsites/fetchCampsites',
    async () => {
       const querySnapshot = await getDocs(collection(db, 'campsites'));
       const campsites = [];
       querySnapshot.forEach((doc) => {
        campsites.push(doc.data());
       });
       return campsites;
    }

const promotionsSlice = createSlice({
    name: 'promotions',
    initialState: { isLoading: true, errMess: null, promotionsArray: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPromotions.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchPromotions.fulfilled, (state, action) => {
                state.isLoading = false;
                state.errMess = null;
                state.promotionsArray = action.payload;
            })
            .addCase(fetchPromotions.rejected, (state, action) => {
                state.isLoading = false;
                state.errMess = action.error
                    ? action.error.message
                    : 'Fetch failed';
            });
    }
});

export const promotionsReducer = promotionsSlice.reducer;