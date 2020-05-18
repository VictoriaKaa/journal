
export const required = value => {
    if (value) return undefined;
    return "Field is required";
}

export const month = value => {
    if (+value >= 1 && +value <= 12) return undefined;
    return "Incorrect month";
}
export const year2000 = value => {
    if (+value >= 2000 && +value <= 3000) return undefined;
    return "Incorrect year";
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value)
        if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}
