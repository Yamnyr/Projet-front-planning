import { actions } from "../action/CalendarActions";

export const defaultState = {
  month: -1,
  year: -1,
  groups: [],
};

export default function CalendarReducer(state, action) {
  switch (action.type) {
    case actions.SET_DEFAULT: {
      console.log("eeee");
      return {
        ...state,
        month: action.month,
        year: action.year,
        groups: action.groups,
      };
    }
    case actions.UPDATE_DATE: {
      return { ...state, month: action.month, year: action.year };
    }
    case actions.UPDATE_GROUPS: {
      return { ...state, groups: action.groups };
    }

    default:
      return state;
  }
}
