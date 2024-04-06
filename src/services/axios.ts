import axios from "axios";

export const getDataPeople = async () => {
	const response = await axios({
		method: "get",
		url: "https://randomuser.me/api/?results=2",
	});

	console.log(response.data);
	return response.data;
};
