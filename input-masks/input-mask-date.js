// Call on 'onChange' of <input/>
const applyInputMask = (newValue = '') => {
    if (!newValue.match(/^[0-9/]*$/)){
        return newValue;
    }

    if (newValue.length < (dateString || '').length){
        return newValue;
    }

    const separator = '/';
    let [dd, mm, yyyy] = newValue.split(separator);

    // Handle dd
    if (Number(dd) <= 9){
        if (Number(dd) >= 4 || newValue.includes(separator)){
            dd = `0${Number(dd)}`;
        }
    }
    if (dd?.length > 2){
        dd = dd.slice(0, 2);
        mm = dd.slice(2);
    }
    // Apply min/max
    if (Number(dd) >= 31){
        dd = '31';
    }
    if (Number(dd) <= 0 && mm !== undefined){
        dd = '01';
    }

    // Handle mm
    if (Number(mm) <= 9){
        if (Number(mm) >= 2 || countChar(newValue, separator) > 1){
            mm = `0${Number(mm)}`;
        }
    }
    if (mm?.length > 2){
        mm = mm.slice(0, 2);
        yyyy = mm.slice(2);
    }
    // Apply min/max
    if (Number(mm) >= 12){
        mm = '12';
    }
    if (Number(mm) <= 0 && yyyy !== undefined){
        mm = '01';
    }

    // Append separator at appropriate times
    let ret = [dd, mm, yyyy].filter(s => !!s).join(separator);
    if (ret.length === 2 || ret.length === 5){
        ret = ret + separator;
    }
    return ret;
}