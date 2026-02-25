
export interface ChannelItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  url?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
