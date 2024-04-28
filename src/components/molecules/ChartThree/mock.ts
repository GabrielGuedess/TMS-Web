import { type ApexOptions } from 'apexcharts';

export const mockOptions: ApexOptions = {
  series: [76, 67, 61],
  colors: ['#1ab7ea', '#0084ff', '#39539E'],
  labels: ['Desktop', 'Mobile', 'Desconhecido'],
  chart: {
    height: 390,
    type: 'radialBar',
  },
  legend: {
    show: true,
    offsetY: 15,
    offsetX: -30,
    floating: true,
    fontSize: '16px',
    position: 'left',
    itemMargin: {
      vertical: 3,
    },
    labels: {
      useSeriesColors: true,
    },
  },
  plotOptions: {
    radialBar: {
      offsetY: 0,
      startAngle: 0,
      endAngle: 270,
      hollow: {
        margin: 5,
        size: '30%',
        image: undefined,
        background: 'transparent',
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          show: false,
        },
      },
    },
  },
};
