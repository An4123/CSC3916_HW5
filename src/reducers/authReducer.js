import constants from '../constants/actionTypes'


var initalState = {
    loggedIn: localStorage.getItem('token') ? true: false,                                  // if there is a token then true, else false
    username: localStorage.getItem('username') ? localStorage.getItem('username') : ''      // is there a username, else false
}

const authReducer = (state = initalState, action) => {
    let updated = Object.assign({}, state)

    switch(action.type){                             // switch statment based on action.type
        case constants.USER_LOGGEDIN:                // if constant.USER_LOGGEDIN
            updated['loggedIn'] = true               // set logged in to true
            updated['username'] = action.username    // set the user name to the action.username
            return updated                       // return 'updated' objected


        case constants.USER_LOGOUT:                  // if constant.USER_LOGOUT
            updated['loggedIn'] = false              // set logged in to true
            updated['username'] = ''                 // set the user name to the action.username
            return updated                       // return 'updated' objected

        default:                                     // Default is to just return the state for now
            return state

    }

}

export default authReducer