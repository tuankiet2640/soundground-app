import { createSlice } from '@reduxjs/toolkit';

export const podcastSlice = createSlice({
    name: 'podcasts',
    initialState: {
        //initial state properties
    },
    reducers: {
        // reducers
    },
});

export const { /* exported actions */ } = podcastSlice.actions;

export default podcastSlice.reducer;
