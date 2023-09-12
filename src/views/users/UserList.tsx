import UserTable from 'components/users/UserTable';

export default function UserList() {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '300px' }}>
      <div>Users</div>
      <UserTable />
    </div>
  );
}
