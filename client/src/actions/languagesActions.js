import * as types from './actionTypes';
import history from '../history';

export function fetchLanguages(offset, limit) {
  return { type: types.FETCH_LANGUAGES, offset, limit };
}

export function fetchLanguagesDone(response) {
  return { 
    type: types.FETCH_LANGUAGES_DONE, 
    items: response.languages,
    count: response.count,
    total: response.total
  };
}

export function fetchLanguagesFailed(error) {
  return { type: types.FETCH_LANGUAGES_FAILED, error };
}

//export function deleteLanguage(id) {
//  return function(dispatch) {
//    return api.delete(`languages/${id}`)
//      .then(response => {
//        setTimeout(() => {
//          dispatch(deleteLanguageSuccess());
//          history.push('/languages')
//        }, 150);
//      })
//      .catch(error => {
//        throw(error);
//      });
//  };
//}
//
//export function deleteLanguageSuccess() {
//  return {type: types.DELETE_LANGUAGE_SUCCESS};
//}
//
//export function createLanguage(data) {
//  return function(dispatch) {
//    return api.post('languages', data)
//      .then(response => {
//        setTimeout(() => {
//          dispatch(createLanguageSuccess());
//          history.push('/languages')
//        }, 150);
//      })
//      .catch(error => {
//        throw(error);
//      });
//  };
//}
//
//export function createLanguageSuccess() {
//  return {type: types.CREATE_LANGUAGE_SUCCESS};
//}
//
//export function loadLanguages() {
//  return function(dispatch) {
//    return api.get('languages')
//      .then(response => {
//        dispatch(loadLanguagesSuccess(response.languages));
//      })
//      .catch(error => {
//        throw(error);
//      });
//  };
//}
//
//export function loadLanguagesSuccess(languages) {
//  return {type: types.LOAD_LANGUAGES_SUCCESS, languages};
//}
