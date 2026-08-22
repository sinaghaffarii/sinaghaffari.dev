import { useNavigation } from "react-router";

export default function NavigationLoading() {
  const navigation = useNavigation();

  if (navigation.state === "idle") {
    return null;
  }

  return (
    <div
      aria-label="Loading"
      className="fixed inset-x-0 top-0 z-[100] h-0.5 overflow-hidden"
    >
      <div className="h-full w-1/3 animate-navigation-progress bg-foreground" />
    </div>
  );
}
