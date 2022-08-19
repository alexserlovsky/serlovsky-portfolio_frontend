import qs from "qs";
import apiUrl from "./apiUrl";
import axios from 'axios';

export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
    const mergedOptions = {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };
  
    //Build request URL and Get Api
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${apiUrl(`${path}${queryString ? `?${queryString}` : ""}`)}`;
    const response =  await axios.get(requestUrl, mergedOptions);
    if(response.statusText!='OK'){
      try{
        console.error(response.statusText);
      }
      catch{
        throw new Error(`An error occured please try again`);
      }
    };
    const data = await response.data;
    return data;
  }