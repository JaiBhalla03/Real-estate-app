import axios from 'axios';

export const baseUrl='https://bayut.p.rapidapi.com'

export const fetchApi=async(url)=>{
    const {data}=await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '10b7e90887mshe59dfda4b842182p1b0e30jsn807bfeaee568',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });
    
    return data;
}