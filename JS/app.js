const isLogin = user => {
    if(user){
        return true
    }
    else{
        return false
    }
}

const registerFeature = user => {
    if(user == 'Amin'){
        return "USER"
    }
    else{
        return false
    }
}