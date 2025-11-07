import c3 from 'c3';
import 'c3/c3.css';

import { getAllPackages } from './assets/js/state';

export function initMyChart() {

  const allData = getAllPackages();

  const placeCounts = allData.reduce((acc, pkg) => {
    const place = pkg.place;

    acc[place] = (acc[place] || 0) + 1;
    return acc;
  }, {});

  const chartDataColumns = Object.entries(placeCounts);

  c3.generate({
    bindto: '#chart',

    data: {
      columns: chartDataColumns,

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
      label: {
        show: false
      }
    },

    legend: {
      position: 'bottom'
    }
  });
}