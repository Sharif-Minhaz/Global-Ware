import {
	Tooltip,
	Fab,
	Modal,
	Box,
	Typography,
	Avatar,
	TextField,
	Stack,
	Button,
	ButtonGroup,
} from "@mui/material";
import {
	Add as AddIcon,
	DateRange,
	EmojiEmotions,
	Image,
	PersonAdd,
	VideoCameraBack,
} from "@mui/icons-material";
import { useState } from "react";
import styled from "@emotion/styled";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	height: 310,
	bgcolor: "background.paper",
	boxShadow: 24,
	borderRadius: 3,
	p: 3,
};

const UserBox = styled(Box)({
	display: "flex",
	alignItems: "center",
	gap: "10px",
	marginBottom: "20px",
});

const Add = () => {
	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Tooltip
				title="Create"
				sx={{ position: "fixed", left: "20px", bottom: "20px" }}
				onClick={() => setOpen(true)}
			>
				<Fab color="primary" aria-label="add">
					<AddIcon />
				</Fab>
			</Tooltip>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style} color="text.primary">
					<Typography variant="h6" color="gray" textAlign="center">
						Create post
					</Typography>
					<UserBox>
						<Avatar
							sx={{ width: 30, height: 30 }}
							alt="Travis Howard"
							src="https://mui.com/static/images/avatar/2.jpg"
						/>
						<Typography variant="span">John</Typography>
					</UserBox>
					<TextField
						sx={{ width: "100%" }}
						id="standard-multiline-static"
						multiline
						rows={3}
						defaultValue=""
						placeholder="What's on your mind?"
						variant="standard"
					/>
					<Stack direction="row" gap={1} mt={2} mb={3}>
						<EmojiEmotions color="primary" />
						<Image color="secondary" />
						<VideoCameraBack color="success" />
						<PersonAdd color="error" />
					</Stack>
					<ButtonGroup
						fullWidth
						variant="contained"
						aria-label="outlined primary button group"
					>
						<Button>Post</Button>
						<Button color="info" sx={{ width: "100px" }}>
							<DateRange />
						</Button>
					</ButtonGroup>
				</Box>
			</Modal>
		</>
	);
};

export default Add;
