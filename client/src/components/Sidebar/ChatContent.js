import React, { useState } from "react";
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
  unreadPreviewText: {
    fontWeight: 900,
    fontSize: 12,
    color: 'black',
    letterSpacing: -0.17,
  }
}));

const ChatContent = (props) => {
  const classes = useStyles();
  const [missedMessages, setMissedMessages] = useState(0)
  const { conversation } = props;
  const { latestMessageText, otherUser } = conversation;

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography className={missedMessages > 0 ? classes.unreadPreviewText : classes.previewText}>
          {latestMessageText}
        </Typography>
      </Box>
      <UnreadMessages conversation={conversation} unread={{ missedMessages, setMissedMessages }} />
    </Box>
  )
};

export default ChatContent;
