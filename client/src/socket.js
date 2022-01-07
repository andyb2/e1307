import io from "socket.io-client";
import store from "./store";
import {
  setNewMessage,
  removeOfflineUser,
  addOnlineUser,
} from "./store/conversations";
import { setReadReceipt } from "./store/utils/thunkCreators";

const socket = io(window.location.origin);

socket.on("connect", () => {
  console.log("connected to server");

  socket.on("add-online-user", (id) => {
    store.dispatch(addOnlineUser(id));
  });

  socket.on("remove-offline-user", (id) => {
    store.dispatch(removeOfflineUser(id));
  });

  socket.on("new-message", (data) => {
    const clientState = store.getState();
    if (data.recipientId === clientState.user.id && clientState.activeConversation === data.msgSender.user) {
      const convoData = {
        active: true,
        id: data.message.conversationId,
        otherUser: {
          id: data.msgSender.id,
        }
      }
      const messageCopy = { ...data.message }
      messageCopy.readReceipt = true
      store.dispatch(setReadReceipt(convoData));
      store.dispatch(setNewMessage(messageCopy, data.sender));
      console.log(`triggered #1`)
    }
    if (data.recipientId === clientState.user.id && clientState.activeConversation !== data.msgSender.user) {
      console.log(`triggered #2`)
      store.dispatch(setNewMessage(data.message, data.sender));
    }
  });
});

export default socket;
