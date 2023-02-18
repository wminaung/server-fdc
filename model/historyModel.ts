export interface ChatHistory {
  id: number;
  userId: number;
  inputMessage: string;
  createdAt: string;
}

export const chatHistory: ChatHistory[] = [
  {
    id: 1,
    userId: 1,
    inputMessage: "Hello I'm Win",
    createdAt: new Date().toISOString(),
  },
];
