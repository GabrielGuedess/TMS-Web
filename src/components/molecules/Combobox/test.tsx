import { render } from '@testing-library/react';

import { ComboBox } from '.';

const setValue = jest.fn();
const setSearch = jest.fn();

describe('<ComboBox />', () => {
  it('should render the ComboBox correctly', () => {
    const { container } = render(
      <ComboBox
        label="País"
        search="Brazil"
        isLoading={false}
        setValue={setValue}
        setSearch={setSearch}
        placeholder="Selecione o País"
        emptyMessage="País não encontrado"
        placeholderCommand="Pesquise o País..."
        value={{ id: '1', description: 'Brazil' }}
        values={[{ id: '1', description: 'Brazil' }]}
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
