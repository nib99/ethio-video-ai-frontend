import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  Play, 
  Clock, 
  TrendingUp, 
  Users 
} from 'lucide-react';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function AnalyticsPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect('/login');
  }

  // Mock data - replace with real API calls from your backend (lib/api.ts)
  const stats = {
    totalVideos: 124,
    totalMinutes: 487,
    thisMonthVideos: 28,
    avgProcessingTime: "42s",
    creditsUsed: 1240,
    creditsRemaining: 760,
  };

  const recentActivity = [
    { id: 1, title: "Ethiopian Cultural Documentary", duration: "8:45", date: "2 hours ago", status: "Completed" },
    { id: 2, title: "Amharic Product Promo", duration: "0:52", date: "Yesterday", status: "Completed" },
    { id: 3, title: "Oromo Traditional Music Video", duration: "12:30", date: "3 days ago", status: "Completed" },
  ];

  return (
    <div className="flex-1 space-y-6 p-6 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">Track your video generation performance</p>
        </div>
        <Button>
          <TrendingUp className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Videos</CardTitle>
            <Play className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.totalVideos}</div>
            <p className="text-xs text-muted-foreground">+12 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Minutes</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.totalMinutes}</div>
            <p className="text-xs text-muted-foreground">Generated this year</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.thisMonthVideos}</div>
            <p className="text-xs text-muted-foreground">Videos generated</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Credits Used</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.creditsUsed}</div>
            <p className="text-xs text-muted-foreground">
              {stats.creditsRemaining} remaining
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-7">
        {/* Usage Chart Placeholder */}
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Usage Overview</CardTitle>
            <CardDescription>
              Video generations over the last 30 days
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[320px] flex items-center justify-center border border-dashed rounded-lg">
            <div className="text-center">
              <BarChart3 className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-muted-foreground">Chart will appear here</p>
              <p className="text-sm text-muted-foreground mt-1">
                (Add Recharts or Tremor later)
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent Generations</CardTitle>
            <CardDescription>Last 5 video generations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-mono">{item.duration}</p>
                    <p className="text-xs text-green-600">Completed</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <a href="/dashboard/generate">Generate New Video</a>
            </Button>
            <Button variant="outline">View All Videos</Button>
            <Button variant="outline">Download Usage Report</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
