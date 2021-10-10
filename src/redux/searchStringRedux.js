//selectors
export const getSearchString = ({searchString}) => searchString;
export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;
export const countAllCards = ({cards}) => cards.length;

// action name creator
const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types
export const ADD_SEARCHSTRING = createActionName('ADD_SEARCHSTRING');

// action creators
export const createAction_changeSearchString = searchString => ({payload: searchString, type: ADD_SEARCHSTRING});

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case ADD_SEARCHSTRING:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}

