import axios from 'axios'

const {REACT_APP_CONVERSION_DATA_API_KEY:API_KEY, REACT_APP_API_URL:API_URL} = process.env;
export default class ApiService<Class> {
    async getCityCode(name:string) {
            try {
                if (name) {
                    const response = await axios.get(`${API_URL}weather?q=${name}&appid=${API_KEY}`)
                    return response.data.id;
                }
            }catch (error) {
                console.log("error in getCityCode")
                return null
            }
    }

    async getWeather(codes:number[]) {
        try {
            if(codes && codes.length > 0) {
                const response = await axios.get(`${API_URL}group?id=${codes.join(',')}&appid=${API_KEY}&units=metric`);
                return response.data.list;
            }
        }catch {
            return null
        }
        

    }
}