"use client";

import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Community() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="container py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Keep the vertical gradient for a subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background to-background/80 -z-10" />
      {/* Removed the radial gradient to fix alignment issue */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.15),transparent_60%)] -z-10" /> */}

      <motion.div
        className="max-w-screen-xl mx-auto space-y-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        {/* Header Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
            Campus Ambassadors{" "}
            <span className="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
              Loyalty Program
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            A reward- and point-based program designed to maximize engagement, exclusivity, and community among Gen Z students and creators.
          </p>
        </div>

        {/* Points System Section */}
        <Card className="bg-background/90 backdrop-blur-md border border-secondary border-t-primary/40 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground">
              1. Points System
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Earning Points</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Activation Execution:</strong> 25–50 points per activation (size/impact dependent)</li>
                <li><strong>Event Organization:</strong> 50–100 points per event (based on attendance and engagement)</li>
                <li><strong>Content Creation:</strong> 10–30 points per post/video (quality and reach considered)</li>
                <li><strong>Referrals:</strong> 20 points per new ambassador or participant referred</li>
                <li><strong>Community Engagement:</strong> 5–10 points per Discord/chat interaction, poll participation, or feedback submission</li>
                <li><strong>Attendance:</strong> 10 points per event attended (online or offline)</li>
                <li><strong>Missions/Challenges:</strong> 15–40 points per challenge completed (e.g., meme contest, viral challenge)</li>
                <li><strong>Social Impact:</strong> 20–50 points for charity/sustainability initiatives</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Points Redemption</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Merchandise:</strong> 100 points = exclusive brand merch; 250 points = limited-edition drops</li>
                <li><strong>Early Access:</strong> 150 points = early access to new products or events</li>
                <li><strong>Event Tickets:</strong> 200 points = free entry to exclusive brand events or trips</li>
                <li><strong>Crypto Rewards:</strong> 300 points = crypto gift card/voucher (for crypto-curious ambassadors)</li>
                <li><strong>VIP Experiences:</strong> 400 points = meet-and-greet with creators, industry insiders, or brand founders</li>
                <li><strong>Internship/Spotlight:</strong> 500 points = guaranteed feature on brand channels or internship nomination</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Digital Badges & Achievements Section */}
        <Card className="bg-background/90 backdrop-blur-md border border-secondary border-t-primary/40 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground">
              2. Digital Badges & Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Milestone Badges:</strong> Awarded for every 1,000 points, 5,000 points, etc.</li>
              <li><strong>Role Badges:</strong> “Event Organizer,” “Top Creator,” “Community Builder”</li>
              <li><strong>Special Badges:</strong> For completing unique missions or social impact projects</li>
            </ul>
          </CardContent>
        </Card>

        {/* Leaderboards & Recognition Section */}
        <Card className="bg-background/90 backdrop-blur-md border border-secondary border-t-primary/40 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground">
              3. Leaderboards & Recognition
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Monthly Leaderboards:</strong> Top 10 ambassadors featured publicly on Discord and app</li>
              <li><strong>Ambassador of the Month:</strong> Extra 100 points and spotlight feature</li>
              <li><strong>Annual Awards:</strong> Grand prizes for top performers (e.g., all-expenses-paid trip, tech gadgets)</li>
            </ul>
          </CardContent>
        </Card>

        {/* Exclusive Perks & Experiences Section */}
        <Card className="bg-background/90 backdrop-blur-md border border-secondary border-t-primary/40 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground">
              4. Exclusive Perks & Experiences
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Early Access:</strong> First dibs on new products, events, and limited merch</li>
              <li><strong>VIP Events:</strong> Invites to exclusive brand launches, creator meetups, and behind-the-scenes tours</li>
              <li><strong>Creator Spotlights:</strong> Featured on brand socials, blogs, and newsletters</li>
              <li><strong>Internship Nominations:</strong> Top ambassadors recommended for internships with partner brands</li>
            </ul>
          </CardContent>
        </Card>

        {/* Earning Opportunities Section */}
        <Card className="bg-background/90 backdrop-blur-md border border-secondary border-t-primary/40 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground">
              5. Earning Opportunities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Commissions:</strong> 5–10% commission on sales or sign-ups driven by ambassador’s unique link</li>
              <li><strong>Performance Bonuses:</strong> Extra points or cash for exceeding engagement/sales targets</li>
            </ul>
          </CardContent>
        </Card>

        {/* Fun & Engaging Activities Section */}
        <Card className="bg-background/90 backdrop-blur-md border border-secondary border-t-primary/40 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground">
              6. Fun & Engaging Activities
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Weekly</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Movie Night on Discord:</strong> 10 points for attendance + bonus for themed costumes</li>
                <li><strong>Creator Challenges:</strong> 15–40 points per challenge (meme, TikTok, Instagram)</li>
                <li><strong>Game Night:</strong> 10 points for participation (online gaming or board games)</li>
                <li><strong>Industry Q&A:</strong> 10 points for attending live chats with guest speakers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Monthly</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Turf Meetups:</strong> 30 points for attendance (in-person networking in different cities)</li>
                <li><strong>Themed Weeks:</strong> 20–50 points for active participation (Fashion, Crypto, Music Weeks)</li>
                <li><strong>Charity Events:</strong> 30–50 points for eco-friendly or social impact initiatives</li>
                <li><strong>Ambassador Spotlight:</strong> 100 points for featured ambassador</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Quarterly</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Brand Launches:</strong> 50 points for attendance + early access to new products</li>
                <li><strong>Creator Bootcamps:</strong> 40 points for workshop participation</li>
                <li><strong>Surprise & Delight:</strong> Random merch drops or bonus points for active members</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Gamification & Community Section */}
        <Card className="bg-background/90 backdrop-blur-md border border-secondary border-t-primary/40 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground">
              7. Gamification & Community
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Missions/Challenges:</strong> Set up weekly/monthly missions with bonus points or badges</li>
              <li><strong>Social Impact:</strong> Integrate social causes, rewarding ambassadors for eco-friendly actions or community service</li>
              <li><strong>Community Building:</strong> Team activities, icebreakers, and interactive games to strengthen bonds</li>
              <li><strong>Surprise Rewards:</strong> Random bonuses, early access, or personalized shoutouts</li>
            </ul>
          </CardContent>
        </Card>

        {/* Mobile-First & Omnichannel Experience Section */}
        <Card className="bg-background/90 backdrop-blur-md border border-secondary border-t-primary/40 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground">
              8. Mobile-First & Omnichannel Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>App Integration:</strong> Track points, badges, leaderboards, and redeem rewards via mobile app</li>
              <li><strong>Digital Payments:</strong> Use app credits for merch, event tickets, or crypto rewards</li>
              <li><strong>Seamless Engagement:</strong> Easy sign-up, real-time notifications, and quick redemption</li>
            </ul>
          </CardContent>
        </Card>

        {/* Social Responsibility Section */}
        <Card className="bg-background/90 backdrop-blur-md border border-secondary border-t-primary/40 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground">
              9. Social Responsibility
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Eco/Social Initiatives:</strong> Extra points for ambassadors leading or participating in charity, sustainability, or social impact projects</li>
              <li><strong>Cause-Based Rewards:</strong> Donate points to charity or exchange for eco-friendly products</li>
            </ul>
          </CardContent>
        </Card>

        {/* Activity & Reward Table Section */}
        <Card className="bg-background/90 backdrop-blur-md border border-secondary border-t-primary/40 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground">
              Campus Ambassador Activity & Reward Table
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-foreground">Activity Type</TableHead>
                  <TableHead className="text-foreground">Points Earned</TableHead>
                  <TableHead className="text-foreground">Reward Example</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Activation Execution</TableCell>
                  <TableCell>25–50</TableCell>
                  <TableCell>Brand merch</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Event Organization</TableCell>
                  <TableCell>50–100</TableCell>
                  <TableCell>Early access to new products</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Content Creation</TableCell>
                  <TableCell>10–30</TableCell>
                  <TableCell>Discord shoutout</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Referral</TableCell>
                  <TableCell>20</TableCell>
                  <TableCell>Bonus points</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Movie Night</TableCell>
                  <TableCell>10</TableCell>
                  <TableCell>Themed badge</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Turf Meetup</TableCell>
                  <TableCell>30</TableCell>
                  <TableCell>Networking opportunity</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Charity Event</TableCell>
                  <TableCell>30–50</TableCell>
                  <TableCell>Eco-friendly merch</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Ambassador Spotlight</TableCell>
                  <TableCell>100</TableCell>
                  <TableCell>Feature + bonus points</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Why This Works Section */}
        <Card className="bg-background/90 backdrop-blur-md border border-secondary border-t-primary/40 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground">
              Why This Works
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Authenticity:</strong> Ambassadors feel seen, heard, and valued with regular spotlights and personalized rewards.</li>
              <li><strong>Exclusivity:</strong> Early access, limited merch, and VIP experiences cater to Gen Z’s desire for unique perks.</li>
              <li><strong>Fun & Value:</strong> Mix of entertainment, career-building, and social impact keeps ambassadors engaged and motivated.</li>
              <li><strong>Gamification:</strong> Points, badges, and leaderboards tap into Gen Z’s love for competition and recognition.</li>
              <li><strong>Community:</strong> Regular meetups, online and offline, foster a strong sense of belonging and loyalty.</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}