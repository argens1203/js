export function arrayDiff(_oldArr, _newArr) {
    const oldArr = _oldArr || [];
    const newArr = _newArr || [];
    const countDict = {};
    newArr.forEach(item => {
        if(item in countDict) {
            countDict[item] += 1;
        } else {
            countDict[item] = 1;
        }
    });
    oldArr.forEach(item => {
        if(item in countDict) {
            countDict[item] -= 1;
        } else {
            countDict[item] = -1;
        }
    });
    const add = [];
    const remove = [];
    for(const key in countDict) {
        if(countDict[key] > 0) {
            add.push(key);
        }
        if(countDict[key] < 0) {
            remove.push(key);
        }
    }

    return [add, remove];
}

export function removeItem (arr, item){
    const idx = arr.indexOf (item);
    if (idx === -1){
        return arr;
    }
    let arrCopy = [].concat(arr);
    arrCopy.splice (idx, 1);
    return arrCopy;
}

export function addItem (arr, item){
    if (Array.isArray(arr)){
        return [].concat(arr, [item]);
    } else {
        return [item];
    }
}

export function ensureArray (arr){
    if (Array.isArray(arr)){
        return arr;
    }
    return [];
}

export function toFormalCase (str){
    const arr = str.toString().trim().split (' ');
    return arr.map (s => `${s.substring(0, 1).toUpperCase()}${s.substring(1).toLowerCase()}`).join(' ');
}

export function parameterize (str){
    const arr = str.toString().trim().split (' ');
    return arr.map (s => s.toUpperCase()).join ('_');
}