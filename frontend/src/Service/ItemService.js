import axios from "axios";

// export const addItem = async (item) => {
//     return await axios.post(`http://localhost:8080/api/v1.0/admin/items`, item, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}});
// }

// export const deleteItem = async (itemId) => {
//     return await axios.delete(`http://localhost:8080/api/v1.0/admin/items/${itemId}`, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}});
// }

// export const fetchItems = async () => {
//     return await axios.get('http://localhost:8080/api/v1.0/items', {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}});
// }




const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api/v1.0";


export const addItem = async (item) => {
    return await axios.post(`${API_BASE_URL}/admin/items`, item, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}});
}

export const deleteItem = async (itemId) => {
    return await axios.delete(`${API_BASE_URL}/admin/items/${itemId}`, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}});
}

export const fetchItems = async () => {
    return await axios.get(`${API_BASE_URL}/items`, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}});
}