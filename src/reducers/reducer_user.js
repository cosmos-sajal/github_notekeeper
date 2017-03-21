import { api } from '../utils/api';
import { Constants } from '../utils/constants';

export default function(state=null, action) {
	switch(action.type) {
		case Constants.actions.GET_USER_BIO:
			let url = Constants.githubUrl + action.username;
			return api.get(url);
	}

	return state;
};
