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
import { Award, DollarSign, Gift, Rocket, Star, Users } from "lucide-react";

export default function Community() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardHover = {
    hover: { scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <section className="container py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-background min-h-screen">
      {/* Subtle Vertical Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background to-background/80 -z-10" />

      <motion.div
        className="max-w-screen-xl mx-auto space-y-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        {/* Header Section with Enhanced Typography and Gradient */}
        <div className="text-center space-y-6 relative">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Campus Ambassadors{" "}
            <span className="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
              Loyalty Program
            </span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            A reward- and point-based program designed to maximize engagement, exclusivity, and community among Gen Z students and creators.
          </motion.p>
        </div>

        {/* Points System Section with Icon and Hover Effect */}
        <motion.div variants={cardHover} whileHover="hover">
          <Card className="bg-background/95 backdrop-blur-lg border border-secondary/50 border-t-primary/50 shadow-2xl rounded-3xl overflow-hidden transition-all duration-300">
            <CardHeader className="flex items-center space-x-4">
              <Rocket className="w-8 h-8 text-primary" />
              <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground">
                1. Points System
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center space-x-2">
                  <Star className="w-6 h-6 text-yellow-500" />
                  <span>Earning Points</span>
                </h3>
                <ul className="list-none space-y-3 text-muted-foreground">
                  {[
                    { label: "Activation Execution", points: "25–50 points per activation (size/impact dependent)" },
                    { label: "Event Organization", points: "50–100 points per event (based on attendance and engagement)" },
                    { label: "Content Creation", points: "10–30 points per post/video (quality and reach considered)" },
                    { label: "Referrals", points: "20 points per new ambassador or participant referred" },
                    { label: "Community Engagement", points: "5–10 points per Discord/chat interaction, poll participation, or feedback submission" },
                    { label: "Attendance", points: "10 points per event attended (online or offline)" },
                    { label: "Missions/Challenges", points: "15–40 points per challenge completed (e.g., meme contest, viral challenge)" },
                    { label: "Social Impact", points: "20–50 points for charity/sustainability initiatives" },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                      <span>
                        <strong>{item.label}:</strong> {item.points}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center space-x-2">
                  <Gift className="w-6 h-6 text-green-500" />
                  <span>Points Redemption</span>
                </h3>
                <ul className="list-none space-y-3 text-muted-foreground">
                  {[
                    { label: "Merchandise", points: "100 points = exclusive brand merch; 250 points = limited-edition drops" },
                    { label: "Early Access", points: "150 points = early access to new products or events" },
                    { label: "Event Tickets", points: "200 points = free entry to exclusive brand events or trips" },
                    { label: "Crypto Rewards", points: "300 points = crypto gift card/voucher (for crypto-curious ambassadors)" },
                    { label: "VIP Experiences", points: "400 points = meet-and-greet with creators, industry insiders, or brand founders" },
                    { label: "Internship/Spotlight", points: "500 points = guaranteed feature on brand channels or internship nomination" },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                      <span>
                        <strong>{item.label}:</strong> {item.points}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Digital Badges & Achievements Section */}
        <motion.div variants={cardHover} whileHover="hover">
          <Card className="bg-background/95 backdrop-blur-lg border border-secondary/50 border-t-primary/50 shadow-2xl rounded-3xl overflow-hidden">
            <CardHeader className="flex items-center space-x-4">
              <Award className="w-8 h-8 text-primary" />
              <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground">
                2. Digital Badges & Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-none space-y-3 text-muted-foreground">
                {[
                  { label: "Milestone Badges", description: "Awarded for every 1,000 points, 5,000 points, etc." },
                  { label: "Role Badges", description: "“Event Organizer,” “Top Creator,” “Community Builder”" },
                  { label: "Special Badges", description: "For completing unique missions or social impact projects" },
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                    <span>
                      <strong>{item.label}:</strong> {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Leaderboards & Recognition Section */}
        <motion.div variants={cardHover} whileHover="hover">
          <Card className="bg-background/95 backdrop-blur-lg border border-secondary/50 border-t-primary/50 shadow-2xl rounded-3xl overflow-hidden">
            <CardHeader className="flex items-center space-x-4">
              <Star className="w-8 h-8 text-primary" />
              <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground">
                3. Leaderboards & Recognition
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-none space-y-3 text-muted-foreground">
                {[
                  { label: "Monthly Leaderboards", description: "Top 10 ambassadors featured publicly on Discord and app" },
                  { label: "Ambassador of the Month", description: "Extra 100 points and spotlight feature" },
                  { label: "Annual Awards", description: "Grand prizes for top performers (e.g., all-expenses-paid trip, tech gadgets)" },
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                    <span>
                      <strong>{item.label}:</strong> {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Exclusive Perks & Experiences Section */}
        <motion.div variants={cardHover} whileHover="hover">
          <Card className="bg-background/95 backdrop-blur-lg border border-secondary/50 border-t-primary/50 shadow-2xl rounded-3xl overflow-hidden">
            <CardHeader className="flex items-center space-x-4">
              <Gift className="w-8 h-8 text-primary" />
              <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground">
                4. Exclusive Perks & Experiences
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-none space-y-3 text-muted-foreground">
                {[
                  { label: "Early Access", description: "First dibs on new products, events, and limited merch" },
                  { label: "VIP Events", description: "Invites to exclusive brand launches, creator meetups, and behind-the-scenes tours" },
                  { label: "Creator Spotlights", description: "Featured on brand socials, blogs, and newsletters" },
                  { label: "Internship Nominations", description: "Top ambassadors recommended for internships with partner brands" },
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                    <span>
                      <strong>{item.label}:</strong> {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Earning Opportunities Section */}
        <motion.div variants={cardHover} whileHover="hover">
          <Card className="bg-background/95 backdrop-blur-lg border border-secondary/50 border-t-primary/50 shadow-2xl rounded-3xl overflow-hidden">
            <CardHeader className="flex items-center space-x-4">
              <DollarSign className="w-8 h-8 text-primary" />
              <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground">
                5. Earning Opportunities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-none space-y-3 text-muted-foreground">
                {[
                  { label: "Commissions", description: "5–10% commission on sales or sign-ups driven by ambassador’s unique link" },
                  { label: "Performance Bonuses", description: "Extra points or cash for exceeding engagement/sales targets" },
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                    <span>
                      <strong>{item.label}:</strong> {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Fun & Engaging Activities Section */}
        <motion.div variants={cardHover} whileHover="hover">
          <Card className="bg-background/95 backdrop-blur-lg border border-secondary/50 border-t-primary/50 shadow-2xl rounded-3xl overflow-hidden">
            <CardHeader className="flex items-center space-x-4">
              <Users className="w-8 h-8 text-primary" />
              <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground">
                6. Fun & Engaging Activities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Weekly</h3>
                <ul className="list-none space-y-3 text-muted-foreground">
                  {[
                    { label: "Movie Night on Discord", points: "10 points for attendance + bonus for themed costumes" },
                    { label: "Creator Challenges", points: "15–40 points per challenge (meme, TikTok, Instagram)" },
                    { label: "Game Night", points: "10 points for participation (online gaming or board games)" },
                    { label: "Industry Q&A", points: "10 points for attending live chats with guest speakers" },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                      <span>
                        <strong>{item.label}:</strong> {item.points}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Monthly</h3>
                <ul className="list-none space-y-3 text-muted-foreground">
                  {[
                    { label: "Turf Meetups", points: "30 points for attendance (in-person networking in different cities)" },
                    { label: "Themed Weeks", points: "20–50 points for active participation (Fashion, Crypto, Music Weeks)" },
                    { label: "Charity Events", points: "30–50 points for eco-friendly or social impact initiatives" },
                    { label: "Ambassador Spotlight", points: "100 points for featured ambassador" },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                      <span>
                        <strong>{item.label}:</strong> {item.points}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Quarterly</h3>
                <ul className="list-none space-y-3 text-muted-foreground">
                  {[
                    { label: "Brand Launches", points: "50 points for attendance + early access to new products" },
                    { label: "Creator Bootcamps", points: "40 points for workshop participation" },
                    { label: "Surprise & Delight", points: "Random merch drops or bonus points for active members" },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                      <span>
                        <strong>{item.label}:</strong> {item.points}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Gamification & Community Section */}
        <motion.div variants={cardHover} whileHover="hover">
          <Card className="bg-background/95 backdrop-blur-lg border border-secondary/50 border-t-primary/50 shadow-2xl rounded-3xl overflow-hidden">
            <CardHeader className="flex items-center space-x-4">
              <Rocket className="w-8 h-8 text-primary" />
              <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground">
                7. Gamification & Community
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-none space-y-3 text-muted-foreground">
                {[
                  { label: "Missions/Challenges", description: "Set up weekly/monthly missions with bonus points or badges" },
                  { label: "Social Impact", description: "Integrate social causes, rewarding ambassadors for eco-friendly actions or community service" },
                  { label: "Community Building", description: "Team activities, icebreakers, and interactive games to strengthen bonds" },
                  { label: "Surprise Rewards", description: "Random bonuses, early access, or personalized shoutouts" },
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                    <span>
                      <strong>{item.label}:</strong> {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Mobile-First & Omnichannel Experience Section */}
        <motion.div variants={cardHover} whileHover="hover">
          <Card className="bg-background/95 backdrop-blur-lg border border-secondary/50 border-t-primary/50 shadow-2xl rounded-3xl overflow-hidden">
            <CardHeader className="flex items-center space-x-4">
              <Users className="w-8 h-8 text-primary" />
              <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground">
                8. Mobile-First & Omnichannel Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-none space-y-3 text-muted-foreground">
                {[
                  { label: "App Integration", description: "Track points, badges, leaderboards, and redeem rewards via mobile app" },
                  { label: "Digital Payments", description: "Use app credits for merch, event tickets, or crypto rewards" },
                  { label: "Seamless Engagement", description: "Easy sign-up, real-time notifications, and quick redemption" },
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                    <span>
                      <strong>{item.label}:</strong> {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Social Responsibility Section */}
        <motion.div variants={cardHover} whileHover="hover">
          <Card className="bg-background/95 backdrop-blur-lg border border-secondary/50 border-t-primary/50 shadow-2xl rounded-3xl overflow-hidden">
            <CardHeader className="flex items-center space-x-4">
              <Award className="w-8 h-8 text-primary" />
              <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground">
                9. Social Responsibility
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-none space-y-3 text-muted-foreground">
                {[
                  { label: "Eco/Social Initiatives", description: "Extra points for ambassadors leading or participating in charity, sustainability, or social impact projects" },
                  { label: "Cause-Based Rewards", description: "Donate points to charity or exchange for eco-friendly products" },
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                    <span>
                      <strong>{item.label}:</strong> {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Activity & Reward Table Section with Enhanced Table Design */}
        <motion.div variants={cardHover} whileHover="hover">
          <Card className="bg-background/95 backdrop-blur-lg border border-secondary/50 border-t-primary/50 shadow-2xl rounded-3xl overflow-hidden">
            <CardHeader className="flex items-center space-x-4">
              <TableIcon className="w-8 h-8 text-primary" />
              <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground">
                Campus Ambassador Activity & Reward Table
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="text-foreground font-semibold text-lg">Activity Type</TableHead>
                    <TableHead className="text-foreground font-semibold text-lg">Points Earned</TableHead>
                    <TableHead className="text-foreground font-semibold text-lg">Reward Example</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { activity: "Activation Execution", points: "25–50", reward: "Brand merch" },
                    { activity: "Event Organization", points: "50–100", reward: "Early access to new products" },
                    { activity: "Content Creation", points: "10–30", reward: "Discord shoutout" },
                    { activity: "Referral", points: "20", reward: "Bonus points" },
                    { activity: "Movie Night", points: "10", reward: "Themed badge" },
                    { activity: "Turf Meetup", points: "30", reward: "Networking opportunity" },
                    { activity: "Charity Event", points: "30–50", reward: "Eco-friendly merch" },
                    { activity: "Ambassador Spotlight", points: "100", reward: "Feature + bonus points" },
                  ].map((row, index) => (
                    <TableRow key={index} className="hover:bg-muted/30 transition-colors">
                      <TableCell className="text-foreground">{row.activity}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/50">
                          {row.points}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{row.reward}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>

        {/* Why This Works Section */}
        <motion.div variants={cardHover} whileHover="hover">
          <Card className="bg-background/95 backdrop-blur-lg border border-secondary/50 border-t-primary/50 shadow-2xl rounded-3xl overflow-hidden">
            <CardHeader className="flex items-center space-x-4">
              <Star className="w-8 h-8 text-primary" />
              <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground">
                Why This Works
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-none space-y-3 text-muted-foreground">
                {[
                  { label: "Authenticity", description: "Ambassadors feel seen, heard, and valued with regular spotlights and personalized rewards." },
                  { label: "Exclusivity", description: "Early access, limited merch, and VIP experiences cater to Gen Z’s desire for unique perks." },
                  { label: "Fun & Value", description: "Mix of entertainment, career-building, and social impact keeps ambassadors engaged and motivated." },
                  { label: "Gamification", description: "Points, badges, and leaderboards tap into Gen Z’s love for competition and recognition." },
                  { label: "Community", description: "Regular meetups, online and offline, foster a strong sense of belonging and loyalty." },
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                    <span>
                      <strong>{item.label}:</strong> {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Custom Table Icon with TypeScript type
const TableIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18M3 6h18M3 18h18M3 6v12a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2z" />
  </svg>
);