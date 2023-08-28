import axios from "axios";

export const verifyToken = async (token) => {
    try {
        const response = await axios.get('http://localhost:5000/api/verify-token', null, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error);
    }
}