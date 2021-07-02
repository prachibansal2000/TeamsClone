/*eslint-disable*/
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";
import MessageForm from "./MessageForm";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;

  //current active chat
  const chat = chats && chats[activeChat];

  //
  const renderReadReceipts = (message, isMyMessage) =>
    chat.people.map(
      (person, index) =>
        person.last_read === message.id && (
          <div
            key={`read_${index}`}
            className="read-receipt"
            style={{
              float: isMyMessage ? "right" : "left",
              backgroundImage:
                person.person.avatar && `url(${person.person.avatar})`,
            }}
          />
        )
    );

  //for generating messages
  const renderMessages = () => {
    //keys are id of specific messages
    const keys = Object.keys(messages);

    //
    return keys.map((key, index) => {
      const message = messages[key];

      //if there is a message find the last message
      const lastMessageKey = index === 0 ? null : keys[index - 1];

      //checking if the message is our message
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </div>
          <div
            className="read-receipts"
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}
          >
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };

  //also checking we have chat or not
  if (!chat) return <div />;

  //structure of chat feed
  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        {/* question mark ensures we have chat before we try to acess the title variable */}
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person) => ` ${person.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: "100px" }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;
