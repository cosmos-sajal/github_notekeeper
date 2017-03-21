import { Constants } from '../utils/constants';

export function getUserData(username) {
	return {
		type: Constants.actions.GET_USER_BIO,
		username: username
	}
};
