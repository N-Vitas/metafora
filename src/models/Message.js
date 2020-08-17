export default class Message {
    constructor(action, author, body, chatID, params) {
        this.author = author;
        this.body = body;
        this.action = action;
        this.chatID = chatID;
        this.params = params;
    }
}