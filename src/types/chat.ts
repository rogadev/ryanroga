export interface Visitor {
  name: string;
  email: string;
  phone: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
} 
