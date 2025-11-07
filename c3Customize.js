import c3 from 'c3';
import 'c3/c3.css';

export function initMyChart() {
  c3.generate({
    bindto: '#chart',

    data: {
      columns: [
        ['台北', 65],
        ['台中', 25],
        ['高雄', 10]
      ],

      type: 'donut',
      
      colors: {
        '台北': '#26C0C7',
        '台中': '#5151D3',
        '高雄': '#E68618',
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