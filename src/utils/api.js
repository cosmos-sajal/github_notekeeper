export const api = {
	get(url) {
		return fetch(url).then((res) => res.json());
	}
};
