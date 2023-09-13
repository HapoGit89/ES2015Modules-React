function shuffle(items) {
    var j, x, i;
    for (i = items.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = items[i];
        items[i] = items[j];
        items[j] = x;
    }
    return items;
}


function remove(items, item){
    const i = items.indexOf(item)
    if (i>-1){
        items.splice(i,1)
        return items
    }
    else {
        return undefined
    }
}

export {shuffle, remove}