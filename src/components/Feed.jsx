import { Box } from "@mui/material";
import Post from "./Post";

const Feed = () => {
	return (
		<Box flex={4} p={2}>
			<Post
				avatar="J"
				avatarSrc="https://mui.com/static/images/avatar/1.jpg"
				title="John Doe"
				subheader="September 14, 2022"
				img="https://www.greenqueen.com.hk/wp-content/uploads/2021/06/Junk-Food-Makes-Up-Nearly-20-Calories-Consumed-By-U.S.-Children-Study-Finds.jpg"
				text="This impressive paella is a perfect party dish and a fun meal to cook together
					with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
			/>
			<Post
				avatar="M"
				avatarSrc="https://mui.com/static/images/avatar/5.jpg"
				title="Mile Dito"
				subheader="September 15, 2022"
				img="https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=675%2Cmetadata=none%2Conerror=redirect%2Cq=85%2Cwidth=1200/wp-content/uploads/junk-food-day1-scaled.jpg"
				text="This impressive paella is a perfect party dish and a fun meal to cook together
					with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
			/>
			<Post
				avatar="J"
				avatarSrc="https://mui.com/static/images/avatar/2.jpg"
				title="John (you)"
				subheader="September 16, 2022"
				img="https://i.ytimg.com/vi/AfPghSdSspU/maxresdefault.jpg"
				text="This impressive paella is a perfect party dish and a fun meal to cook together
					with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
			/>
			<Post
				avatar="J"
				avatarSrc="https://mui.com/static/images/avatar/4.jpg"
				title="Jane Doe"
				subheader="September 12, 2022"
				img="https://tidbits.com/uploads/2019/05/black-background-costume-dark-mode.jpg"
				text="This impressive paella is a perfect party dish and a fun meal to cook together
					with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
			/>
		</Box>
	);
};

export default Feed;
