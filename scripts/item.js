function validateName(name){
    if(name===''||name===false||name===undefined){
        throw new TypeError("Cannot add item: Name must not be blank")
    }
}

function create (name){
    let retu = {}
    retu.id=cuid()
    retu.name= name
    retu.checked=false
return retu
}


  export default {
      validateName,
      create,
  };