import c3 from 'c3';
import './node_modules/c3/c3.css';

import { getAllPackages } from './assets/js/state'; 

// 1. 在頂層宣告變數
let chart = null;
let currentChartIDs = [];

function calculateChartData(data) {

  if (!data || !Array.isArray(data)) {
    return []; 
  }

  const placeCounts = data.reduce((acc, pkg) => {

    if (pkg && pkg.place) {
      const place = pkg.place;
      acc[place] = (acc[place] || 0) + 1;
    }

    return acc;
  }, {});

  return Object.entries(placeCounts);
}

export function initMyChart() {

  const allData = getAllPackages();
  
  const initialColumns = calculateChartData(allData);

  if (initialColumns) {
    currentChartIDs = initialColumns.map(col => col[0]);
  } else {
    currentChartIDs = []; 
  }

  chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: initialColumns,

      type: 'donut',

      colors: {
        '台北': '#26C0C7',
        '台中': '#5151D3',
        '高雄': '#E68618'
      }
    },

    donut: {
      title: '套票地區比重',
      width: 12,
      label: { show: false }
    },

    legend: {
      position: 'bottom'
    },
  });
}

export function updateChart(filteredData) {

  if (!chart) {
    return;
  }

  const newColumns = calculateChartData(filteredData);
  const newChartIDs = newColumns.map(col => col[0]);

  const idsToUnload = currentChartIDs.filter(id => !newChartIDs.includes(id));

  chart.load({
    columns: newColumns,
    unload: idsToUnload
  });

  currentChartIDs = newChartIDs;
}