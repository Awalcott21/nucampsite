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

export const postComment = createAsyncThunk(
    "comments/postComment",
    async(payload, { dispatch, getState }) => {
    setTimeout(() = > { 
        const { comments } = getState();
    payload.id = comments.commentsArray.length;
    payload.date = new Date().toISOString();
    dispatch(addComment(payload));
}, 2000);
}
);



const commentsSlice = createSlice({
    name: 'comments',
    initialState: { isLoading: true, errMess: null, commentsArray: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.isLoading = false;
                state.errMess = null;
                state.commentsArray = action.payload;
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.isLoading = false;
                state.errMess = action.error
                    ? action.error.message
                    : 'Fetch failed';
            });
    }
});

export const commentsReducer = commentsSlice.reducer;