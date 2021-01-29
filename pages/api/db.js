import db from "../../db.json";

export default function (resquest, response) {
	return response.json(db);
}
