const shopping_list = [
    "leche",
    "huevos",
    "pan",
    "pan integran",
    "pan con mantequilla",
    "harina",
    "cereales",
    "carne"
];

//Create
function addItem(item){
    shopping_list.push(item);
}

//Read
function getList(){
    return shopping_list;
}

//Update
function updateItem(index, newItem){
    shopping_list[index] = newItem;
}

//Delete
function deleteItem(itemName){
    const index = shopping_list.indexOf(itemName);
    if(index !== -1){
        shopping_list.splice(index, 1);
    }
}

module.exports = {
    addItem,
    getList,
    updateItem,
    deleteItem
}