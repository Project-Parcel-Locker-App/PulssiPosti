export const userLoaginStatus = () =>{
    const jwtToken = localStorage.getItem("jwtToken");
    if(jwtToken){
        return true
    }else{
        return false
    }
}