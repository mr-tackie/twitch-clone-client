import {types} from './types';

export const signIn = (id) => {
    return {
        type: types.SIGN_IN,
        payload : {
            userId : id
        }
    }
}

export const signOut = () => {
    return {
        type: types.SIGN_OUT
    }
}