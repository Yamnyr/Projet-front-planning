const actions = {
  UPDATE_DATE: "UPDATE_DATE",
  SET_DEFAULT: "SET_DEFAULT",
  UPDATE_GROUPS: "UPDATE_GROUPS",
};

const setDefault = (month, year, groups) => ({
  type: actions.SET_DEFAULT,
  month,
  year,
  groups,
});
const updateDate = (month, year) => ({
  type: actions.UPDATE_DATE,
  month,
  year,
});

const updateGroups = (groups) => ({
  type: actions.UPDATE_GROUPS,
  groups,
});

export { actions, setDefault, updateDate, updateGroups };
