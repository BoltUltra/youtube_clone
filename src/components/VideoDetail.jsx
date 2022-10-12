import { CheckCircle } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';

import { Video } from './';
const VideoDetail = () => {
	const { id } = useParams();
	useEffect(()=>{
fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
.then((data)=>)
	}, [id])
	return (
		<Box minHeight="95vh">
			<Stack direction={{ xs: 'column', md: 'row' }}>
				<Box flex={1}>
					<Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
						<ReactPlayer />
					</Box>
				</Box>
			</Stack>
		</Box>
	);
};

export default VideoDetail;
