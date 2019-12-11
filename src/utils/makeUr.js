export default (path) => {
	const base = process.env.REACT_APP_BASE_URL;
	const uri = `${base}${path}`;
	return uri;
};
