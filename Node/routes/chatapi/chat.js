const express = require('express');
const router = express.Router();
const _ =require ('lodash');
const uuid =require('uuid');
let {contacts, chats , chatDb} = require('./data');

router.get("/contacts", (req,res) => {
    res.json(contacts);
});


router.get("/get-chat", (req,res) => {
    const { contactId, userId } = req.body;
    const user = chatDb.user.find(user =>user.id === userId);
	const userChat = user.chatList.find(_chat => _chat.contactId === contactId);
	const chatId = userChat ? userChat.chatId : createNewChat(contactId, userId);
	res.json( 
		{
			chat: chats.find(_chat => _chat.id === chatId),
			userChatList: chats
		});
    
});



router.get("/user", (req,res) => {
    res.json(chatDb.user[0]);
});


router.post("/user/data", (req,res) => {
    const data = JSON.parse(req.body);
	chatDb.user[0] = _.merge({}, chatDb.user[0], data);
    res.json(chatDb.user[0]);
});


function createNewChat(contactId, userId) {
	const user = chatDb.user.find(_user => _user.id === userId);
	const chatId = uuid.v4();
	user.chatList = [
		{
			chatId,
			contactId,
			lastMessageTime: ''
		},
		...chatDb.user[0].chatList
	];
	chats = [
		...chats,
		{
			id: chatId,
			dialog: []
		}
	];
	return chatId;
}


router.post("/chat/send-message", (req,res) => {
    const data = JSON.parse(req.body);
	const { chatId, messageText, contactId } = data;
	const message = {
		who: chatDb.user[0].id,
		message: messageText,
		time: new Date()
	};

	const chat = chats.find(_chat => _chat.id === chatId);
	chat.dialog = [...chat.dialog, message];
	chatDb.user[0].chatList.find(_contact => _contact.contactId === contactId).lastMessageTime = message.time;

	res.json({message,
			userChatList: chatDb.user[0].chatList
		});
});


module.exports = router