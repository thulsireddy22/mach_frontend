

// // // import React, { useState, useEffect } from 'react';
// // // import { useDispatch, useSelector } from 'react-redux';
// // // import { fetchEmployeesSkillData, fetchFiltersData, selectSkillData, selectFiltersData } from '../redux/employeeSlice';
// // // import FilterSidebar from '../others/sidebar';
// // // import loading from "../assets/loading.gif";
// // // import Layout from '../others/Layout';
// // // import TableContainer from '@mui/material/TableContainer';
// // // import Table from '@mui/material/Table';
// // // import TableHead from '@mui/material/TableHead';
// // // import TableBody from '@mui/material/TableBody';
// // // import TableRow from '@mui/material/TableRow';
// // // import TableCell from '@mui/material/TableCell';
// // // import Paper from '@mui/material/Paper';
// // // import TablePagination from '@mui/material/TablePagination';
// // // import Pagination from '../others/pagination';
// // // import { Doughnut } from 'react-chartjs-2';
// // // import { Tooltip } from '@mui/material';
// // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // import { faChartPie, faTable } from '@fortawesome/free-solid-svg-icons';
// // // import '../styles/SME.css';
// // // import '../styles/table.css';

// // // const EmployeeSkill = () => {
// // //   const dispatch = useDispatch();
// // //   const { skill_avg_ratings, status: skillStatus, error: skillError } = useSelector(selectSkillData);
// // //   const { filters, status: filtersStatus, error: filtersError } = useSelector(selectFiltersData);
// // //   const [isSidebarVisible, setSidebarVisible] = useState(false);
// // //   const [selectedFilters, setSelectedFilters] = useState({
// // //     name: [],
// // //     designation: [],
// // //     lead: [],
// // //     skills: [],
// // //     account: [],
// // //     manager_name: [],
// // //     validated: [],
// // //     rating: [],
// // //     tenure: [],
// // //     iteration: [],
// // //     serviceline_name: [],
// // //     functions: [],
// // //   });
// // //   const [appliedFilters, setAppliedFilters] = useState(selectedFilters);
// // //   const [view, setView] = useState('table'); // State to manage view (graph or table)

// // //   // Pagination state
// // //   const [page, setPage] = useState(0);
// // //   const [rowsPerPage, setRowsPerPage] = useState(8);
// // //   useEffect(() => {
// // //     // Fetch initial skill data without any filters
// // //     dispatch(fetchEmployeesSkillData(buildQueryParams(selectedFilters, page, rowsPerPage)));
// // //     dispatch(fetchFiltersData());
// // //   }, []);
  
// // //   useEffect(() => {
// // //     // Fetch skill data when filters, page, or rowsPerPage change
// // //     dispatch(fetchEmployeesSkillData(buildQueryParams(appliedFilters, page, rowsPerPage)));
// // //   }, [appliedFilters, page, rowsPerPage]);
  
// // //   const buildQueryParams = (filters, page, rowsPerPage) => {
// // //     // Check if filters are empty to determine if all data should be fetched
// // //     const queryParams = Object.keys(filters)
// // //       .filter((key) => filters[key].length > 0)
// // //       .map((key) => filters[key].map((value) => `${key}=${encodeURIComponent(value)}`).join('&'))
// // //       .join('&');
  
// // //     // Append page and rowsPerPage to query params
// // //     const pageParams = `_page=${page + 1}&_limit=${rowsPerPage}`;
// // //     return queryParams ? `?${queryParams}&${pageParams}` : `?${pageParams}`;
// // //   };
  
// // //   const toggleSidebar = () => {
// // //     setSidebarVisible(!isSidebarVisible);
// // //   };

// // //   const handleFilterClick = (type, value) => {
// // //     if (type === 'skills') {
// // //       // Toggle selection for skills
// // //       const updatedSkills = selectedFilters.skills.includes(value)
// // //         ? selectedFilters.skills.filter(skill => skill !== value)
// // //         : [...selectedFilters.skills, value];

// // //       const updatedFilters = {
// // //         ...selectedFilters,
// // //         skills: updatedSkills,
// // //       };
// // //       setSelectedFilters(updatedFilters);
// // //     }
// // //   };

// // //   const applyFilters = () => {
// // //     setAppliedFilters(selectedFilters);
// // //     setPage(0); // Reset page to 0 when filters are applied, including skill filters
// // //     toggleSidebar(); // Close sidebar after applying filters
// // //   };

// // //   if (skillStatus === 'loading' || filtersStatus === 'loading') {
// // //     return <div className="Talentloading"><img src={loading} alt="Loading" /></div>;
// // //   }

// // //   if (skillStatus === 'failed' || filtersStatus === 'failed') {
// // //     return <p className="Talentloading">{skillError || filtersError}</p>;
// // //   }

// // //   // Flatten skills for each user into an array of objects
// // //   const userSkills = skill_avg_ratings.flatMap(
// // //     ({ skill_name, average_rating, employee_count }) => ({
// // //       skill_name,
// // //       average_rating,
// // //       employee_count,
// // //     })
// // //   );

// // //   // Calculate unique employee count based on filtered user skills
// // //   const filteredUserSkills = userSkills.filter(({ skill_name }) => appliedFilters.skills.length === 0 || appliedFilters.skills.includes(skill_name));
// // //   const uniqueEmployeeCount = [...new Set(filteredUserSkills.map((item) => item.name))].length;

// // //   const handleChangePage = (event, newPage) => {
// // //     setPage(newPage);
// // //   };

// // //   const handleChangeRowsPerPage = (event) => {
// // //     setRowsPerPage(parseInt(event.target.value, 10));
// // //     setPage(0); // Reset page to 0 when changing rows per page
// // //   };

// // //   const value = (rating) => {
// // //     return rating === 4 ? "Expert" : "Master";
// // //   };

// // //   const getSkillDistribution = (userSkills) => {
// // //     const skillCounts = {};

// // //     // Count occurrences of each skill
// // //     userSkills.forEach(({ skill_name }) => {
// // //       if (skillCounts[skill_name]) {
// // //         skillCounts[skill_name]++;
// // //       } else {
// // //         skillCounts[skill_name] = 1;
// // //       }
// // //     });

// // //     // Convert skillCounts object to arrays for labels and data
// // //     const labels = Object.keys(skillCounts);
// // //     const data = Object.values(skillCounts);

// // //     // Sort labels and data in descending order based on data values
// // //     const sortedIndexes = data.map((_, index) => index).sort((a, b) => data[b] - data[a]);
// // //     const sortedLabels = sortedIndexes.map(index => labels[index]);
// // //     const sortedData = sortedIndexes.map(index => data[index]);

// // //     const colors = [
// // //       'rgba(215, 132, 142)',
// // //       'rgba(186, 148, 152)',
// // //       'rgba(138, 175, 227)',
// // //       'rgba(215, 175, 140)',
// // //       'rgba(215, 181, 162)',
// // //       'rgba(204, 159, 202)',
// // //       'rgba(171, 149, 203)',
// // //       'rgba(151, 139, 179)',
// // //       'rgba(126, 140, 215)',
// // //       'rgba(137, 193, 225)'
// // //     ];

// // //     // Generate gradient colors
// // //     const gradientColors = colors.map((color, index) => ({
// // //       offset: Math.round(index * (100 / colors.length)) + '%',
// // //       color,
// // //     }));

// // //     // Return sorted labels and datasets
// // //     return {
// // //       labels: sortedLabels,
// // //       datasets: [
// // //         {
// // //           data: sortedData,
// // //           backgroundColor: gradientColors.map(color => color.color),
// // //         },
// // //       ],
// // //     };
// // //   };

// // //   // Prepare data for the Doughnut chart
// // //   const skillDistribution = getSkillDistribution(userSkills);

// // //   const sortedUsers = filteredUserSkills.sort((a, b) => {
// // //     // Define the order of designations
// // //     const order = ['Associate Principal', 'Manager', 'Principal', 'Senior Associate'];

// // //     // Get index of each designation in the order array
// // //     const indexA = order.indexOf(a.designation);
// // //     const indexB = order.indexOf(b.designation);

// // //     // Compare based on the index in the order array
// // //     return indexA - indexB;
// // //   });

// // //   return (
// // //     <>
// // //       <Layout />
// // //       <div className="EmployeeSkill-finder">
// // //         <h4 className="screen-title">Subject Matter Expert</h4>
// // //         <button className="filter-togglebar" onClick={toggleSidebar}>
// // //           {isSidebarVisible ? <span>&lt;</span> : <span>&gt;</span>}
// // //         </button>
// // //         <div className="toggle-icons">
// // //           <FontAwesomeIcon
// // //             icon={faTable}
// // //             className={`toggle-icon ${view === 'table' ? 'active' : ''}`}
// // //             onClick={() => setView('table')}
// // //           />
// // //           <FontAwesomeIcon
// // //             icon={faChartPie}
// // //             className={`toggle-icon ${view === 'graph' ? 'active' : ''}`}
// // //             onClick={() => setView('graph')}
// // //           />
// // //         </div>

// // //         <div className="count-box">
// // //           <h3>Number of Employees:</h3>
// // //           <p>{uniqueEmployeeCount}</p>
// // //         </div>

// // //         {view === 'graph' && (
// // //           <div className="chart-container">
// // //             <h3 className='skillclass'>Skills Distribution</h3>
// // //             <div className="chart-center">
// // //               <Doughnut data={skillDistribution} />
// // //             </div>
// // //           </div>
// // //         )}

// // //         {view === 'table' && (
// // //           <>
// // //             <TableContainer className='table-container' component={Paper} sx={{ maxHeight: 390 }}>
// // //               <Table stickyHeader aria-label="sticky table" className='user-table'>
// // //                 <TableHead className='table-header'>
// // //                   <TableRow className='table-rows-data'>
// // //                     <TableCell>Skill</TableCell>
// // //                     <TableCell>Average Rating</TableCell>
// // //                     <TableCell>Number of Employees</TableCell>
// // //                   </TableRow>
// // //                 </TableHead>
// // //                 {skill_avg_ratings.length > 0 ? (
// // //   <TableBody>
// // //     {sortedUsers
// // //       .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
// // //       .map(({ skill_name, average_rating, employee_count }) => (
// // //         <TableRow key={skill_name} className="table-rows-data">
// // //           <TableCell>
// // //             <Tooltip title={skill_name}>
// // //               <p className="tooltipp">{skill_name?.slice(0, 15)}</p>
// // //             </Tooltip>
// // //           </TableCell>
// // //           <TableCell>{average_rating}</TableCell>
// // //           <TableCell>{employee_count}</TableCell>
// // //         </TableRow>
// // //       ))}
// // //   </TableBody>
// // // ) : (
// // //   <TableBody>
// // //     <TableRow>
// // //       <TableCell colSpan={3}>No data available</TableCell>
// // //     </TableRow>
// // //   </TableBody>
// // // )}

// // //               </Table>
// // //             </TableContainer>
// // //             <TablePagination
// // //               rowsPerPageOptions={[8, 16, 24]}
// // //               component="div"
// // //               count={filteredUserSkills.length}
// // //               rowsPerPage={rowsPerPage}
// // //               page={page}
// // //               onPageChange={handleChangePage}
// // //               onRowsPerPageChange={handleChangeRowsPerPage}
// // //             />
// // //           </>
// // //         )}
// // //       </div>
// // //       {isSidebarVisible && (
// // //         <FilterSidebar
// // //           filters={filters}
// // //           selectedFilters={selectedFilters}
// // //           handleFilterClick={handleFilterClick}
// // //           applyFilters={applyFilters}
// // //         />
// // //       )}
// // //       <Pagination />
// // //     </>
// // //   );
// // // };

// // // export default EmployeeSkill;





// // import React, { useEffect, useState } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { fetchSkillsData } from '../redux/employeeSlice'; // Assuming you create a new reducer for skills
// // import loading from "../assets/loading.gif";
// // import '../styles/TalentFinder.css';
// // import { Bar } from 'react-chartjs-2';
// // import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// // import Layout from '../others/Layout';

// // ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// // const SkillFinder = () => {
// //   const dispatch = useDispatch();
// //   const { skillData, status, error } = useSelector((state) => state.skills);
// //   const [view, setView] = useState('graph'); // 'graph' or 'table'
// //   const [selectedSkill, setSelectedSkill] = useState(null);

// //   useEffect(() => {
// //     dispatch(fetchSkillsData());
// //   }, [dispatch]);

// //   const handleBarClick = (elements) => {
// //     if (elements.length > 0) {
// //       const index = elements[0].index;
// //       const skill = skillData.skill_avg_ratings[index].skill_name;
// //       setSelectedSkill(skill);
// //     }
// //   };

// //   if (status === 'loading') {
// //     return <div className="Talentloading"><img src={loading} alt="Loading" /></div>;
// //   }

// //   if (status === 'failed') {
// //     return <p className="Talentloading">{error}</p>;
// //   }

// //   const data = {
// //     labels: skillData.skill_avg_ratings.map(skill => skill.skill_name),
// //     datasets: [
// //       {
// //         type: 'bar',
// //         label: 'Average Rating',
// //         data: skillData.skill_avg_ratings.map(skill => skill.average_rating.toFixed(2)),
// //         backgroundColor: 'rgba(75, 192, 192, 0.8)',
// //         borderColor: 'rgba(75, 192, 192, 1)',
// //         borderWidth: 1
// //       }
// //     ]
// //   };

// //   const options = {
// //     responsive: true,
// //     plugins: {
// //       legend: {
// //         position: 'top'
// //       },
// //       title: {
// //         display: true,
// //         text: 'Skills Average Rating'
// //       }
// //     },
// //     onClick: (event, elements) => handleBarClick(elements),
// //     scales: {
// //       y: {
// //         ticks: {
// //           beginAtZero: true
// //         }
// //       }
// //     }
// //   };

// //   return (
// //     <>
// //       <Layout />
// //       <div className="skill-finder">
// //         <h1 className='screen-title'>Skill Finder</h1>
// //         <div className="view-toggle">
// //           <button
// //             className={`toggle-button ${view === 'graph' ? 'active' : ''}`}
// //             onClick={() => setView('graph')}
// //           >
// //             Graph View
// //           </button>
// //           <button
// //             className={`toggle-button ${view === 'table' ? 'active' : ''}`}
// //             onClick={() => setView('table')}
// //           >
// //             Table View
// //           </button>
// //         </div>

// //         {view === 'graph' && (
// //           <div className="chart-container">
// //             <Bar data={data} options={options} />
// //           </div>
// //         )}

// //         {view === 'table' && (
// //           <div className="skill-table-container">
// //             <h2>Skill Average Ratings</h2>
// //             <table className="skill-table">
// //               <thead>
// //                 <tr>
// //                   <th>Skill Name</th>
// //                   <th>Average Rating</th>
// //                   <th>Employee Count</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {skillData.skill_avg_ratings.map((skill, index) => (
// //                   <tr key={index}>
// //                     <td>{skill.skill_name}</td>
// //                     <td>{skill.average_rating.toFixed(2)}</td>
// //                     <td>{skill.employee_count}</td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         )}
// //       </div>
// //     </>
// //   );
// // };

// // export default SkillFinder;


// // SkillFinder.js

// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchSkillsData } from '../redux/employeeSlice';

// const SkillFinder = () => {
//   const dispatch = useDispatch();
//   const { overall_average, number_of_people, skill_avg_ratings, status, error } = useSelector((state) => state.skills);

//   useEffect(() => {
//     dispatch(fetchSkillsData());
//   }, [dispatch]);

//   // Check for loading or error states
//   if (status === 'loading') {
//     return <div>Loading...</div>;
//   }

//   if (status === 'failed') {
//     return <div>Error: {error}</div>;
//   }

//   // Render skill_avg_ratings
//   return (
//     <div>
//       <h2>Overall Average: {overall_average}</h2>
//       <p>Number of People: {number_of_people}</p>
//       <h3>Skill Average Ratings:</h3>
//       <ul>
//       {skill_avg_ratings && skill_avg_ratings.length > 0 ? (
//           skill_avg_ratings.map((skill) => (
//             <li key={skill.skill_name}>
//               <p>Skill: {skill.skill_name}</p>
//               <p>Average Rating: {skill.average_rating}</p>
//               <p>Employee Count: {skill.employee_count}</p>
//             </li>
//           ))
//         ) : (
//           <li>No skills data available</li>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default SkillFinder;


// SkillFinder.js
// SkillFinder.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSkillsData } from '../redux/employeeSlice';

const SkillFinder = () => {
  const dispatch = useDispatch();
  const { overall_average, number_of_people, skill_avg_ratings, status, error } = useSelector((state) => state.skills);

  useEffect(() => {
    dispatch(fetchSkillsData());
  }, [dispatch]);

  // Render based on different states
  switch (status) {
    case 'loading':
      return <div>Loading...</div>;
    case 'failed':
      return <div>Error: {error}</div>;
    case 'succeeded':
      return (
        <div>
          <h2>Overall Average: {overall_average}</h2>
          <p>Number of People: {number_of_people}</p>
          <h3>Skill Average Ratings:</h3>
          <ul>
          {skill_avg_ratings.length > 0 ? (
  <ul>
    {skill_avg_ratings.map((skill) => (
      <li key={skill.skill_name}>
        <p>Skill: {skill.skill_name}</p>
        <p>Average Rating: {skill.average_rating}</p>
        <p>Employee Count: {skill.employee_count}</p>
      </li>
    ))}
  </ul>
) : (
  <p>No skills data available</p>
)}

          </ul>
        </div>
      );
    default:
      return null;
  }
};

export default SkillFinder;
