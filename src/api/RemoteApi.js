import axios from './Axios.js';

export default async function createUser(newUserBoundary){
    try{
      const response = await axios.post('/users',JSON.stringify(newUserBoundary),{
          headers:{'Content-Type': 'application/json'},
      });
      console.log(response.data);
  
      return Promise.resolve({error:null,result:response.data});
    }catch(err){
      return Promise.resolve({error:err.message,result:null});
  
    }
  }