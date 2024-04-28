import { type ApexOptions } from 'apexcharts';

export const mockApexOptions: ApexOptions = {
  colors: ['#3C50E0', '#80CAEE'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: [2, 2],
    curve: 'straight',
  },
  legend: {
    show: false,
    position: 'top',
    horizontalAlign: 'left',
  },
  yaxis: {
    min: 0,
    max: 100,
    title: {
      style: {
        fontSize: '0px',
      },
    },
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  markers: {
    size: 4,
    discrete: [],
    colors: '#fff',
    strokeWidth: 3,
    fillOpacity: 1,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    strokeColors: ['#3056D3', '#80CAEE'],
    hover: {
      sizeOffset: 5,
      size: undefined,
    },
  },
  chart: {
    height: 335,
    type: 'area',
    fontFamily: 'Satoshi, sans-serif',
    toolbar: {
      show: false,
    },
    dropShadow: {
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
      enabled: true,
      color: '#623CEA14',
    },
  },
  xaxis: {
    type: 'category',
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    categories: [
      'Sep',
      'Oct',
      'Nov',
      'Dec',
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
    ],
  },
};
