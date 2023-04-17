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

const partnersSlice = createSlice({
    name: 'partners',
    initialState: { isLoading: true, errMess: null, partnersArray: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPartners.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchPartners.fulfilled, (state, action) => {
                state.isLoading = false;
                state.errMess = null;
                state.partnersArray = action.payload;
            })
            .addCase(fetchPartners.rejected, (state, action) => {
                state.isLoading = false;
                state.errMess = action.error
                    ? action.error.message
                    : 'Fetch failed';
            });
    }
});

export const partnersReducer = partnersSlice.reducer;