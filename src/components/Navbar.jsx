import { useState } from "react";
import {
	AppBar,
	Tooltip,
	styled,
	Toolbar,
	Typography,
	Box,
	IconButton,
	InputBase,
	Badge,
	Avatar,
	Menu,
	MenuItem,
	ListItemIcon,
	Divider,
} from "@mui/material";
import {
	PersonAdd,
	Settings,
	Logout,
	TravelExplore,
	Mail,
	Notifications,
} from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
	display: "flex",
	justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
	backgroundColor: "white",
	padding: "0 10px",
	borderRadius: theme.shape.borderRadius,
	width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
	backgroundColor: "primary",
	display: "none",
	alignItems: "center",
	gap: "18px",
	[theme.breakpoints.up("sm")]: {
		display: "flex",
	},
}));

const UserBox = styled(Box)(({ theme }) => ({
	backgroundColor: "primary",
	display: "flex",
	alignItems: "center",
	gap: "10px",
	[theme.breakpoints.up("sm")]: {
		display: "none",
	},
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
	"& .MuiBadge-badge": {
		backgroundColor: "#44b700",
		color: "#44b700",
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
		"&::after": {
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			borderRadius: "50%",
			animation: "ripple 1.2s infinite ease-in-out",
			border: "1px solid currentColor",
			content: '""',
		},
	},
	"@keyframes ripple": {
		"0%": {
			transform: "scale(.8)",
			opacity: 1,
		},
		"100%": {
			transform: "scale(2.4)",
			opacity: 0,
		},
	},
}));

const Navbar = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar position="sticky">
			<StyledToolbar>
				<Typography variant="h6" sx={{ display: { xs: "none", md: "block" } }}>
					GLOBAL-WARE
				</Typography>
				<TravelExplore sx={{ display: { xs: "block", sm: "none" } }} />
				<Search>
					<InputBase sx={{ color: "black" }} placeholder="Search..." />
				</Search>
				<Icons onChange={handleClose}>
					<Badge badgeContent={4} color="error">
						<Mail />
					</Badge>
					<Badge badgeContent={2} color="error">
						<Notifications />
					</Badge>
					<Tooltip title="Account settings">
						<IconButton
							onClick={handleClick}
							size="small"
							sx={{ ml: 2 }}
							aria-controls={open ? "account-menu" : undefined}
							aria-haspopup="true"
							aria-expanded={open ? "true" : undefined}
						>
							<StyledBadge
								overlap="circular"
								anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
								variant="dot"
							>
								<Avatar
									sx={{ width: 30, height: 30 }}
									alt="Travis Howard"
									src="https://mui.com/static/images/avatar/2.jpg"
								/>
							</StyledBadge>
						</IconButton>
					</Tooltip>
				</Icons>
				<UserBox>
					<Tooltip title="Account settings">
						<IconButton onClick={handleClick} size="small">
							<StyledBadge
								overlap="circular"
								anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
								variant="dot"
							>
								<Avatar
									sx={{ width: 30, height: 30 }}
									alt="Travis Howard"
									src="https://mui.com/static/images/avatar/2.jpg"
								/>
							</StyledBadge>
						</IconButton>
					</Tooltip>

					<Typography variant="span">John</Typography>
				</UserBox>
			</StyledToolbar>
			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: "visible",
						filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
						mt: 1.5,
						"& .MuiAvatar-root": {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						"&:before": {
							content: '""',
							display: "block",
							position: "absolute",
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: "background.paper",
							transform: "translateY(-50%) rotate(45deg)",
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{ horizontal: "right", vertical: "top" }}
				anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
			>
				<MenuItem>
					<Avatar /> Profile
				</MenuItem>
				<MenuItem>
					<Avatar /> My account
				</MenuItem>
				<Divider />
				<MenuItem>
					<ListItemIcon>
						<PersonAdd fontSize="small" />
					</ListItemIcon>
					Add another account
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<Settings fontSize="small" />
					</ListItemIcon>
					Settings
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<Logout fontSize="small" />
					</ListItemIcon>
					Logout
				</MenuItem>
			</Menu>
		</AppBar>
	);
};

export default Navbar;
