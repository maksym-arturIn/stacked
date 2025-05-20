export type ConnectionItemType = {
  id: string;
  icon: string;
  title: string;
  subtitle?: string;
  isConnected: boolean;
};

export const DEFAULT_STEP = 0;
export const FIRST_STEP = 1;
export const SECOND_STEP = 2;
export const THIRD_STEP = 3;

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

export const downloadingDataList = [
  {
    id: "connecting-to-platform",
    title: "Connecting to platform",
  },
  {
    id: "finding-active-slates",
    title: "Finding Active Slates",
    subtitle: "4 leagues found",
  },
  {
    id: "loading-eagues",
    title: "Loading Leagues",

    items: [
      { id: "league-delta", title: "League Delta" },
      {
        id: "league-alpha",
        title: "League Alpha",
        metadata: ["64%", "15s left"],
      },
      { id: "league-gamma", title: "League Gamma" },
      { id: "league-beta", title: "League Beta" },
    ],
  },
];
