import logo from './logo.svg';
import './App.css';

interface appProps {
	subject: string;
}

function App(props: appProps) {
	const subject = "React";
	console.log(props);
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Hello, {props.subject}!!
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}
export default App;
