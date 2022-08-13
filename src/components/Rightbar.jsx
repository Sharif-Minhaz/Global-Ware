import {
	List,
	Avatar,
	ListItem,
	Divider,
	ListItemAvatar,
	AvatarGroup,
	Box,
	ImageList,
	ImageListItem,
	ListItemText,
	Typography,
} from "@mui/material";

const Rightbar = () => {
	return (
		<Box flex={2} p={2} sx={{ display: { xs: "none", md: "block" } }}>
			<Box position="fixed" width={300}>
				<Typography variant="h6" fontWeight={200}>
					Online Friends
				</Typography>
				<AvatarGroup max={7} sx={{ marginBottom: "23px" }}>
					<Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
					<Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
					<Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/6.jpg" />
					<Avatar alt="Jane Doe" src="https://mui.com/static/images/avatar/3.jpg" />
					<Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
					<Avatar
						alt="Trevor Henderson"
						src="https://mui.com/static/images/avatar/5.jpg"
					/>
					<Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
					<Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
					<Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
					<Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
					<Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
				</AvatarGroup>
				<Typography variant="h6" fontWeight={200}>
					Latest Photos
				</Typography>
				<ImageList cols={3} rowHeight={100} sx={{ marginBottom: "23px" }}>
					{itemData.map((item) => (
						<ImageListItem key={item.img}>
							<img
								src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
								srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
								alt={item.title}
								loading="lazy"
							/>
						</ImageListItem>
					))}
				</ImageList>
				<Typography variant="h6" fontWeight={200}>
					Recent Conversation
				</Typography>
				<List
					sx={{
						width: "100%",
						maxWidth: 360,
						bgcolor: "background.paper",
					}}
				>
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar
								alt="Remy Sharp"
								src="https://mui.com/static/images/avatar/1.jpg"
							/>
						</ListItemAvatar>
						<ListItemText
							primary="Brunch this weekend?"
							secondary={
								<>
									<Typography
										sx={{ display: "inline" }}
										component="span"
										variant="body2"
										color="text.primary"
									>
										Ali Connors
									</Typography>
									{" — I'll be in your neighborhood doing errands this…"}
								</>
							}
						/>
					</ListItem>
					<Divider variant="inset" component="li" />
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar
								alt="Travis Howard"
								src="https://mui.com/static/images/avatar/2.jpg"
							/>
						</ListItemAvatar>
						<ListItemText
							primary="Summer BBQ"
							secondary={
								<>
									<Typography
										sx={{ display: "inline" }}
										component="span"
										variant="body2"
										color="text.primary"
									>
										to Scott, Alex, Jennifer
									</Typography>
									{" — Wish I could come, but I'm out of town this…"}
								</>
							}
						/>
					</ListItem>
					{/* <Divider variant="inset" component="li" />
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar
								alt="Cindy Baker"
								src="https://mui.com/static/images/avatar/3.jpg"
							/>
						</ListItemAvatar>
						<ListItemText
							primary="Oui Oui"
							secondary={
								<>
									<Typography
										sx={{ display: "inline" }}
										component="span"
										variant="body2"
										color="text.primary"
									>
										Sandra Adams
									</Typography>
									{" — Do you have Paris recommendations? Have you ever…"}
								</>
							}
						/> 
					</ListItem> */}
				</List>
			</Box>
		</Box>
	);
};

const itemData = [
	{
		img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
		title: "Breakfast",
	},
	{
		img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
		title: "Burger",
	},
	{
		img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
		title: "Camera",
	},
];

export default Rightbar;
