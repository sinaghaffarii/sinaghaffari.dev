import {
  BarChart3,
  FileText,
  Folder,
  Image,
  MessageSquare,
  Settings,
  Tag,
  Users,
  UserRound,
} from "lucide-react";

export type DashboardNavItem = {
  label: string;
  href?: string;
  icon: React.ComponentType<{ className?: string }>;
  disabled?: boolean;
};

export const dashboardNavigation: DashboardNavItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: BarChart3,
  },
  {
    label: "Posts",
    href: "/dashboard/posts",
    icon: FileText,
  },
  {
    label: "Categories",
    icon: Folder,
    disabled: true,
  },
  {
    label: "Authors",
    icon: UserRound,
    disabled: true,
  },
  {
    label: "Comments",
    icon: MessageSquare,
    disabled: true,
  },
  {
    label: "Tags",
    icon: Tag,
    disabled: true,
  },
  {
    label: "Media",
    icon: Image,
    disabled: true,
  },
  {
    label: "Users",
    icon: Users,
    disabled: true,
  },
  {
    label: "Settings",
    icon: Settings,
    disabled: true,
  },
];

export const dashboardStats = [
  {
    title: "Posts",
    value: 124,
    change: 12,
    changeLabel: "this month",
    icon: FileText,
    variant: "primary" as const,
    trend: [12, 15, 14, 21, 18, 25, 22],
  },
  {
    title: "Published",
    value: 98,
    change: 8,
    changeLabel: "this month",
    icon: FileText,
    variant: "success" as const,
    trend: [10, 12, 11, 16, 15, 20, 18],
  },
  {
    title: "Comments",
    value: 312,
    change: -4,
    changeLabel: "this month",
    icon: MessageSquare,
    variant: "warning" as const,
    trend: [20, 24, 21, 27, 25, 29, 31],
  },
  {
    title: "Users",
    value: 57,
    change: 16,
    changeLabel: "this month",
    icon: Users,
    variant: "info" as const,
    trend: [8, 9, 9, 14, 13, 18, 16],
  },
];

export const overviewData = [22, 30, 28, 18, 14, 25, 34, 29, 20, 24, 27, 31];

export type PostStatus = "Published" | "Draft";

export type RecentPost = {
  id: string;
  title: string;
  date: string;
  status: PostStatus;
};
export const recentPosts: RecentPost[] = [
  {
    id: "1",
    title: "Claude AI Agents: The Future of AI Assistance",
    date: "May 16, 2024",
    status: "Published",
  },
  {
    id: "2",
    title: "Next.js Performance Optimization Tips",
    date: "May 15, 2024",
    status: "Published",
  },
  {
    id: "3",
    title: "SSR vs SSG: When to Use Which?",
    date: "May 14, 2024",
    status: "Published",
  },
  {
    id: "4",
    title: "Understanding TCP vs UDP",
    date: "May 13, 2024",
    status: "Draft",
  },
  {
    id: "5",
    title: "Next.js or Nuxt: Which One to Choose?",
    date: "May 12, 2024",
    status: "Published",
  },
];

export const categories = [
  {
    name: "Web Development",
    value: 45,
  },
  {
    name: "Programming",
    value: 25,
  },
  {
    name: "DevOps",
    value: 15,
  },
  {
    name: "Tools & Software",
    value: 10,
  },
  {
    name: "Other",
    value: 5,
  },
];

export const topAuthors = [
  {
    id: "1",
    name: "Sina Ghaffari",
    posts: 48,
    avatar: "/avatars/sina.jpg",
  },
  {
    id: "2",
    name: "Ali Ahmadi",
    posts: 23,
    avatar: "/avatars/ali.jpg",
  },
  {
    id: "3",
    name: "Reza Shahriari",
    posts: 19,
    avatar: "/avatars/reza.jpg",
  },
  {
    id: "4",
    name: "Mina Khosravi",
    posts: 14,
    avatar: "/avatars/mina.jpg",
  },
];
