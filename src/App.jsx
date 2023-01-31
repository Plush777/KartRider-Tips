import React from 'react';
import GlobalStyle from './GlobalStyle';
import CommonRoute from './Routes/CommonRoute';
import './font.scss';
import Main from './components/Main';

const App = () => {
	return (
		<>
			<GlobalStyle/>
			<Main/>
			<CommonRoute/>
		</>  
	);
}

export default App;
