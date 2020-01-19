import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import wellsReducer from './wells.reducer';
import wellDetailsReducer from './wellDetails.reducer';
import loaderReducer from './loader.reducer';

export default combineReducers({
    user: userReducer,
    wells: wellsReducer,
    well: wellDetailsReducer,
    loader: loaderReducer,
});
