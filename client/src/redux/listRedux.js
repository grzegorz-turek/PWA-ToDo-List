import axios from 'axios';
import { API_URL, BASE_URL } from '../config';

/* SELECTORS */
export const getList = ({ list }) => list.data;
export const getRequest = ({ list }) => list.request;

/* ACTION NAME CREATORS */
const reducerName = 'list';
const createActionName = name => `app/${reducerName}/${name}`;

/* ACTIONS */
export const LOAD_LIST = createActionName('LOAD_LIST'); // ACTION
export const loadList = payload => ({ payload, type: LOAD_LIST }); // ACTION CREATOR
export const START_REQUEST = createActionName('START_REQUEST');
export const startRequest = () => ({ type: START_REQUEST });
export const END_REQUEST = createActionName('END_REQUEST');
export const endRequest = () => ({ type: END_REQUEST });
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const errorRequest = error => ({ error, type: ERROR_REQUEST });


/* INITIAL STATE */
const initialState = {
	data: [],
	request: {
		pending: false,
		success: null,
		error: null
	}
};

/* REDUCER */
export default function reducer(statePart = initialState, action = {}) {
	switch (action.type) {
		case LOAD_LIST:
			return {...statePart, data: action.payload };
		case START_REQUEST:
			return {...statePart, request: { pending: true, success: null, error: null } };
		case END_REQUEST:
			return {...statePart, request: { pending: false, success: true, error: null } };
		case ERROR_REQUEST:
			return {...statePart, request: { pending: false, success: false, error: action.error } };
		default:
			return statePart;
	}
};

/* THUNK */
/*
export const loadListThunkRequest = () => {
	return dispatch => {
		//console.log('Request started...');
		//setTimeout(() => {
			const data = [{ id: '1adfasf', content: 'kupić mydło FA' }, { id: '2evxc34', content: 'zadzwonić do mamy' }, { id: 'fvaerf4', content: 'zrobić pranie' }, { id: '5wrtgbs', content: 'opłacić prąd' }, { id: 'hbdfgaa', content: 'opłacić szambo' }, { id: 'iutmyu6', content: 'opłacić gaz' }, { id: '43wrgrt', content: 'iść do kościoła' }, { id: 'xbrtgw4', content: 'potrenowć bieganie' }, { id: '65f3ehw', content: 'upiec sernik' }, { id: 'u7645eh', content: 'ubić wołu' }, { id: 'kjmfug4', content: 'wyprawić skórę woła' }, { id: '74jrtik', content: 'rozpaliś ognisko' }, { id: 'h35ehru', content: 'zasadzić drzewo' }, { id: '65htujk', content: 'napić się wody źródlanej' }, { id: '8756r7j', content: 'napisać list do Świętego Mikołaja (to co, że już po Świętach)' }, { id: '56rjyik', content: 'upolować łosia' }, { id: 'q2wergz', content: 'zrobić pasztet z dziczyzny' }, { id: 'mnb530p', content: 'oglądnoć Grę o Tron' }, { id: 'vwqf4tf', content: 'poskakać na nartach' }, { id: '654ktjf', content: 'powalczyć Judo' }, { id: 'jrbv432', content: 'zgłosić się do Fame MMA (jako kasjer)' }, { id: '235122f', content: 'wypić piwo' }, { id: 'be5tsht', content: 'zjeść ciastko' }, { id: 't5ndhnn', content: 'beknąć złowrogo' }, { id: '76543v0', content: 'przegonić na dobre kota sąsiadów' }, { id: 'mbyegt5', content: 'ztuningować auto' }, { id: '4r5tgh7', content: 'odśnieżyć podwórko' }, { id: '5yhli0i', content: 'pojeździć na sankach' }, { id: '786d96k', content: 'zobaczyć Ermitaż' }, { id: 'h56heyt', content: 'zaspiewąc pieśń patriotyczną' }, { id: '10101gf', content: 'zakupić bukiet kwiatów' }];
			dispatch(loadList(data));
			//console.log('Request finished after 2sec!');
		//}, 2000);
	};
};
*/

/*
export const loadListThunkRequest = () => {
	return dispatch => {
		axios.get(`${API_URL}/list`)
			.then(res => dispatch(loadList(res.data)))
			.catch(err => console.log(err.message))
	};
};
*/

export const loadListThunkRequest = () => {
	return async dispatch => {
		dispatch(startRequest());
		try {
			let res = await axios.get(`${BASE_URL}${API_URL}/list`);
			//await new Promise((resolve, reject) => setTimeout(resolve, 2000));// TEST------------------------
			dispatch(loadList(res.data));
			dispatch(endRequest());

		}
		catch(err) {
			dispatch(errorRequest(err.message));
		}
	};
};

export const addItemToListThunkRequest = (newItm) => {
	return async dispatch => {
  
		dispatch(startRequest());
		try {
			let res = await axios.post(`${BASE_URL}${API_URL}/list`, { data: { content: newItm.content, status: newItm.status} } );
			//await new Promise((resolve, reject) => setTimeout(resolve, 2000));
			dispatch(endRequest());
  
		} catch(e) {
			dispatch(errorRequest(e.message));
		}
	};
};

export const removeItemFromListThunkRequest = (removeId) => {
	return async dispatch => {
  
		dispatch(startRequest());
		try {
			let res = await axios.delete(`${BASE_URL}${API_URL}/list`, { data : { removeId: removeId } } );
			//await new Promise((resolve, reject) => setTimeout(resolve, 2000));
			dispatch(endRequest());
  
		} catch(e) {
			dispatch(errorRequest(e.message));
		}
	};
};

export const changeItemFromListThunkRequest = (updatedItem) => {
	return async dispatch => {

		dispatch(startRequest());
		try {
			let res = await axios.put(`${BASE_URL}${API_URL}/list`, { data: { updatedItem: updatedItem } } );
			//await new Promise((resolve, reject) => setTimeout(resolve, 2000));
			dispatch(endRequest());
		} catch(e) {
			dispatch(errorRequest(e.message));
		}
	};
};
