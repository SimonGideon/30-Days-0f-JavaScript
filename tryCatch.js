const converToKsh = (dollar) => {
    if (typeof dollar === 'number') {
        return dollar * 119
    } else {
        throw Error('Amount needs to be in number')
    }
}

try {
    const myValue = converToKsh('five')
    console.log(myValue)
} catch (error) {
    console.log(error);
}
console.log("I will not run if the crushes")



