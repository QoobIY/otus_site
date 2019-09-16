export default function loginReducer(state={show: 'login'}, action) {
    const new_state = {...state};
    switch(action.type){
        case 'SHOW_LOGIN':
            new_state.show = 'login';
            break;
        case 'SHOW_REGISTER':
            new_state.show = 'register';
            break;
    }
    return new_state;
}