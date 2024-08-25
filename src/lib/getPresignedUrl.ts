import axios from 'axios'
export const getPreSignedUrl=async()=>{
    const url=await axios.post('http://localhost:8080/upload')
    console.log(url);
    
    return url
}