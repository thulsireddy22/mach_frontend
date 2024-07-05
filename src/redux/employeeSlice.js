// // // import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// // // import axios from 'axios';

// // // const initialState = {
// // //   skillData: {
// // //     skill_avg_ratings: [], // Initialize as an empty array
// // //     status: 'idle', // idle | loading | succeeded | failed
// // //     error: null,
// // //   },
// // //   filtersData: {
// // //     filters: [], // Initialize as an empty array or object based on your API response
// // //     status: 'idle', // idle | loading | succeeded | failed
// // //     error: null,
// // //   },
// // // };

// // // // Async thunk to fetch employees skill data
// // // export const fetchEmployeesSkillData = createAsyncThunk(
// // //   'employees/fetchSkillData',
// // //   async (queryParams) => {
// // //     try {
// // //       const response = await axios.get(`http://127.0.0.1:8000/mach/employees_skill_screen/${queryParams}`);
// // //       return response.data;
// // //     } catch (error) {
// // //       throw new Error('Failed to fetch skill data'); // Customize error handling as needed
// // //     }
// // //   }
// // // );

// // // // Async thunk to fetch filters data
// // // export const fetchFiltersData = createAsyncThunk(
// // //   'employees/fetchFiltersData',
// // //   async () => {
// // //     try {
// // //       const response = await axios.get('http://127.0.0.1:8000/mach/talent_finder/');
// // //       return response.data;
// // //     } catch (error) {
// // //       throw new Error('Failed to fetch filters data'); // Customize error handling as needed
// // //     }
// // //   }
// // // );

// // // // Redux slice for employees data
// // // const employeesSlice = createSlice({
// // //   name: 'employees',
// // //   initialState,
// // //   reducers: {
// // //     clearSkillData: (state) => {
// // //       state.skillData.skill_avg_ratings = [];
// // //       state.skillData.status = 'idle';
// // //       state.skillData.error = null;
// // //     },
// // //     clearFiltersData: (state) => {
// // //       state.filtersData.filters = [];
// // //       state.filtersData.status = 'idle';
// // //       state.filtersData.error = null;
// // //     },
// // //   },
// // //   extraReducers: (builder) => {
// // //     builder
// // //       // Fetch skill data reducers
// // //       .addCase(fetchEmployeesSkillData.pending, (state) => {
// // //         state.skillData.status = 'loading';
// // //         state.skillData.error = null;
// // //       })
// // //       .addCase(fetchEmployeesSkillData.fulfilled, (state, action) => {
// // //         state.skillData.status = 'succeeded';
// // //         state.skillData.skill_avg_ratings = action.payload; // Update skill data with the fetched array of objects
// // //         state.skillData.error = null;
// // //       })
// // //       .addCase(fetchEmployeesSkillData.rejected, (state, action) => {
// // //         state.skillData.status = 'failed';
// // //         state.skillData.error = action.error.message;
// // //       })
// // //       // Fetch filters data reducers
// // //       .addCase(fetchFiltersData.pending, (state) => {
// // //         state.filtersData.status = 'loading';
// // //         state.filtersData.error = null;
// // //       })
// // //       .addCase(fetchFiltersData.fulfilled, (state, action) => {
// // //         state.filtersData.status = 'succeeded';
// // //         state.filtersData.filters = action.payload; // Update filters data with the fetched array or object
// // //         state.filtersData.error = null;
// // //       })
// // //       .addCase(fetchFiltersData.rejected, (state, action) => {
// // //         state.filtersData.status = 'failed';
// // //         state.filtersData.error = action.error.message;
// // //       });
// // //   },
// // // });

// // // export const { clearSkillData, clearFiltersData } = employeesSlice.actions;

// // // // Selectors for skill data
// // // export const selectSkillData = (state) => state.employees.skillData;
// // // export const selectSkillDataStatus = (state) => state.employees.skillData.status;
// // // export const selectSkillDataError = (state) => state.employees.skillData.error;

// // // // Selectors for filters data
// // // export const selectFiltersData = (state) => state.employees.filtersData.filters;
// // // export const selectFiltersStatus = (state) => state.employees.filtersData.status;
// // // export const selectFiltersError = (state) => state.employees.filtersData.error;

// // // // Export reducer
// // // export default employeesSlice.reducer;



// // // redux/skillsSlice.js

// // import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// // import axios from 'axios';

// // // Define the initial state
// // const initialState = {
// //   skills: [],
// //   status: 'idle',
// //   error: null,
// // };

// // // Define the async thunk to fetch skills data
// // export const fetchSkillsData = createAsyncThunk(
// //   'skills/fetchSkillsData',
// //   async () => {
// //     try {
// //       const response = await axios.get('http://127.0.0.1:8000/mach/employees_skill_screen/');
// //       return response.data;
// //     } catch (error) {
// //       throw Error('Failed to fetch skills data');
// //     }
// //   }
// // );

// // // Create the skills slice
// // const skillsSlice = createSlice({
// //   name: 'skills',
// //   initialState,
// //   reducers: {},
// //   extraReducers: (builder) => {
// //     builder
// //       .addCase(fetchSkillsData.pending, (state) => {
// //         state.status = 'loading';
// //       })
// //       .addCase(fetchSkillsData.fulfilled, (state, action) => {
// //         state.status = 'succeeded';
// //         state.skills = action.payload.skill_avg_ratings; // Assuming the response has a field 'skill_avg_ratings' containing skills data
// //       })
// //       .addCase(fetchSkillsData.rejected, (state, action) => {
// //         state.status = 'failed';
// //         state.error = action.error.message;
// //       });
// //   },
// // });

// // export default skillsSlice.reducer;



// // skillsSlice.js

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const initialState = {
//   overall_average: null,
//   number_of_people: null,
//   skill_avg_ratings: [],
//   status: 'idle',
//   error: null,
// };

// export const fetchSkillsData = createAsyncThunk('skills/fetchSkillsData', async () => {
//   try {
//     const response = await axios.get('http://127.0.0.1:8000/mach/employees_skill_screen/');
//     return response.data;
//   } catch (error) {
//     return error.message;
//   }
// });

// const skillsSlice = createSlice({
//   name: 'skills',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchSkillsData.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchSkillsData.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.overall_average = action.payload.overall_average;
//         state.number_of_people = action.payload.number_of_people;
//         state.skill_avg_ratings = action.payload.skill_avg_ratings;
//       })
//       .addCase(fetchSkillsData.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export default skillsSlice.reducer;





// skillsSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  overall_average: 0,
  number_of_people: 0,
  skill_avg_ratings: [],
  status: 'idle', // or 'loading', 'succeeded', 'failed'
  error: null,
};

export const fetchSkillsData = createAsyncThunk('skills/fetchSkillsData', async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/mach/employees_skill_screen/');
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch skills data');
  }
});

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkillsData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSkillsData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.overall_average = action.payload.overall_average;
        state.number_of_people = action.payload.number_of_people;
        state.skill_avg_ratings = action.payload.skill_avg_ratings;
      })
      .addCase(fetchSkillsData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default skillsSlice.reducer;
