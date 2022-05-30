
const contacts = [
    {
        id: '5725a680b3249760ea21de52',
        name: 'Rajesh',
        status: 'online',
        mood: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        unread: '5'
    },
    {
        id: '5725a680606588342058356d',
        name: 'Arm',
        status: 'do-not-disturb',
        mood: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        unread: '3'
    },
    {
        id: '5725a68009e20d0a9e9acf2a',
        name: 'Barry',
        status: 'do-not-disturb',
        mood: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        unread: '1'
    },
    {
        id: '5725a6809fdd915739187ed5',
        name: 'Eclair',
        status: 'offline',
        mood: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
        id: '5725a68007920cf75051da64',
        name: 'Boy',
        status: 'offline',
        mood: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },

];


const chats = [
	{
		id: '1725a680b3249760ea21de52',
		dialog: [
			{
				who: '5725a680b3249760ea21de52',
				message: 'Quickly come to the meeting room 1B, we have a big server issue',
				time: '2021-03-22T08:54:28.299Z'
			},
			{
				who: '5725a6802d10e277a0f35724',
				message: 'I’m having breakfast right now, can’t you wait for 10 minutes?',
				time: '2021-03-22T08:55:28.299Z'
			},
			{
				who: '5725a6802d10e277a0f35724',
				message: 'I’m having breakfast right now, can’t you wait for 10 minutes?',
				time: '2021-03-22T08:56:28.299Z'
			},
			{
				who: '5725a680b3249760ea21de52',
				message: 'We are losing money! Quick!',
				time: '2021-03-22T09:00:28.299Z'
			},
			{
				who: '5725a6802d10e277a0f35724',
				message:
					'It’s not my money, you know. I will eat my breakfast and then I will come to the meeting room.',
				time: '2021-03-22T09:02:28.299Z'
			},
			{
				who: '5725a680b3249760ea21de52',
				message: 'You are the worst!',
				time: '2021-03-22T09:05:28.299Z'
			},
			{
				who: '5725a680b3249760ea21de52',
				message: 'We are losing money! Quick!',
				time: '2021-03-22T09:14:28.299Z'
			},
			{
				who: '5725a680b3249760ea21de52',
				message: 'You are the worst!',
				time: '2021-03-22T09:16:28.299Z'
			},
			{
				who: '5725a680b3249760ea21de52',
				message: 'We are losing money! Quick!',
				time: '2021-03-22T09:17:28.299Z'
			},
			{
				who: '5725a6802d10e277a0f35724',
				message:
					'It’s not my money, you know. I will eat my breakfast and then I will come to the meeting room.',
				time: '2021-03-22T09:20:28.299Z'
			},
			{
				who: '5725a680b3249760ea21de52',
				message: 'You are the worst!',
				time: '2021-03-22T09:22:28.299Z'
			},
			{
				who: '5725a680b3249760ea21de52',
				message: 'We are losing money! Quick!',
				time: '2021-03-22T09:25:28.299Z'
			},
			{
				who: '5725a6802d10e277a0f35724',
				message:
					'It’s not my money, you know. I will eat my breakfast and then I will come to the meeting room.',
				time: '2021-03-22T09:27:28.299Z'
			},
			{
				who: '5725a680b3249760ea21de52',
				message: 'You are the worst!',
				time: '2021-03-22T09:33:28.299Z'
			},
			{
				who: '5725a680b3249760ea21de52',
				message: 'You are the worst!',
				time: '2021-03-22T09:34:28.299Z'
			},
			{
				who: '5725a680b3249760ea21de52',
				message: 'We are losing money! Quick!',
				time: '2021-03-22T09:35:28.299Z'
			},
			{
				who: '5725a6802d10e277a0f35724',
				message:
					'It’s not my money, you know. I will eat my breakfast and then I will come to the meeting room.',
				time: '2021-03-22T09:45:28.299Z'
			},
			{
				who: '5725a680b3249760ea21de52',
				message: 'You are the worst!',
				time: '2021-03-22T10:00:28.299Z'
			}
		]
	},
	{
		id: '2725a680b8d240c011dd2243',
		dialog: [
			{
				who: '5725a680606588342058356d',
				message: 'Quickly come to the meeting room 1B, we have a big server issue',
				time: '2021-04-22T01:00:00.299Z'
			},
			{
				who: '5725a6802d10e277a0f35724',
				message: 'I’m having breakfast right now, can’t you wait for 10 minutes?',
				time: '2021-04-22T01:05:00.299Z'
			},
			{
				who: '5725a680606588342058356d',
				message: 'We are losing money! Quick!',
				time: '2021-04-22T01:10:00.299Z'
			}
		]
	},
	{
		id: '3725a6809413bf8a0a5272b4',
		dialog: [
			{
				who: '5725a68009e20d0a9e9acf2a',
				message: 'Quickly come to the meeting room 1B, we have a big server issue',
				time: '2021-04-22T02:10:00.299Z'
			}
		]
	}
];

const chatDb = {
	user: [
		{
			id: '5725a6802d10e277a0f35724',
			name: 'John',
			status: 'online',
			mood: "it's a status....not your diary...",
			chatList: [
				{
					chatId: '1725a680b3249760ea21de52',
					contactId: '5725a680b3249760ea21de52',
					lastMessageTime: '2021-06-12T02:10:18.931Z'
				},
				{
					chatId: '2725a680b8d240c011dd2243',
					contactId: '5725a680606588342058356d',
					lastMessageTime: '2021-02-18T10:30:18.931Z'
				},
				{
					chatId: '3725a6809413bf8a0a5272b4',
					contactId: '5725a68009e20d0a9e9acf2a',
					lastMessageTime: '2021-03-18T12:30:18.931Z'
				}
			]
		}
	]
};

module.exports = {contacts, chats , chatDb};


