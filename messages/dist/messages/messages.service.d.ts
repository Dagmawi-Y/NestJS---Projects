import { MessagesRepository } from './messages.repository';
export declare class MessagesService {
    messagesRepo: MessagesRepository;
    constructor(messagesRepo: MessagesRepository);
    findOne(id: string): Promise<any>;
    findAll(): Promise<any>;
    createMessage(content: string): Promise<void>;
}
