import { useState } from "react";
import { Stack, Box, createTheme, ThemeProvider } from "@mui/material";
import Add from "../components/Add";
import Feed from "../components/Feed";
import Navbar from "../components/Navbar";
import Rightbar from "../components/Rightbar";
import Sidebar from "../components/Sidebar";
import "./App.css";

function App() {
	const [mode, setMode] = useState("light");

	const DarkTheme = createTheme({
		palette: {
			mode,
		},
	});

	return (
		<ThemeProvider theme={DarkTheme}>
			<Box bgcolor="background.default" color="text.primary">
				<Navbar />
				<Stack direction="row" justifyContent="space-between">
					<Sidebar setMode={setMode} mode={mode} />
					<Feed />
					<Rightbar />
				</Stack>
				<Add />
			</Box>
		</ThemeProvider>
	);
}

export default App;
