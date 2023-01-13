const fnAsync = () => {
    return new Promise((res, reg) => {
        (true)
        ? setTimeout(() => res('Async Working'), 3000)
        : reg(new Error('Test Error'))
    })
}

const fnAsyncAwait = async () => {
    const hello = await fnAsync()
    console.log(hello)
    console.log('Async Await Working')
}

console.log('Before')
fnAsyncAwait()
console.log('After')