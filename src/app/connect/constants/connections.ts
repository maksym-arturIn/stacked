export type ConnectionItemType = {
  id: string;
  icon: string;
  title: string;
  subtitle?: string;
  isConnected: boolean;
};

export const connectionsList: ConnectionItemType[] = [
  {
    id: "sleeper",
    icon: "/icons/connections/sleeper.png",
    title: "Sleeper",
    isConnected: true,
  },
  {
    id: "espn",
    icon: "/icons/connections/espn.png",
    title: "ESPN",
    subtitle: "2FA required",
    isConnected: false,
  },
  {
    id: "yahoo",
    icon: "/icons/connections/yahoo.png",
    title: "Yahoo",
    isConnected: false,
  },
  {
    id: "cbs",
    icon: "/icons/connections/cbs.png",
    title: "CBS",
    isConnected: false,
  },
  {
    id: "nfl",
    icon: "/icons/connections/nfl.png",
    title: "NFL.com",
    isConnected: false,
  },
];
