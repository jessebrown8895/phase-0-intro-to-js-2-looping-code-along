const writeCards = (names, holiday) => {
    let newArray = []
    for(let i = 0; i < names.length; i++){
      
         newArray.push(`Thank you, ${names[i]}, for the wonderful ${holiday} gift!`)
    
    }
    return newArray
}

const countDown = () => {
    let count = 10 
    while(count >= 0){
       console.log(count--)
        
    }
}
