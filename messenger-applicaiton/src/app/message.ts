export interface Message{
    sender: { 
        firstName : string;
        isOnline:boolean;
    };
    text: string;
    conversationId: number;
    sequenceNumber: number;
}