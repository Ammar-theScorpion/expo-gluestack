export interface Automation {
  id: number;
  title: string;
  subtitle?: string;
  hasProgress?: boolean;
  current?: number;
  target?: number;
  iconType: 'saving' | 'roundUp' | 'target' | 'custody' | 'priceAlert';
}
