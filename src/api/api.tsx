import { useState, useEffect } from 'react';
const BASE_URL = 'https://rickandmortyapi.com/api/';
export const useFetch = END => {
	const [data, setData] = useState([]);
	const [loanding, setLoanding] = useState(true);
	const [error, setError] = useState(false);
	const [detaiError, setErrorDetail] = useState([]);

	useEffect(() => {
		fetch(BASE_URL + END, {
			method: 'GET',
		})
			.then(response => response.json())
			.then(data => setData(data))
			.catch(error => {
				console.log(error);
				setError(true);
				setErrorDetail(error);
			})
			.finally(() => setLoanding(false));
	}, []);

	return { data, loanding, error, detaiError, setData };
};

export const useFecthAwait = async END => {
	const res = await fetch(BASE_URL + END);
	const json = await res.json();
	return { json };
};
