import axios from 'axios';

const KEY = 'AIzaSyCBx0bQ9LNv2mDqi2gCa4_2Qo1Wq2zHyVg';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 10,
		key: KEY,
	},
});
