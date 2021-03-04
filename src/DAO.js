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

	async getUsers() {
		let rep = {};
		await this.axios.get("users").then((response) => {
			rep = response.data["hydra:member"];
		});
		return rep;
	}

	async getUser(id) {
		let rep = {};
		await this.axios.get("users/" + id).then((response) => {
			rep = response.data;
		});
		return rep;
	}

	async getAllUsers() {
		let rep = {};
		await this.axios.get("users").then((response) => {
			rep = response.data["hydra:member"];
		});
		return rep;
	}

	async putUser(id, data) {
		let rep = {};
		await this.axios.put("users/" + id, data).then((response) => {
			rep = response.data;
		});
		return rep;	
	} 

	async getChannel(id) {
		let rep = {};
		await this.axios.get("channels/" + id).then((response) => {
			rep = response.data;
		});
		return rep;
	}

	async getChannels() {
		let rep = {};
		await this.axios.get("channels").then((response) => {
			rep = response.data["hydra:member"];
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

	async postPostIt(data) {
	    let rep = {};
	    await this.axios.post("post_its", data).then((response) => {
	      rep = response.data;
	    });
	    return rep;
	}

	async getPostIts() {
		let rep = {};
		await this.axios.get("post_its").then((response) => {
			rep = response.data["hydra:member"];
		});
		return rep;
	}

	async postMessage(data) {
	    let rep = {};
	    await this.axios.post("messages", data).then((response) => {
	      rep = response.data;
	    });
	    return rep;
	}

	async postChannels(data) {
	    let rep = {};
	    await this.axios.post("channels", data).then((response) => {
	      rep = response.data;
	    });
	    return rep;
	}

	async getMessagesByChannel(id) {
		let rep = {};
	    await this.axios.get("channels/" + id + "/messages").then((response) => {
	      rep = response.data["hydra:member"];
	    });
	    return rep;
	}
}