import {
	Card,
	CardHeader,
	Avatar,
	IconButton,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Checkbox,
} from "@mui/material";
import { MoreVert, Share, Favorite, FavoriteBorder } from "@mui/icons-material";

const Post = ({avatar, avatarSrc, title, subheader, img, text}) => {
	return (
		<Card sx={{marginBottom: 3}}>
			<CardHeader
				avatar={
					<Avatar aria-label="recipe" src={avatarSrc} sx={{ background: "red" }}>
						{avatar}
					</Avatar>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVert />
					</IconButton>
				}
				title={title}
				subheader={subheader}
			/>
			<CardMedia
				component="img"
				height="340px"
				image={img}
				alt="Paella dish"
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					{text}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<Checkbox
					label="favorite"
					icon={<FavoriteBorder />}
					checkedIcon={<Favorite sx={{color: "red"}} />}
				/>
				<IconButton aria-label="share">
					<Share />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default Post;
