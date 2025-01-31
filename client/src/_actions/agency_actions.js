import axios from "axios";
import { response } from "express";
import {
    LOGIN_AGENCY, REGISTER_AGENCY, AUTH_AGENCY
} from './types'

export function loginAgency(dataToSubmit){
    const request = axios.post('/api/agency/login', dataToSubmit)
        .then(response => response.data)
    
    return {
        type: LOGIN_AGENCY,
        payload: request
    }
}

export function registerAgency(dataToSubmit){
    const request = axios.post('/api/agency/register',dataToSubmit)
        .then(response => response.data)
    return {
        type: REGISTER_AGENCY,
        payload: request
    }
}

export function auth(){
    const request = axios.get('./api/agency/auth')
        .then(response => response.data)
    return {
        type: AUTH_AGENCY,
        payload: request
    }
}







