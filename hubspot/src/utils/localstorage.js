const getdata=(key)=>{
    if(key){
        const data=localStorage.getItem(key)
        return data
    }
}

const savadata=(key,value)=>{
    if(key && value){
        localStorage.setItem(key,value)
    }
}
export {getdata,savadata}