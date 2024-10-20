import Sidebar from '@/app/_components/sidebar/Sidebar';
import getUsers from '../actions/getUsers';
import UserList from './_components/UserList';

async function UsersLayout({ children }) {
  const users = await getUsers();

  return (
    <Sidebar>
      <div className="h-full">
        <UserList items={users} />
        {children}
      </div>
    </Sidebar>
  );
}

export default UsersLayout;
