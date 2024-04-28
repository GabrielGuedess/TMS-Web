import { type ReactNode } from 'react';

import { render, waitFor } from '@testing-library/react';

import { MapOne } from '.';

jest.mock('@react-jvectormap/core', () => ({
  VectorMap: ({ children }: { children: ReactNode }) => (
    <div data-testid="Mock VectorMap">{children}</div>
  ),
}));

jest.mock('@react-jvectormap/brazil', () => ({
  brMill: {
    name: 'br_mill',
    content: {
      width: 220_000,
      height: 194_010,
      paths: {
        ac: {
          path: '',
          name: 'Acre',
        },
        pa: {
          path: '',
          name: 'Pará',
        },
        ce: {
          path: '',
          name: 'Ceará',
        },
        ap: {
          path: '',
          name: 'Amapá',
        },
        pi: {
          path: '',
          name: 'Piauí',
        },
        go: {
          path: '',
          name: 'Goiás',
        },
        ba: {
          path: '',
          name: 'Bahia',
        },
        pr: {
          path: '',
          name: 'Paraná',
        },
        se: {
          path: '',
          name: 'Sergipe',
        },
        al: {
          path: '',
          name: 'Alagoas',
        },
        pb: {
          path: '',
          name: 'Paraíba',
        },
        rr: {
          path: '',
          name: 'Roraima',
        },
        ro: {
          path: '',
          name: 'Rondônia',
        },
        am: {
          path: '',
          name: 'Amazonas',
        },
        ma: {
          path: '',
          name: 'Maranhão',
        },
        to: {
          path: '',
          name: 'Tocantins',
        },
        sp: {
          path: '',
          name: 'São Paulo',
        },
        pe: {
          path: '',
          name: 'Pernambuco',
        },
        mt: {
          path: '',
          name: 'MatoGrosso',
        },
        mg: {
          path: '',
          name: 'Minas Gerais',
        },
        es: {
          path: '',
          name: 'Espírito Santo',
        },
        rj: {
          path: '',
          name: 'Rio de Janeiro',
        },
        sc: {
          path: '',
          name: 'Santa Catarina',
        },
        df: {
          path: '',
          name: 'Distrito Federal',
        },
        rs: {
          path: '',
          name: 'Rio Grande do Sul',
        },
        ms: {
          path: '',
          name: 'MatoGrosso do Sul',
        },
        rn: {
          path: '',
          name: 'Rio Grande do Norte',
        },
      },
    },
  },
}));

describe('<MapOne />', () => {
  it('should render the map one correctly', async () => {
    await waitFor(() => {
      const { container } = render(<MapOne />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
