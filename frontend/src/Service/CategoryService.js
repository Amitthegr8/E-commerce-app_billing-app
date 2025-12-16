import axios from "axios";

// export const addCategory = async (category) => {
//     return await axios.post('http://localhost:8080/api/v1.0/admin/categories', category, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}});
// }

// export const deleteCategory = async (categoryId) => {
//     return await axios.delete(`http://localhost:8080/api/v1.0/admin/categories/${categoryId}`, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}});
// }

// export const fetchCategories = async () => {
//     return await axios.get('http://localhost:8080/api/v1.0/categories', {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}});
// }


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api/v1.0";


export const addCategory = async (category) => {
    return await axios.post(`${API_BASE_URL}/admin/categories`, category, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}});
}

export const deleteCategory = async (categoryId) => {
    return await axios.delete(`${API_BASE_URL}/admin/categories/${categoryId}`, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}});
}

export const fetchCategories = async () => {
    return await axios.get(`${API_BASE_URL}/categories`, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}});
}



