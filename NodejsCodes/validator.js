export function length(password) {
    return password.length>=8;
}

export function hasNUmber(password){
   return /\d/.test(password);
}


export function hasSpecialCHaracter(password){
return /[!@#$%^&*(),.?":{}|<>]/.test(password);
}