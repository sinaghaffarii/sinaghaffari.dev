import {
  categories,
  dashboardStats,
  overviewData,
  recentPosts,
  topAuthors,
} from "@/data/dashboard";

import { DashboardStatCard } from "@/components/Dashboard/dashboard-stat-card";
import { ArticlesOverview } from "@/components/Dashboard/articles-overview";
import { RecentPosts } from "@/components/Dashboard/recent-post";
import { CategoryDistribution } from "@/components/Dashboard/category-distribution";
import { TopAuthors } from "@/components/Dashboard/top-authors";
import { QuickActions } from "@/components/Dashboard/quick-actions";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <DashboardStatCard key={stat.title} {...stat} />
        ))}
      </section>

      {/* Overview */}
      <section className="grid gap-4 xl:grid-cols-[1.5fr_1fr]">
        <ArticlesOverview data={overviewData} />

        <RecentPosts posts={recentPosts} />
      </section>

      {/* Secondary */}
      <section className="grid gap-4 xl:grid-cols-[1.25fr_1fr_1fr]">
        <CategoryDistribution categories={categories} />

        <TopAuthors authors={topAuthors} />

        <QuickActions />
      </section>
    </div>
  );
}
