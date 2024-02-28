const ahmed = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let id = [1,2,3,4,5];
            resolve(id);
            reject("Error is happaned");
        }, 2000)
});

const getBiodata = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout((indexdata)=>{
            let biodata = {
                name : 'Ahmed Farhad',
                age : 24,
            }
            resolve(`My name is ${biodata.name}. I am ${biodata.age}. My id is ${indexdata}.`)
        }, 2000, indexdata)
    })
}

ahmed.then((roll)=>{
    console.log(roll)
}).catch((err)=>{
    console.log(err)
})