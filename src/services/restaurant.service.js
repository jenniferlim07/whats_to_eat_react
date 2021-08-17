// import http from "../http-common";
import axiosInstance from '../axios';

class RestaurantDataService {
    getAll() {
        // return http.get("/restaurants");
        return axiosInstance.get("/api/restaurant/")
    }

    get(id) {
        // return http.get(`/restaurants/${id}`);
        return axiosInstance.get(`/restaurants/${id}`);
    }

    create(data) {
        // return http.post("/restaurants", data);
        return axiosInstance.post("/restaurants", data);
    }

    update(id, data) {
        // return http.put(`/restaurants/${id}`, data);
        return axiosInstance.put(`/restaurants/${id}`, data);
    }

    delete(id) {
        // return http.delete(`/restaurants/${id}`);
        return axiosInstance.delete(`/restaurants/${id}`);
    }

    // deleteAll() {
    //     return http.delete("/restaurants");
    // }
    findByCity(city) {
        // return http.get(`/restaurants?city=${city}`);
        return axiosInstance.get(`/restaurants?city=${city}`);
    }

    getAllCities() {
        // return http.get("/restaurants/city")
        return axiosInstance.get("/restaurants/city")
    }

    createCuisine(data) {
        return axiosInstance.post('/api/cuisine/', data)
    }

    getAllCuisines() {
        // return http.get("/tutorial");
        // return axiosInstance.get("/api/cuisine/")
        return axiosInstance.get("/cuisines")
    }

    // updateCuisine(id, data) {
    //     // return http.put(`/tutorial/${id}`, data);
    //     return axiosInstance.put(`/cuisines/${id}`, data)
    // }

    getCuisine(id) {
        // return http.get(`/restaurants/${id}`);
        return axiosInstance.get(`api/cuisine/${id}`);
    }

    getRestaurants(id) {
        // return http.get(`/restaurants/${id}`);
        return axiosInstance.get(`/cuisines/${id}`);
    }

    deleteCuisine(id) {
        // return http.delete(`/restaurants/${id}`);
        return axiosInstance.delete(`/cuisines/${id}`);
    }
}

export default new RestaurantDataService();