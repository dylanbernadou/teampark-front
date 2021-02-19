import axios from "axios";
import Helper from "./Helper";
const help = new Helper();

export default class DAO {
	constructor() {
		this.axios = axios.create({
			baseURL: "https://localhost:8000/api",
			timeout: 10000,
			headers: {
				Authorization: "Bearer " + help.get_cookie("auth_token"),
				"Content-Type": "application/json"
			},
		});
	}

	async getUsers(id) {
		let rep = {};
		await this.axios.get("users/" + (id ? id : '')).then((response) => {
			rep = response.data;
		});
		return rep;
	}

	async get_auth() {
	    let rep = {};
	    await this.axios.get("get_auth/").then((response) => {
	      rep = response.data;
	    });
	    return rep;
	}

	async login(data) {
	    let rep = {};
	    await this.axios.post("login", data).then((response) => {
	      rep = response.data;
	    });
	    return rep;
	}
}