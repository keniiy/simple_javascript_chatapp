const chatList = document.querySelector('.chat-list');

//Class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', 'shaun');

// get chats and render
chatroom.getChats(data => chatUI.render(data));
