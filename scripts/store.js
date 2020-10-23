import item from './item.js';


const items = []
const hideCheckedItems = false

function addItem (itemName){
    try{ item.validateName(itemName)  
        items.push(item.create(itemName))
    } catch(err){
        console.log(`${err.message}`)
    }
}

function findById(input){
    items.find(function(input){
        return items.id === input})
        console.log('retu is ' + retu)
        return retu
}

function findAndToggleChecked(idToCheck){
    let item = findById(idToCheck)
    console.log(item)
        //////////////
}

function findAndUpdateName(id,newName){
    try{
item.validateName(newName)
let item = findById(idToCheck)
    console.log(item)
        //////////////
}catch(err){
    console.log(`${err.message}`)
}
}

function findAndDelete(id){
    items.filter(function(id){
return items.id !== id
    })
}

  export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
  };

