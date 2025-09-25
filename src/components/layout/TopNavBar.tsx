import { Bell, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import HamburgerMenu from "./HamburgerMenu";
import { useState, useEffect } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

interface TopNavBarProps {
  onNotificationClick?: () => void;
  onMenuClick?: () => void;
}

const TopNavBar = ({ onNotificationClick, onMenuClick }: TopNavBarProps) => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstallable(false);
    }

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setIsInstallable(false);
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="flex items-center justify-between px-4 lg:px-8 py-3 max-w-md mx-auto lg:max-w-7xl">
        {/* Logo and App Name */}
        <div className="flex items-center gap-2">
          <img 
            src="/images/bobdo-logo.png" 
            alt="BOBDO Logo" 
            className="w-8 h-8 lg:w-10 lg:h-10 object-contain"
          />
          <h1 className="text-lg lg:text-xl font-bold text-primary font-bengali">BOBDO</h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="/" className="text-foreground hover:text-primary font-bengali transition-colors">হোম</a>
          <a href="/emergency" className="text-foreground hover:text-primary font-bengali transition-colors">জরুরি</a>
          <a href="/find-donor" className="text-foreground hover:text-primary font-bengali transition-colors">ডোনার খুঁজুন</a>
          <a href="/become-donor" className="text-foreground hover:text-primary font-bengali transition-colors">রক্তদাতা</a>
          <a href="/about" className="text-foreground hover:text-primary font-bengali transition-colors">আমাদের সম্পর্কে</a>
          <a href="/contact" className="text-foreground hover:text-primary font-bengali transition-colors">যোগাযোগ</a>
        </nav>
        
        {/* Mobile Spacer */}
        <div className="flex-1 lg:hidden"></div>
        
        {/* Actions */}
        <div className="flex items-center gap-2">
          {isInstallable && (
            <Button
              variant="ghost"
              size="sm" 
              className="p-2 h-8 w-8 lg:h-10 lg:w-10"
              onClick={handleInstall}
              title="অ্যাপ ইনস্টল করুন"
            >
              <Download className="h-4 w-4 lg:h-5 lg:w-5" />
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            className="p-2 h-8 w-8 lg:h-10 lg:w-10"
            onClick={onNotificationClick}
          >
            <Bell className="h-4 w-4 lg:h-5 lg:w-5" />
          </Button>
          <div className="lg:hidden">
            <HamburgerMenu onMenuClick={onMenuClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
