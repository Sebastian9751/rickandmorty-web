import { useFetch } from './api/api';
function App() {
	const { data, loanding } = useFetch('character');

	return (
		<>
			{console.log(data.results)}
			<div>
				{loanding && <div>cargando </div>}
				{data?.results?.map(ch => (
					<div>
            <h3>{ch.name}</h3>
            <img src={ch.image}/>          
          </div>
				))}
			</div>
		</>
	);
}

export default App;
