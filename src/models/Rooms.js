import moment from 'moment';

export default class Rooms {
    constructor(id, room, lastmessage, date = moment(), chatID = -1, groupID = -1, replicID = 0, status = 0) {
        this.id = id // ID сообщения
        this.chatRoom = room; // ID Комнаты
        this.lastmessage = lastmessage; // Текст сообщения
        this.messagesID = messagesID;
        this.chatID = chatID; // ID Менеджера
        this.groupID = groupID; // ID группы менеджеров
        this.replicID = replicID; // ID сообщения от бота
        this.status = status; // Статус сообщения
        this.date = moment(date); // Дата регистрации сообщения
    }
}