/*replacementcomparision*/
import React from 'react';
import { Bar } from 'react-chartjs-2';
 
const SkillComparisonChart = ({ matchedSkills, skillAvgRatings}) => {
  // Extract labels (skills) and ratings from the selectedSkills and employeeSkills objects
  const labels = Object.keys(matchedSkills);
  const selectedSkillsRatings = Object.values(matchedSkills);
  const employeeSkillsRatings = labels.map(skill => skillAvgRatings[skill] || 0); // Ensure 0 if skill not found
 
  // Prepare data for the chart
  const data = {
    labels: labels,
    datasets: [
     
      {
        label: 'Selected Employee',
        backgroundColor: 'purple',
        borderColor: 'purple',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255, 99, 132, 0.8)',
        hoverBorderColor: 'rgba(255, 99, 132, 1)',
        data: employeeSkillsRatings,
      },
      {
        label: 'Nearest Match',
        backgroundColor: 'plum',
        borderColor: 'plum',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(54, 162, 235, 0.8)',
        hoverBorderColor: 'rgba(54, 162, 235, 1)',
        data: selectedSkillsRatings,
      },
    ],
  };
 
  // Chart options
  const options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          stepSize: 1,
        },
      }],
    },
  };
 
  return (
    <div>
      <h3>Skill Comparison</h3>
      <Bar data={data} options={options} />
    </div>
  );
};
 
export default SkillComparisonChart;