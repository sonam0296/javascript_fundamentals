const cart = ['pants', 'watch', 'shoes']

// Creating our Promise
const createOrder = (cart) => {
    // Create a new promise which will using new keyword and a callback function with resolve & reject paramters
    const pr = new Promise((resolve, reject) => {
        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid")
            reject(err)  // Rejecting a promise if err occurs
        }
        const orderId = '123444' // having hardcoded orderId
        if (orderId) {
            // setTimeout(() => {
            resolve(orderId)
            // }, 5000)
        }
    })
    return pr
}

const validateCart = (cart) => {
    return false
}
// Consumer Part
const promise = createOrder(cart)
// console.log(promise)

promise.then((orderId) => {
    console.log(orderId)
    // proceedToPayment(orderId)
}).catch((err) => {
    console.log(err.message)
})

// Promise API's
/** Major 4 Promise API ===>>>
 *      1. Promise.all()
 *      2. Promise.allSettled()
 *      3. Promise.race()
 *      4. Promise.any()
 */


//  p1, p2, p3 here we have created dummy promises.
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P1 success')
    }, 3000)
    //setTimeout(()=>{
    //     reject('P2 reject')
    // }, 3000)
})

const p2 = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve('P2 success')
    // }, 1000)
    setTimeout(()=>{
        reject('P2 reject')
    }, 1000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P3 success')
    }, 2000)
    // setTimeout(()=>{
    //     reject('P3 reject')
    // }, 2000)
})

// -----  PROMISE.ALL() ------
Promise.all([p1,p2,p3]).then((result)=>{
    console.log(result, 'PROMISE.ALL()')
}).catch((err)=>{
    console.error(err, 'PROMISE.ALL()')
})

// -----  PROMISE.ALLSETTLED() -------
Promise.allSettled([p1, p2, p3]).then(res => console.log(res, 'PROMISE.ALLSETTLED()')).catch(err => console.error(err, 'PROMISE.ALLSETTLED()'))


// -----  PROMISE.RACE() -------
Promise.race([p1, p2, p3]).then(res => console.log(res, 'PROMISE.RACE()')).catch(err => console.error(err, 'PROMISE.RACE()'))

// -----  PROMISE.ANY() -------
Promise.any([p1, p2, p3]).then(res => console.log(res, 'PROMISE.ANY()')).catch(err => console.error(err, 'PROMISE.ANY()'))