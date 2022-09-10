import { Dropdown } from 'flowbite-react';

function Index() {
	return (
		<Dropdown label="Dropdown button">
			<Dropdown.Item>Dashboard</Dropdown.Item>
			<Dropdown.Item>Settings</Dropdown.Item>
			<Dropdown.Item>Earnings</Dropdown.Item>
			<Dropdown.Item>Sign out</Dropdown.Item>
		</Dropdown>
	);
}

export default Index;
