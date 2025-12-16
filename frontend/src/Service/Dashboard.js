// import axios from "axios";

// export const fetchDashboardData = async () => {
//     return await axios.get("http://localhost:8080/api/v1.0/dashboard", {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});
// }




// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api/v1.0";

// export const fetchDashboardData = async () => {
//     return await axios.get("${API_BASE_URL}/dashboard", {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});
// } // incorrect double quotes not to be used


import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api/v1.0";

export const fetchDashboardData = async () => {
    return await axios.get(`${API_BASE_URL}/dashboard`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    });
}