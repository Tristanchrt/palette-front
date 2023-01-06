

const accountList = [
  { id: 1, name: 'Tristan chretien', lastMessage: 'eola je suis un message', time: '13:78' },
  { id: 2, name: 'Jean chretien', lastMessage: 'eola je suis un message', time: '13:78' },
  { id: 3, name: 'Azir chretien', lastMessage: 'eola je suis un message', time: '13:78' },
  { id: 4, name: 'Sylas chretien', lastMessage: 'eola je suis un message', time: '13:78' },
  { id: 5, name: 'Pomme chretien', lastMessage: 'eola je suis un message', time: '13:78' },
]

const room1 = [
  { id: 1, message: '11111111111111111111111111111', senderId: 100, receiverId: 2, type: 'text'},
  { id: 2, message: '2222222222222222222', senderId: 100, receiverId: 2, type: 'text'},
  { id: 3, message: '333333333333333333333', senderId: 2, receiverId: 2, type: 'text'},
  { id: 4, message: '444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444 text', senderId: 100, receiverId: 2, type: 'text'},
  { id: 5, message: '55555555555555555555 avec du text', senderId: 100, receiverId: 2, type: 'text'},
  { id: 6, message: '66666666666666666666666666 du text', senderId: 2, receiverId: 2, type: 'text'},
  { id: 7, message: '77777777777777777777777777 text', senderId: 2, receiverId: 2, type: 'text'},
  { id: 8, message: 'https://picsum.photos/200/300', senderId: 100, receiverId: 2, type: 'image'},
  { id: 9, message: 'https://picsum.photos/200/300', senderId: 2, receiverId: 100, type: 'image'},
  { id: 10, message: '77777777777777777777777777 text', senderId: 2, receiverId: 2, type: 'text'},
]

const room2 = [
  { id: 5, message: 'Un nouveau message avec du text', senderId: 3, receiverId: 4, type: 'text'},
  { id: 6, message: 'Un nouveau message avec du text', senderId: 3, receiverId: 4, type: 'text'},
  { id: 7, message: 'Un nouveau message avec du text', senderId: 3, receiverId: 4, type: 'text'},
  { id: 8, message: 'Un nouveau message avec du text', senderId: 3, receiverId: 4, type: 'text'},
]


export default { accountList, room1, room2 }