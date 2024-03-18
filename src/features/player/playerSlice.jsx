import { createSlice } from '@reduxjs/toolkit';

export const playerSlice = createSlice({
    name: 'player',
    initialState: {
        currentSong: null,
        isPlaying: false,
    },
    reducers: {
        playSong: (state, action) => {
            state.currentSong = action.payload;
        },
    },
});

export const { playSong } = playerSlice.actions;

export default playerSlice.reducer;
