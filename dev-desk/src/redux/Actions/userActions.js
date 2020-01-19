import axios from 'axios';
import decode from 'jwt-decode';
import {
  LOADING, LOGIN, SET_ERRORS, GET_USER_DETAILS, LOGOUT
} from '../types';

export const userLogin = (username, password, history) => dispatch => {
  dispatch({type: LOADING});
  axios
    
}