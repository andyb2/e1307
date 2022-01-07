import React, { useCallback, useEffect, useState } from "react";
import UnreadMessages from "./UnreadMessages";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 20,
    flexGrow: 1,
  },
  username: {
    fontWeight: "bold",
    letterSpacing: -0.2,
  },
  previewText: {
    fontSize: 12,
    color: "#9CADC8",
    letterSpacing: -0.17,
  },
}));

const ChatContent = (props) => {
  const classes = useStyles();
  const [messageLength, setMessageLength] = useState(0)
  const { conversation } = props;
  const { latestMessageText, otherUser } = conversation;

  const missedMessagesCalc = useCallback(() => {
    const numberOfUnreadMessages = conversation.messages.filter(messages => messages.readReceipt === false && messages.senderId === otherUser.id)
    setMessageLength(numberOfUnreadMessages.length)
  }, [conversation, otherUser.id])

  useEffect(() => {
    missedMessagesCalc();
  }, [missedMessagesCalc])

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography className={classes.previewText}>
          {latestMessageText}
        </Typography>
      </Box>
      {messageLength > 0 && <UnreadMessages conversation={conversation} unread={messageLength} />}
    </Box>
  )
};

export default ChatContent;
