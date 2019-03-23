import axios from 'axios';

// ACTION TYPES
const SET_STUDENTS = 'SET_STUDENTS';

// ACTION CREATORS
const setAllStudents = students => ({
  type: SET_STUDENTS,
  students
});

// THUNKS
export const fetchStudents = () => async dispatch => {
  try {
    const { data } = await axios.get('/student');
    dispatch(setAllStudents(data));
  } catch (err) {
    console.error(err);
  }
};

// INITIAL STATE
const initialState = [];

// SUB-REDUCERS
const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STUDENTS:
      return action.students;
    default:
      return state;
  }
};

export default studentReducer;
