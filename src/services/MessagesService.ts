import { getCustomRepository, Repository } from "typeorm";
import { Message } from "../entities/Message";
import { MessagesRepository } from "../repositories/MessagesRepository";

// o ponto de interrogação na propriedade admin_id, indica que esse atributo pode ser inserido ou não, caso ele esteja presente 
// é inserido como string e se não estiver presente será inserido como nulo 

interface IMessageCreate{
    admin_id?: string,
    text: string,
    user_id: string
}

class MessagesService {

    private messagesRepository: Repository<Message>;
    
    constructor(){
        this.messagesRepository = getCustomRepository(MessagesRepository);
    }

    async create({admin_id, text, user_id} : IMessageCreate){


        const message = this.messagesRepository.create({
            admin_id,
            text,
            user_id
        });

        this.messagesRepository.save(message);

        return message;
    }
    
    async listById(user_id: string){

        const list = await this.messagesRepository.find({
            where: user_id,
            relations: ["user"]
        });

        return list;
    }
}


export { MessagesService };