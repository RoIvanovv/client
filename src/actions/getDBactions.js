import axios from "axios";

export const getDataFromDB = async(page, filters) => {
    try {

      let res = await axios.get(`http://localhost:5000/data`,
     { params: {
          page: page,
          filters
        }}
      ).then(res=>{
        console.log(res)
        return res
      })
      
      return res
    } catch (e) {
      console.log(e)
    }
}

export const getSettings = () => {
  try{
    return axios.get(`http://localhost:5000/settings`, {})
  } catch (e) {
    console.log(e)
  }
}

