import { ReactNode } from "react";
import TopNavBar from "./TopNavBar";
import BottomNavBar from "./BottomNavBar";
import { useNavigate } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
  showNavBars?: boolean;
  title?: string;
}

const Layout = ({ children, showNavBars = true, title }: LayoutProps) => {
  const navigate = useNavigate();

  const handleNotificationClick = () => {
    navigate("/notices");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto lg:max-w-none">
      {showNavBars && (
        <TopNavBar 
          onNotificationClick={handleNotificationClick}
        />
      )}
      
      <main className={`flex-1 ${showNavBars ? "pb-20 lg:pb-4 pt-4" : ""}`}>
        {title && (
          <div className="px-4 lg:px-8 pb-4 lg:pb-8">
            <h1 className="text-2xl lg:text-4xl font-bold text-foreground font-bengali text-center">
              {title}
            </h1>
          </div>
        )}
        <div className="lg:max-w-7xl lg:mx-auto lg:px-8">
          {children}
        </div>
      </main>
      
      {showNavBars && <BottomNavBar />}
    </div>
  );
};

export default Layout;