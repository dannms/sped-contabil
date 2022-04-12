import '../styles/globals.css';
import 'boxicons/css/boxicons.css';
import { Toaster } from 'react-hot-toast';
import Layout from '../components/layout';

const App = ({ Component, pageProps }) => {
	return (
		<Layout>
			<Toaster position="bottom-right" />
			<Component {...pageProps} />
		</Layout>
	);
};

export default App;
