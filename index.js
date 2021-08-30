
// High Order functions
//---- filter
const array_list  = [{
    id: 1, age: 20
}, {
    id: 10, age: 5
}]
const get_list = array_list.filter(function(value){
    if(value.age > 5){
        return true
    }else{
        return false
    }
    

})
//console.log(get_list)




// --- map
const get_map = array_list.map( user => {
    return user.age <= 5
})
//console.log(get_map)


// --- reduce
const get_reduce = array_list.reduce((previous, current_value) => {

        //if(current_value.age > 5){
          
          //  return current_value
         // accumulator.age = current_value.age
         // console.log(previous)
         // accumulator.push(current_value)
         // console.log(accumulator)

       // }
       let aa = previous.age + current_value.age
      //console.log(aa)
      //return {age: aa}
       return {id: 44, age: aa}


      


}, {id: 0, age: 0})
//console.log(get_reduce)

//--- sor
const sort = [1, 3, 6, 4, 45, 23, 90, 2].sort((a, b) => {
    return b - a

})
console.log(sort)
