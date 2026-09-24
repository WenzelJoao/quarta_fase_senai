import { api } from "./api";

export async function register(name: String, email: String, password: String) {
    const response = await api.post("/register", {
        
    })
}