import actionTypes from '../constants/actionTypes'
import runtimeEnv from '@mars/heroku-js-runtime-env'

function userLoggedIn(username){
    return {
        // These will be passed into our reducer
        type: actionTypes.USER_LOGGEDIN, 
        username: username
    }
}

function logout(){
    // These will be passed into our reducer    
    return{
        type: actionTypes.USER_LOGOUT
    }
}

export function submitLogin(data){                  // when you submit a log in
    const env = runtimeEnv();                       // get the enviorment
    return dispatch =>{
        return fetch(`${env.REACT_APP_API_URL}/signin`, {       //   get the api
            method: 'POST',                                     // api method
            headers: {                                          // set headers
                'Accept': 'application/json',
                'Constent-Type': 'application/json',
            },
            body: JSON.stringify(data),                         // set body
            mode: 'cors',                                       // set mode

        }).then((response) => {                                 // when returned we will have a response
            if(!response.ok) {                                          
                throw Error(response.statusText)                // if response is not ok, throw error
            }
            return response.json()                              // return the json object
        
        }).then((res) => {                                      // if response is ok
            localStorage.setItem('username', data.username)     // set username to local storage
            localStorage.setItem('token', res.token)            // set token to the response.token

            dispatch(userLoggedIn(data.username))
        }).catch((e) => console.log(e))
    }
}


export function submitRegister(data){                           // when you submit a log in
    const env = runtimeEnv();                                   // get the enviorment
    return dispatch =>{
        return fetch(`${env.REACT_APP_API_URL}/signup`, {       //   get the api
            method: 'POST',                                     // api method
            headers: {                                          // set headers
                'Accept': 'application/json',
                'Constent-Type': 'application/json',
            },
            body: JSON.stringify(data),                         // set body
            mode: 'cors',                                       // set mode

        }).then((response) => {                                 // when returned we will have a response
            if(!response.ok) {                                          
                throw Error(response.statusText)                // if response is not ok, throw error
            }
            return response.json()                              // return the json object
        
        }).then((res) => {                                      // if response is ok
            dispatch(submitLogin(data))
        }).catch((e) => console.log(e))
    }
}


export function logoutUser() {
    return dispatch => {
        localStorage.removeItem('username')
        localStorage.removeItem('token')
        dispatch(logout())
    }
}