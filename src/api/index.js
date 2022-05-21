import axios from "axios";
const url='https://covid19.mathdro.id/api';
export const fetchdata=async(country)=>{

    let changableURL=url;
    if(country){
        changableURL=`${url}/countries/${country}`
    }

    try{
        const {data:{confirmed,recovered,deaths,lastUpdate}}=await axios.get(changableURL);
        return {confirmed,recovered,deaths,lastUpdate}
        
    }catch(error){
        console.log(error);
    }
}
export const fetchDailydata=async()=>{
    try{
        const {data}=await axios.get(`${url}/daily`);
        const modifieddata=data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate,
        }));
        return modifieddata;
        // console.log(data);
    }catch(error){
console.log(error);
    }
} 
export const fetchcountries=async()=>{
    try{
        const {data:{ countries }}=await axios.get(`${url}/countries`)
;
        return countries.map((country)=>country.name);
    }catch(error){
        console.log(error);
    }
}