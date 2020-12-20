function getUserInfo(e){
    e.preventDefault();
    console.log(e.srcElement)
    console.log(e.srcElement.userName.value)
    console.log(e.srcElement.userAge.value)
    let name = e.srcElement.userName.value
    let age = e.srcElement.userAge.value
    alert( "Привет,"+ name +", тебе"+ age+"лет!")

}
userInfo.addEventListener('submit', getUserInfo)

