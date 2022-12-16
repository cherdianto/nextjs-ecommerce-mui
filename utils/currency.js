export const currencyConverter = (money) => {
    if(money !== undefined){
        return money.toLocaleString('id-ID', {
            style: 'currency',
            currency: 'IDR'
        }).slice(0, -3)
    } else {
        console.log('parameter is undefined or null. parameter val: ' + money)
    }
}