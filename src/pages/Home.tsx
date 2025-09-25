import Layout from "@/components/layout/Layout";
import ServiceCard from "@/components/ui/service-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { 
  Search, HandHeart, HandHelping, HandCoins, Hospital, GraduationCap, 
  Award, Siren, Facebook, Youtube, Users, Info, Bell, Phone
} from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const socialButtons = [
    {
      name: "Facebook Page",
      icon: Facebook,
      url: "https://www.facebook.com/bobdo.official",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      name: "Facebook Group", 
      icon: Users,
      url: "https://www.facebook.com/groups/BOBO.BD",
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      name: "YouTube Channel",
      icon: Youtube,
      url: "https://youtube.com/@bograonlineblooddonationorgani",
      color: "bg-red-600 hover:bg-red-700"
    }
  ];

  const services = [
    { icon: Search, title: "ডোনার খুঁজুন", path: "/find-donor" },
    { icon: HandHeart, title: "রক্তদাতা হোন", path: "/become-donor" },
    { icon: HandHelping, title: "স্বেচ্ছাসেবক হোন", path: "/become-volunteer" },
    { icon: HandCoins, title: "আর্থিক অনুদান", path: "/donation" },
    { icon: Users, title: "কমিউনিটি", path: "/community" },
    { icon: Hospital, title: "হাসপাতাল", path: "/hospitals" },
    { icon: GraduationCap, title: "ট্রেনিং", path: "/training" },
    { icon: Award, title: "সার্টিফিকেট", path: "/certificate" },
    { icon: Bell, title: "নোটিশ", path: "/notices" },  // Changed from Notice to Bell icon
    { icon: Phone, title: "যোগাযোগ", path: "/contact" },
    { icon: Siren, title: "জরুরি যোগাযোগ", path: "/emergency" },
    { icon: Info, title: "আমাদের সম্পর্কে", path: "/about" },
  ];

  const openExternalLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <Layout showNavBars={true}>
      {/* Minimalistic Header Section */}
      <div className="text-center px-4 lg:px-8 py-4 lg:py-8 bg-gradient-to-br from-red-50 to-red-100">
        <img 
          src="/images/bobdo-logo.png"
          alt="BOBDO Logo"
          className="w-16 h-16 lg:w-24 lg:h-24 mx-auto mb-2 lg:mb-4 object-contain"
        />
        <h1 className="text-xl lg:text-3xl font-bold text-primary mb-1 lg:mb-2 font-bengali">
          বগুড়া অনলাইন রক্তদান সংগঠন
        </h1>
        <p className="text-sm lg:text-lg text-muted-foreground font-bengali">
          স্বেচ্ছায় করি রক্তদান, হাসবে রোগী বাঁচবে প্রাণ
        </p>
      </div>

      {/* Social Media Buttons */}
      <div className="px-4 lg:px-8 py-4 lg:py-6">
        <div className="flex gap-2 lg:gap-4 justify-center max-w-md lg:max-w-lg mx-auto">
          {socialButtons.map((button) => (
            <Button
              key={button.name}
              onClick={() => openExternalLink(button.url)}
              className={`flex-1 lg:flex-none lg:px-8 lg:py-3 ${button.color} text-white border-0 rounded-full py-2.5 shadow-md hover:shadow-lg transition-all duration-200`}
            >
              <button.icon className="h-4 w-4 lg:h-5 lg:w-5 lg:mr-2" />
              <span className="hidden lg:inline font-bengali">{button.name}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="px-4 lg:px-8 pb-4 lg:pb-8">
        <h2 className="text-lg lg:text-2xl font-bold text-center mb-4 lg:mb-8 font-bengali text-foreground">
          সেবাসমূহ
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <ServiceCard
              key={service.path}
              icon={service.icon}
              title={service.title}
              onClick={() => navigate(service.path)}
              className="lg:hover:scale-105 transition-transform duration-200"
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
