"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Users,
    Building,
    Globe,
    DollarSign,
    TrendingUp,
    Heart,
    Smartphone,
    Video,
    MessageCircle,
    Star,
    MapPin,
} from "lucide-react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend,
    LineChart,
    Line,
    AreaChart,
    Area,
} from "recharts";

interface ChartReference {
    id: string;
    caption?: string;
    data: any[];
    chartType: "bar" | "pie" | "line" | "area";
}

interface ChartSection {
    title?: string;
    chartData: ChartReference[];
    preDescription?: string;
    stat?: string;
    description?: string;
}

interface CardConfig {
    icon?: React.ReactNode;
    title: string;
    stat?: string;
    subStat?: string;
    description?: string;
    charts?: ChartReference[];
}

interface BlogSection {
    title: string;
    content: string;
    cards?: CardConfig[];
    charts?: ChartSection[];
}

interface BlogPost {
    id: number;
    title: string;
    subtitle: string;
    date: string;
    readTime: string;
    sections: BlogSection[];
    footer: string;
}

interface TableOfContentsItem {
    id: string;
    title: string;
}

// Sample data for charts
const populationGrowthData = [
    { name: "2015", value: 300 },
    { name: "2020", value: 350 },
    { name: "2025", value: 377 },
    { name: "2030", value: 400 },
    { name: "2035", value: 420 },
];

const urbanVsRuralData = [
    { name: "Urban", value: 40 },
    { name: "Rural", value: 60 },
];

const spendingData = [
    { name: "Tech", value: 400 },
    { name: "Fashion", value: 300 },
    { name: "Food", value: 300 },
    { name: "Travel", value: 200 },
    { name: "Entertainment", value: 150 },
];

const workforceParticipationData = [
    { name: "Current", value: 25 },
    { name: "2030", value: 35 },
    { name: "2035", value: 47 },
];

const financialBehaviorData = [
    { name: "Emphasize Savings", value: 91 },
    { name: "Do Not Prioritize", value: 9 },
];

const dealSeekingData = [
    { name: "Seek Best Deal", value: 88 },
    { name: "Less Price Sensitive", value: 12 },
];

const aspirationsData = [
    { name: "Homeownership", value: 77 },
    { name: "Car Ownership", value: 59 },
    { name: "Travel Abroad", value: 55 },
];

const socialMediaUsageData = [
    { name: "WhatsApp", value: 80.8 },
    { name: "Instagram", value: 77.9 },
    { name: "Facebook", value: 67.8 },
    { name: "Telegram", value: 58.1 },
    { name: "Snapchat", value: 46.9 },
];

const videoConsumptionData = [
    { name: "Daily Video", value: 85 },
    { name: "Not Daily", value: 15 },
];

const shortVideoPreferenceData = [
    { name: "Video <60s", value: 72 },
    { name: "Longer Video", value: 28 },
];

const arVrEngagementData = [
    { name: "Engage with AR/VR", value: 77 },
    { name: "No Preference", value: 23 },
];

const onlineShoppingData = [
    { name: "Shop Online Monthly", value: 69 },
    { name: "Less Frequently", value: 31 },
];

const personalizationData = [
    { name: "Engage with Personalized", value: 72 },
    { name: "No Preference", value: 28 },
];

const trustInBrandsData = [
    { name: "Trust Real Stories", value: 82 },
    { name: "Trust Polished Ads", value: 18 },
];

const socialConsciousnessData = [
    { name: "Support Local Brands", value: 81 },
    { name: "No Preference", value: 19 },
];

const greenClaimsData = [
    { name: "Skeptical", value: 55 },
    { name: "Trust", value: 45 },
];

const onlineFriendshipData = [
    { name: "Prefer Online Friends", value: 68 },
    { name: "Prefer Offline", value: 32 },
];

const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#A28EFF",
    "#FF6B6B",
    "#4ECDC4",
    "#FFD700",
];

export default function BlogPage() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const blogPost: BlogPost = {
        id: 1,
        title: "The Indispensable Influence of Generation Z on India's Brand Landscape",
        subtitle:
            "Indian Gen Z: A transformative force driving $2 trillion in consumption by 2035, demanding authenticity, purpose, and digital fluency from brands.",
        date: "June 3, 2025",
        readTime: "15 min read",
        sections: [
            {
                title: "1. Introduction to Indian Gen Z",
                content:
                    "Generation Z in India, born between 1997 and 2012, represents a dynamic and influential demographic. As digital natives who grew up with smartphones and social media, they blend global trends with traditional values, creating a unique consumer profile that brands cannot ignore. This section sets the stage for understanding their impact on India's brand landscape.",
                charts: [
                    {
                        title: "Population Growth of Gen Z in India",
                        chartData: [
                            {
                                id: "genz-population-growth",
                                caption: "Gen Z Population Growth (2015-2035, in millions)",
                                data: populationGrowthData,
                                chartType: "line",
                            },
                        ],
                        description:
                            "The chart above illustrates the steady growth of Gen Z in India, highlighting their increasing demographic significance.",
                    },
                ],
            },
            {
                title: "2. Demographic Overview of Indian Gen Z",
                content:
                    "Understanding the demographic makeup of Indian Gen Z is crucial for brands aiming to capture their attention. This section explores their population size, urban-rural distribution, and cultural duality.",
                cards: [
                    {
                        icon: <Users className="w-6 h-6 text-primary" />,
                        title: "Population Power",
                        stat: "~377 Million",
                        subStat: "(116 million consumers)",
                        description:
                            "Gen Z forms a significant portion of India's population, making them a key consumer segment.",
                    },
                    {
                        icon: <Building className="w-6 h-6 text-primary" />,
                        title: "Urban Influence",
                        stat: "40%",
                        subStat: "Urban consumers",
                        description:
                            "A substantial portion of Gen Z lives in urban areas, driving trends and consumption patterns.",
                        charts: [
                            {
                                id: "urban-rural-distribution",
                                caption: "Urban vs Rural Distribution of Gen Z",
                                data: urbanVsRuralData,
                                chartType: "pie",
                            },
                        ],
                    },
                    {
                        icon: <Globe className="w-6 h-6 text-primary" />,
                        title: "Cultural Duality",
                        description:
                            "Gen Z in India navigates a blend of global digital culture and traditional values, creating a unique consumer identity.",
                    },
                ],
            },
            {
                title: "3. Economic Impact of Gen Z",
                content:
                    "Gen Z is not just a cultural force; they are an economic powerhouse. Their spending power and influence on household purchases are reshaping India's consumption landscape.",
                cards: [
                    {
                        icon: <DollarSign className="w-6 h-6 text-primary" />,
                        title: "Current Spending",
                        stat: "$860 Billion",
                        subStat: "(43% of total)",
                        description: "Gen Z already drives a significant portion of India's consumption.",
                    },
                    {
                        icon: <TrendingUp className="w-6 h-6 text-primary" />,
                        title: "Future Projection",
                        stat: "$2 Trillion",
                        subStat: "(by 2035)",
                        description: "By 2035, Gen Z will account for every second rupee spent in India.",
                        charts: [
                            {
                                id: "spending-categories",
                                caption: "Gen Z Spending Categories (in millions)",
                                data: spendingData,
                                chartType: "pie",
                            },
                        ],
                    },
                ],
                charts: [
                    {
                        title: "Workforce Participation Trends",
                        chartData: [
                            {
                                id: "workforce-participation",
                                caption: "Gen Z Workforce Participation (% of Total Workforce)",
                                data: workforceParticipationData,
                                chartType: "area",
                            },
                        ],
                        description:
                            "As Gen Z enters the workforce, their economic influence will grow exponentially.",
                    },
                ],
            },
            {
                title: "4. Consumer Behavior and Values",
                content:
                    "Gen Z's consumer behavior is shaped by their values, aspirations, and financial prudence. Brands must align with these principles to win their loyalty.",
                cards: [
                    {
                        title: "Financial Prudence",
                        description: "Gen Z prioritizes savings and seeks value in purchases.",
                        charts: [
                            {
                                id: "financial-behavior",
                                caption: "Financial Behavior of Gen Z",
                                data: financialBehaviorData,
                                chartType: "pie",
                            },
                            {
                                id: "deal-seeking",
                                caption: "Deal-Seeking Tendencies",
                                data: dealSeekingData,
                                chartType: "pie",
                            },
                        ],
                    },
                    {
                        title: "Aspirations",
                        description: "Gen Z has ambitious goals that drive their consumption choices.",
                        charts: [
                            {
                                id: "aspirations",
                                caption: "Top Aspirations of Gen Z (%)",
                                data: aspirationsData,
                                chartType: "bar",
                            },
                        ],
                    },
                ],
                charts: [
                    {
                        title: "Social Consciousness",
                        chartData: [
                            {
                                id: "social-consciousness",
                                caption: "Support for Local Brands",
                                data: socialConsciousnessData,
                                chartType: "pie",
                            },
                            {
                                id: "green-claims",
                                caption: "Skepticism Towards Green Claims",
                                data: greenClaimsData,
                                chartType: "pie",
                            },
                        ],
                        description:
                            "Gen Z values authenticity and social responsibility, often supporting local brands while remaining skeptical of unsubstantiated claims.",
                    },
                    {
                        title: "Community and Well-being",
                        chartData: [
                            {
                                id: "online-friendship",
                                caption: "Preference for Online Friendships",
                                data: onlineFriendshipData,
                                chartType: "pie",
                            },
                        ],
                        description:
                            "Gen Z prioritizes mental well-being and often builds communities online.",
                    },
                ],
            },
            {
                title: "5. Digital Engagement and Influence",
                content:
                    "As digital natives, Gen Z's engagement with brands is heavily influenced by online platforms, social media, and emerging technologies.",
                cards: [
                    {
                        title: "Social Media Usage",
                        description: "Gen Z spends significant time on social media platforms.",
                        charts: [
                            {
                                id: "social-media-usage",
                                caption: "Platform Usage by Indian Gen Z (%)",
                                data: socialMediaUsageData,
                                chartType: "bar",
                            },
                        ],
                    },
                    {
                        title: "Video Consumption",
                        description: "Short-form video content dominates Gen Z's media consumption.",
                        charts: [
                            {
                                id: "video-consumption",
                                caption: "Daily Video Consumption",
                                data: videoConsumptionData,
                                chartType: "pie",
                            },
                            {
                                id: "short-video-preference",
                                caption: "Preference for Short Videos",
                                data: shortVideoPreferenceData,
                                chartType: "pie",
                            },
                        ],
                    },
                    {
                        title: "Emerging Tech Adoption",
                        description: "Gen Z is eager to adopt technologies like AR/VR.",
                        charts: [
                            {
                                id: "ar-vr-engagement",
                                caption: "Engagement with AR/VR Brands",
                                data: arVrEngagementData,
                                chartType: "pie",
                            },
                        ],
                    },
                ],
            },
            {
                title: "6. Strategies for Brands to Win Gen Z",
                content:
                    "To connect with Gen Z, brands must adopt strategies that resonate with their values and digital behaviors.",
                cards: [
                    {
                        icon: <Heart className="w-6 h-6 text-primary" />,
                        title: "Authenticity",
                        description: "Gen Z trusts brands that share real customer stories.",
                        charts: [
                            {
                                id: "trust-in-brands",
                                caption: "Trust in Authentic Brands",
                                data: trustInBrandsData,
                                chartType: "pie",
                            },
                        ],
                    },
                    {
                        icon: <Smartphone className="w-6 h-6 text-primary" />,
                        title: "Mobile-First Approach",
                        description: "Gen Z prioritizes seamless mobile experiences.",
                        charts: [
                            {
                                id: "online-shopping",
                                caption: "Online Shopping Frequency",
                                data: onlineShoppingData,
                                chartType: "pie",
                            },
                        ],
                    },
                    {
                        icon: <MapPin className="w-6 h-6 text-primary" />,
                        title: "Personalization",
                        description: "Gen Z engages more with personalized content.",
                        charts: [
                            {
                                id: "personalization",
                                caption: "Engagement with Personalized Content",
                                data: personalizationData,
                                chartType: "pie",
                            },
                        ],
                    },
                    {
                        icon: <Star className="w-6 h-6 text-primary" />,
                        title: "Experiential Marketing",
                        description: "Gen Z values memorable experiences over products.",
                    },
                    {
                        icon: <MessageCircle className="w-6 h-6 text-primary" />,
                        title: "Community Building",
                        description: "Brands that foster communities win Gen Z loyalty.",
                    },
                ],
            },
            {
                title: "7. Case Studies: Brands Winning Gen Z",
                content:
                    "This section highlights real-world examples of brands successfully engaging Indian Gen Z through innovative strategies.",
                cards: [
                    {
                        title: "Brand A: Leveraging Short-Form Video",
                        description:
                            "Brand A increased engagement by 60% through TikTok campaigns in vernacular languages.",
                    },
                    {
                        title: "Brand B: Emphasizing Sustainability",
                        description:
                            "Brand B gained Gen Z trust by transparently showcasing eco-friendly practices.",
                    },
                    {
                        title: "Brand C: Personalized Experiences",
                        description:
                            "Brand C used AI-driven personalization to boost conversion rates by 45%.",
                    },
                ],
            },
            {
                title: "8. Challenges for Brands",
                content:
                    "While Gen Z presents opportunities, brands also face challenges in meeting their high expectations.",
                cards: [
                    {
                        title: "Skepticism Towards Ads",
                        description:
                            "Gen Z often distrusts traditional advertising, preferring peer reviews.",
                    },
                    {
                        title: "Demand for Transparency",
                        description:
                            "Brands must provide clear evidence of ethical practices to gain trust.",
                    },
                    {
                        title: "Rapid Trend Shifts",
                        description:
                            "Gen Z's preferences change quickly, requiring brands to stay agile.",
                    },
                ],
            },
            {
                title: "9. Future Outlook",
                content:
                    "As Gen Z continues to grow in influence, their impact on India's brand landscape will only deepen. This section explores future trends and predictions.",
                charts: [
                    {
                        title: "Projected Economic Influence",
                        chartData: [
                            {
                                id: "economic-influence",
                                caption: "Projected Spending Growth (2025-2035, in billions)",
                                data: [
                                    { name: "2025", value: 860 },
                                    { name: "2030", value: 1400 },
                                    { name: "2035", value: 2000 },
                                ],
                                chartType: "line",
                            },
                        ],
                        description:
                            "Gen Z's economic influence is set to grow dramatically over the next decade.",
                    },
                ],
            },
            {
                title: "10. Conclusion",
                content:
                    "Indian Gen Z is a transformative force that brands cannot afford to overlook. By understanding their values, digital behaviors, and economic power, brands can build lasting relationships with this generation. The future of India's brand landscape lies in the hands of Gen Z.",
            },
        ],
        footer:
            "© 2024 Gen Z India Market Insights. All data derived from the 'Indispensable Influence of Generation Z on India's Brand Landscape' report. This blog post is for illustrative purposes, summarizing key findings.",
    };

    //   const tableOfContents: TableOfContentsItem[] = blogPost.sections.map((section, index) => ({
    //     id: `section-${index + 1}`,
    //     title: section.title,
    //   }));

    const renderChart = (chart: ChartReference) => {
        if (!chart.data) return null;

        switch (chart.chartType) {
            case "bar":
                return (
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={chart.data}>
                            <XAxis dataKey="name" stroke="#8884d8" />
                            <YAxis stroke="#8884d8" />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "rgba(255, 255, 255, 0.9)", // Default for light mode
                                    color: "#FBBF24",
                                    // Use a className or inline style to toggle for dark mode
                                    // Example: backgroundColor: "rgba(31, 41, 55, 0.9)", // Dark gray for dark mode
                                    border: "1px solid #d1d5db",
                                    borderRadius: "8px",
                                    padding: "8px",
                                    fontSize: "14px",
                                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                }}
                            />
                            <Bar dataKey="value" fill="#3182CE" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                );
            case "pie":
                return (
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={chart.data}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                label
                                labelLine
                            >
                                {chart.data.map((entry: any, index: number) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "rgba(255, 255, 255, 0.9)", // Default for light mode
                                    color: "#FBBF24",
                                    // Use a className or inline style to toggle for dark mode
                                    // Example: backgroundColor: "rgba(31, 41, 55, 0.9)", // Dark gray for dark mode
                                    border: "1px solid #d1d5db",
                                    borderRadius: "8px",
                                    padding: "8px",
                                    fontSize: "14px",
                                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                }}
                            />
                            <Legend
                                layout="horizontal"
                                align="center"
                                verticalAlign="bottom"
                                wrapperStyle={{ paddingTop: "20px" }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                );
            case "line":
                return (
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={chart.data}>
                            <XAxis dataKey="name" stroke="#8884d8" />
                            <YAxis stroke="#8884d8" />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "rgba(255, 255, 255, 0.9)", // Default for light mode
                                    color: "#FBBF24",
                                    // Use a className or inline style to toggle for dark mode
                                    // Example: backgroundColor: "rgba(31, 41, 55, 0.9)", // Dark gray for dark mode
                                    border: "1px solid #d1d5db",
                                    borderRadius: "8px",
                                    padding: "8px",
                                    fontSize: "14px",
                                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                }}
                            />
                            <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={{ r: 4 }} />
                        </LineChart>
                    </ResponsiveContainer>
                );
            case "area":
                return (
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={chart.data}>
                            <XAxis dataKey="name" stroke="#8884d8" />
                            <YAxis stroke="#8884d8" />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "rgba(255, 255, 255, 0.9)", // Default for light mode
                                    color: "#FBBF24",
                                    // Use a className or inline style to toggle for dark mode
                                    // Example: backgroundColor: "rgba(31, 41, 55, 0.9)", // Dark gray for dark mode
                                    border: "1px solid #d1d5db",
                                    borderRadius: "8px",
                                    padding: "8px",
                                    fontSize: "14px",
                                    boxShadow: "0 2px 4pxrgb(20, 20, 212)",
                                }}
                            />
                            <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
                        </AreaChart>
                    </ResponsiveContainer>
                );
            default:
                return null;
        }
    };

    return (
        <section className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-16 max-w-5xl mx-auto"
            >
                {/* Header Section */}
                <div className="text-center space-y-6">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground">
                        {blogPost.title}
                    </h1>
                    <p className="text-lg text-primary">{blogPost.subtitle}</p>
                    <div className="text-sm text-muted-foreground flex justify-center gap-4">
                        <span>{blogPost.date}</span>
                        <span>{blogPost.readTime}</span>
                    </div>
                </div>

                {/* Table of Contents */}
                {/* <Card className="bg-background border border-border shadow-md rounded-2xl sticky top-4 z-10">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-center text-foreground">
              Table of Contents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {tableOfContents.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-primary hover:underline text-sm"
                    aria-label={`Jump to ${item.title}`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card> */}

                {/* Blog Sections */}
                {blogPost.sections.map((section, index) => (
                    <Card
                        key={index}
                        id={`section-${index + 1}`}
                        className="bg-background border border-border shadow-md rounded-2xl transition-all duration-300 hover:shadow-lg"
                    >
                        <CardHeader className="text-center space-y-2">
                            <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                                {section.title}
                            </CardTitle>
                            <p className="text-base text-muted-foreground">{section.content}</p>
                        </CardHeader>

                        <CardContent className="space-y-10">
                            {section.cards && section.cards.length > 0 && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                    {section.cards.map((card, cardIndex) => (
                                        <div
                                            key={cardIndex}
                                            className="p-5 border border-border rounded-lg shadow-sm bg-muted/5 hover:bg-muted/10 transition-all duration-300"
                                            aria-label={card.title}
                                        >
                                            {card.icon && (
                                                <div className="mb-2 text-primary flex justify-center">{card.icon}</div>
                                            )}
                                            <h3 className="text-lg font-semibold text-center">{card.title}</h3>
                                            {card.stat && (
                                                <p className="text-primary font-bold text-xl mt-1 text-center">
                                                    {card.stat}
                                                    {card.subStat && (
                                                        <span className="ml-1 text-sm font-medium text-muted-foreground">
                                                            {card.subStat}
                                                        </span>
                                                    )}
                                                </p>
                                            )}
                                            {card.description && (
                                                <p className="text-sm mt-2 text-muted-foreground text-center">
                                                    {card.description}
                                                </p>
                                            )}
                                            {card.charts && card.charts.length > 0 && (
                                                <div className="mt-4 space-y-6">
                                                    {card.charts.map((chart, i) => (
                                                        <div key={i} className="mb-6">
                                                            {renderChart(chart)}
                                                            <p className="text-center text-sm text-muted-foreground mt-2">
                                                                {chart.caption || chart.id}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {section.charts && section.charts.length > 0 && (
                                <div className="space-y-10">
                                    {section.charts.map((chartSection, chartIndex) => (
                                        <div key={chartIndex} className="space-y-4">
                                            {chartSection.title && (
                                                <h4 className="text-lg font-semibold text-center">{chartSection.title}</h4>
                                            )}
                                            {chartSection.preDescription && (
                                                <p className="text-sm text-muted-foreground text-center">
                                                    {chartSection.preDescription}
                                                </p>
                                            )}
                                            {chartSection.stat && (
                                                <p className="text-primary text-xl font-bold text-center">{chartSection.stat}</p>
                                            )}
                                            {chartSection.chartData.map((item, i) => (
                                                <div key={i} className="mb-6">
                                                    {renderChart(item)}
                                                    <p className="text-center text-sm text-muted-foreground mt-2">
                                                        {item.caption || item.id}
                                                    </p>
                                                </div>
                                            ))}
                                            {chartSection.description && (
                                                <p
                                                    className="text-sm text-muted-foreground text-center"
                                                    dangerouslySetInnerHTML={{ __html: chartSection.description }}
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}

                {/* Related Articles Section */}
                {/* Related Articles Section */}
                <Card className="bg-background border border-border shadow-md rounded-2xl">
                    <CardHeader>
                        <CardTitle className="text-xl font-bold text-center text-foreground">
                            Related Articles
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-4 border border-border rounded-lg hover:bg-muted/10 transition-all duration-300">
                                <h3 className="text-lg font-semibold">
                                    <Link href="/blog/genz-social-impact" className="text-primary hover:underline">
                                        Gen Z's Role in Social Impact Initiatives
                                    </Link>
                                </h3>
                                <p className="text-sm text-muted-foreground mt-2">
                                    Explore how Gen Z is driving social change through activism and conscious consumption.
                                </p>
                            </div>
                            <div className="p-4 border border-border rounded-lg hover:bg-muted/10 transition-all duration-300">
                                <h3 className="text-lg font-semibold">
                                    <Link href="/blog/genz-tech-adoption" className="text-primary hover:underline">
                                        Gen Z and Technology Adoption Trends
                                    </Link>
                                </h3>
                                <p className="text-sm text-muted-foreground mt-2">
                                    Learn about Gen Z's rapid adoption of emerging technologies like AI and AR.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Back to Home Button */}
                <div className="text-center">
                    <Button asChild variant="outline" size="lg" className="rounded-full">
                        <Link href="/">Back to Home</Link>
                    </Button>
                </div>

                {/* Footer */}
                <footer className="pt-10 text-center text-sm text-muted-foreground border-t">
                    {blogPost.footer}
                </footer>
            </motion.div>
        </section>
    );
}