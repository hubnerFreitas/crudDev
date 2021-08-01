import http from "../http-common";

class DevDataService {
  getAll() {
    return http.get("/getAll");
  }

  get(id) {
    return http.get(`/getById/${id}`);
  }

  create(data) {
    return http.post("/create", data);
  }

  update(id, data) {
    return http.put(`/update/${id}`, data);
  }

  delete(id) {
    return http.delete(`/delete/${id}`);
  }
}

export default new DevDataService();
