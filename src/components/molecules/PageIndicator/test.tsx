import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import { PageIndicator } from '.';

const onChangeIndex = jest.fn();
const onChangeWithEdited = jest.fn();

describe('<PageIndicator />', () => {
  beforeEach(() => {
    onChangeIndex.mockClear();
    onChangeWithEdited.mockClear();
  });

  it('should render the page indicator correctly', () => {
    const { container } = render(
      <PageIndicator
        length={5}
        activeIndex={0}
        onChangeIndex={onChangeIndex}
        onChangeWithEdited={onChangeWithEdited}
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be able change page with page indicator indicator button previous when is not index 0', async () => {
    render(
      <PageIndicator
        length={5}
        activeIndex={3}
        onChangeIndex={onChangeIndex}
        onChangeWithEdited={onChangeWithEdited}
      />,
    );

    const previousButton = screen.getByRole('button', { name: 'Previous' });

    await userEvent.click(previousButton);

    expect(onChangeIndex).toHaveBeenCalled();
  });

  it('should not be able change page with page indicator button previous when is not index 0 and has edited', async () => {
    render(
      <PageIndicator
        length={5}
        activeIndex={3}
        onChangeIndex={onChangeIndex}
        onChangeWithEdited={onChangeWithEdited}
        hasEdited
      />,
    );

    const previousButton = screen.getByRole('button', { name: 'Previous' });

    await userEvent.click(previousButton);

    expect(onChangeIndex).not.toHaveBeenCalled();
    expect(onChangeWithEdited).toHaveBeenCalled();
  });

  it('should be able change page with page indicator button next when is not loading', async () => {
    render(
      <PageIndicator
        length={5}
        activeIndex={0}
        onChangeIndex={onChangeIndex}
        onChangeWithEdited={onChangeWithEdited}
      />,
    );

    const nextButton = screen.getByRole('button', { name: 'Next' });

    await userEvent.click(nextButton);

    expect(onChangeIndex).toHaveBeenCalled();
  });

  it('should be not able change page with page indicator button next when is loading', async () => {
    render(
      <PageIndicator
        length={5}
        activeIndex={0}
        onChangeIndex={onChangeIndex}
        onChangeWithEdited={onChangeWithEdited}
        isLoading
      />,
    );

    const nextButton = screen.getByRole('button', { name: 'Next' });

    await userEvent.click(nextButton);

    expect(onChangeIndex).not.toHaveBeenCalled();
  });

  it('should not be able change page with page indicator button next when is not loading and has edited', async () => {
    render(
      <PageIndicator
        length={5}
        activeIndex={0}
        onChangeIndex={onChangeIndex}
        onChangeWithEdited={onChangeWithEdited}
        hasEdited
      />,
    );

    const nextButton = screen.getByRole('button', { name: 'Next' });

    await userEvent.click(nextButton);

    expect(onChangeIndex).not.toHaveBeenCalled();
    expect(onChangeWithEdited).toHaveBeenCalled();
  });

  it('should be able change page one with page indicator when is not loading', async () => {
    render(
      <PageIndicator
        length={5}
        activeIndex={3}
        onChangeIndex={onChangeIndex}
        onChangeWithEdited={onChangeWithEdited}
      />,
    );

    const nextButton = screen.getByRole('button', { name: 'First Page' });

    await userEvent.click(nextButton);

    expect(onChangeIndex).toHaveBeenCalledWith(0);
  });

  it('should not be able change page one with page indicator when is not loading and has edited', async () => {
    render(
      <PageIndicator
        length={5}
        activeIndex={3}
        onChangeIndex={onChangeIndex}
        onChangeWithEdited={onChangeWithEdited}
        hasEdited
      />,
    );

    const nextButton = screen.getByRole('button', { name: 'First Page' });

    await userEvent.click(nextButton);

    expect(onChangeIndex).not.toHaveBeenCalled();
    expect(onChangeWithEdited).toHaveBeenCalled();
  });

  it('should be able change page one with page indicator button number when is not loading', async () => {
    render(
      <PageIndicator
        length={5}
        activeIndex={3}
        onChangeIndex={onChangeIndex}
        onChangeWithEdited={onChangeWithEdited}
      />,
    );

    const numberButton = screen.getByRole('button', { name: 'Button 2' });

    await userEvent.click(numberButton);

    expect(onChangeIndex).toHaveBeenCalledWith(1);
  });

  it('should not be able change page one with page indicator button number when is not loading and has edited', async () => {
    render(
      <PageIndicator
        length={5}
        activeIndex={3}
        onChangeIndex={onChangeIndex}
        onChangeWithEdited={onChangeWithEdited}
        hasEdited
      />,
    );

    const numberButton = screen.getByRole('button', { name: 'Button 2' });

    await userEvent.click(numberButton);

    expect(onChangeIndex).not.toHaveBeenCalled();
    expect(onChangeWithEdited).toHaveBeenCalled();
  });

  it('should be able change page one with page indicator button number last item when is not loading', async () => {
    render(
      <PageIndicator
        length={20}
        activeIndex={3}
        onChangeIndex={onChangeIndex}
        onChangeWithEdited={onChangeWithEdited}
      />,
    );

    const numberButton = screen.getByRole('button', { name: 'Last Page' });

    await userEvent.click(numberButton);

    expect(onChangeIndex).toHaveBeenCalledWith(19);
  });

  it('should not be able change page one with page indicator button number last item when is not loading and has edited', async () => {
    render(
      <PageIndicator
        length={20}
        activeIndex={3}
        onChangeIndex={onChangeIndex}
        onChangeWithEdited={onChangeWithEdited}
        hasEdited
      />,
    );

    const numberButton = screen.getByRole('button', { name: 'Last Page' });

    await userEvent.click(numberButton);

    expect(onChangeIndex).not.toHaveBeenCalled();
    expect(onChangeWithEdited).toHaveBeenCalled();
  });
});
