export interface TaskData {
  id: number;
  jobRequest: string;
  submitted: string;
  status: 'In-process' | 'Need to start' | 'Complete' | 'Blocked';
  submitter: string;
  url: string;
  assigned: string;
  priority: 'High' | 'Medium' | 'Low';
  dueDate: string;
  estValue: string;
}

export interface CellData {
  value: string;
  type?: 'text' | 'status' | 'priority' | 'date' | 'currency' | 'url';
  style?: {
    backgroundColor?: string;
    textColor?: string;
    fontWeight?: string;
  };
}

export interface SheetData {
  [key: string]: CellData;
}