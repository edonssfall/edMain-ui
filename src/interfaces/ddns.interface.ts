export interface IListImg {
  image: string | null;
  uuid: string;
  type: string;
}

interface ILogs {
  id: number;
  logs: string[];
  created_at: Date;
}

export interface IDdnsDevice {
  uuid: string;
  image: IListImg;
  name: string;
  link: string;
  ip: string;
  status: string;
  logs: ILogs | null;
}
