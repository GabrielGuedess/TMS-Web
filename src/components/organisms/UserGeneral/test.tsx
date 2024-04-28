import { type UserQuery } from 'graphql/generated';

import { toast } from 'sonner';
import { ApolloError } from '@apollo/client';
import { updateUser } from 'actions/user/update';
import { deleteUser } from 'actions/user/delete';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import { UserGeneral } from '.';

const createObjectURL = jest.fn();

global.URL.createObjectURL = createObjectURL;

jest.mock('sonner', () => ({
  toast: { error: jest.fn() },
}));

jest.mock('actions/user/update', () => ({
  updateUser: jest.fn(),
}));

jest.mock('actions/user/delete', () => ({
  deleteUser: jest.fn(),
}));

const defaultData: UserQuery = {
  user: {
    id: '1',
    name: 'test',
    role: 'ADMIN',
    password: '123',
    username: 'test',
    email: 'test@gmail.com',
    updated_at: new Date(),
    created_at: new Date(),
  },
};

describe('<UserGeneral />', () => {
  it('should render the collaborator general correctly', () => {
    const { container } = render(<UserGeneral data={defaultData} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the collaborator general', () => {
    const { container } = render(<UserGeneral data={defaultData} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be able to update the collaborator', async () => {
    render(<UserGeneral data={defaultData} />);

    const inputDocument = screen.getByLabelText('Document');
    const inputTry = screen.getByLabelText('Try Count');
    const buttonUpdate = screen.getByLabelText('Update User');

    await userEvent.clear(inputDocument);
    await userEvent.clear(inputTry);

    await userEvent.type(inputDocument, '123456789');
    await userEvent.type(inputTry, '3');
    await userEvent.click(buttonUpdate);

    expect(inputDocument).toHaveValue('123456789');
    expect(inputTry).toHaveValue(3);

    expect(updateUser).toHaveBeenCalled();
  });

  it('should be able to delete the collaborator', async () => {
    render(<UserGeneral data={defaultData} />);

    const buttonDeleteTrigger = screen.getByLabelText('Delete Trigger');

    await userEvent.click(buttonDeleteTrigger);

    const buttonDelete = screen.getByLabelText('Delete User');

    await userEvent.click(buttonDelete);

    expect(deleteUser).toHaveBeenCalled();
  });

  it('should be able to click upload avatar in the collaborator', async () => {
    render(<UserGeneral data={defaultData} />);

    const input = screen.getByLabelText('File');
    const buttonUpload = screen.getByLabelText('Change Photo');

    const file = new File([new ArrayBuffer(1)], 'file.png', {
      type: 'image/png',
    });

    Object.defineProperty(file, 'size', { value: 1e6 });

    await userEvent.click(buttonUpload);
    await userEvent.upload(input, file);

    expect(createObjectURL).toHaveBeenCalled();
  });

  it('should be able to upload avatar in the collaborator', async () => {
    render(<UserGeneral data={defaultData} />);

    const input = screen.getByLabelText('File');

    const file = new File([new ArrayBuffer(1)], 'file.png', {
      type: 'image/png',
    });

    await userEvent.upload(input, file);

    expect(createObjectURL).toHaveBeenCalled();
  });

  it('should be able to view uploaded avatar in the collaborator', async () => {
    render(<UserGeneral data={defaultData} />);

    const input = screen.getByLabelText('File');

    const file = new File([new ArrayBuffer(7)], 'test.png', {
      type: 'image/png',
    });

    await userEvent.upload(input, file);
    expect(createObjectURL).toHaveBeenCalled();

    const image = screen.getByLabelText('New Photo');

    expect(image).toBeInTheDocument();
  });

  it('should not be able to upload avatar when file is larger in the collaborator', async () => {
    render(<UserGeneral data={defaultData} />);

    const input = screen.getByLabelText('File');

    const file = new File([new ArrayBuffer(1)], 'file.jpg', {
      type: 'image/png',
    });

    Object.defineProperty(file, 'size', { value: 8e6 });

    await userEvent.upload(input, file);

    expect(toast.error).toHaveBeenCalled();
  });

  it('should not be able to update the collaborator with error', async () => {
    (updateUser as jest.Mock).mockRejectedValueOnce(
      new ApolloError({ errorMessage: 'Server Down' }),
    );

    render(<UserGeneral data={defaultData} />);

    await expect(async () => {
      await updateUser({
        updateUserId: '1',
        userUpdate: { email: 'test2@gamil.com' },
      });

      expect(toast.error).toHaveBeenCalled();
    }).rejects.toThrow();
  });
});
