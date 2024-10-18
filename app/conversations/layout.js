import Sidebar from '../_components/sidebar/Sidebar';
import getConversations from '../actions/getConversations';
import getUsers from '../actions/getUsers';
import ConversationList from './_components/ConversationList';

export default async function ConversationsLayout({ children }) {
  const conversations = await getConversations();
  const users = await getUsers();

  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList initialItems={conversations} users={users} />
        {children}
      </div>
    </Sidebar>
  );
}
