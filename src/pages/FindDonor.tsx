
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Copy, Info, FileText, Heart, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const FindDonor = () => {
  const postTemplate = `🩸 জরুরী রক্তের প্রয়োজন 🩸

👤 রোগী নাম:
🩺 রোগীর সমস্যা:
🧬 রক্তের গ্রুপ:
🩸 রক্তের পরিমান:
📅 তারিখ:
⏰ সময়:
📍 ঠিকানা:
📞 যোগাযোগ:
🔗 রেফারেন্স:BOBDO(https://bobdo.vercel.app)

#BOBDO #রক্তদান #বগুড়া #BloodDonation #BOBDOapp`;

  const copyTemplate = () => {
    navigator.clipboard.writeText(postTemplate);
    toast({
      title: "কপি হয়েছে!",
      description: "পোস্ট টেমপ্লেট কপি হয়েছে। এখন ফেসবুক গ্রুপে পোস্ট করুন।",
    });
  };

  const openFacebookGroup = () => {
    copyTemplate();
    setTimeout(() => {
      window.open("https://www.facebook.com/groups/BOBO.BD", "_blank");
    }, 500);
  };

  const bloodCompatibility = [
    { donor: "O-", recipients: ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"] },
    { donor: "O+", recipients: ["O+", "A+", "B+", "AB+"] },
    { donor: "A-", recipients: ["A-", "A+", "AB-", "AB+"] },
    { donor: "A+", recipients: ["A+", "AB+"] },
    { donor: "B-", recipients: ["B-", "B+", "AB-", "AB+"] },
    { donor: "B+", recipients: ["B+", "AB+"] },
    { donor: "AB-", recipients: ["AB-", "AB+"] },
    { donor: "AB+", recipients: ["AB+"] },
  ];

  return (
    <Layout title="ডোনার খুঁজুন">
      <div className="px-4 lg:px-8 space-y-6 lg:space-y-8">
        {/* Main Action Button */}
        <Card className="border-primary/20 bg-gradient-to-br from-red-50 to-red-100">
          <CardContent className="p-6 lg:p-8 text-center">
            <Button
              onClick={openFacebookGroup}
              className="w-full lg:max-w-md lg:mx-auto btn-ripple bg-primary hover:bg-primary-hover text-primary-foreground text-lg lg:text-xl py-4 lg:py-6"
            >
              <Facebook className="h-5 w-5 lg:h-6 lg:w-6 mr-2" />
              গ্রুপে পোস্ট করুন
            </Button>
            <p className="text-sm lg:text-base text-muted-foreground font-bengali text-center mt-2 lg:mt-4">
              ক্লিক করলে টেমপ্লেট কপি হবে এবং ফেসবুক গ্রুপ খুলবে
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Required Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-bengali text-lg lg:text-xl">
              <Info className="h-5 w-5 lg:h-6 lg:w-6 text-primary" />
              প্রয়োজনীয় তথ্য
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 lg:space-y-4">
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <p className="font-bengali text-sm lg:text-base">রোগীর পূর্ণ নাম ও বয়স</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <p className="font-bengali text-sm lg:text-base">রক্তের গ্রুপ (নিশ্চিত হয়ে লিখুন)</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <p className="font-bengali text-sm lg:text-base">কত ব্যাগ রক্ত প্রয়োজন</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <p className="font-bengali text-sm lg:text-base">হাসপাতালের নাম ও ঠিকানা</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <p className="font-bengali text-sm lg:text-base">যোগাযোগের নম্বর</p>
            </div>
          </CardContent>
        </Card>

        {/* Required Documents */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-bengali text-lg lg:text-xl">
              <FileText className="h-5 w-5 lg:h-6 lg:w-6 text-primary" />
              প্রয়োজনীয় নথিপত্র
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 lg:space-y-4">
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
              <p className="font-bengali text-sm lg:text-base">ডাক্তারের রক্তের জন্য চাহিদাপত্র</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
              <p className="font-bengali text-sm lg:text-base">রোগীর জাতীয় পরিচয়পত্র</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
              <p className="font-bengali text-sm lg:text-base">আত্মীয়ের জাতীয় পরিচয়পত্র</p>
            </div>
          </CardContent>
        </Card>
        </div>

        {/* Blood Compatibility Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-bengali text-lg lg:text-xl">
              <Heart className="h-5 w-5 lg:h-6 lg:w-6 text-primary" />
              রক্তের গ্রুপ সামঞ্জস্যতা চার্ট
            </CardTitle>
            <p className="text-sm lg:text-base text-muted-foreground font-bengali mt-2">
              কোন গ্রুপ কাকে রক্ত দিতে পারে
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 lg:gap-4 lg:grid-cols-2">
              {bloodCompatibility.map((group, index) => (
                <div key={index} className="p-4 lg:p-6 bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm lg:text-base">
                        {group.donor}
                      </div>
                      <span className="font-bengali font-semibold text-sm lg:text-base">গ্রুপ</span>
                    </div>
                    <div className="text-sm lg:text-base text-muted-foreground font-bengali">দিতে পারে</div>
                  </div>
                  <div className="flex flex-wrap gap-2 lg:gap-3">
                    {group.recipients.map((recipient, idx) => (
                      <span key={idx} className="px-2 py-1 lg:px-3 lg:py-2 bg-white text-red-700 border border-red-300 rounded text-sm lg:text-base font-semibold">
                        {recipient}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 lg:mt-6 p-3 lg:p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-800 font-bengali text-sm lg:text-base text-center font-semibold">
                💡 O- সর্বজনীন দাতা | AB+ সর্বজনীন গ্রহীতা
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Process */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-bengali text-lg lg:text-xl">
              <Clock className="h-5 w-5 lg:h-6 lg:w-6 text-primary" />
              আবেদনের প্রক্রিয়া
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 lg:space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <div className="flex gap-3">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm lg:text-base flex-shrink-0">1</div>
              <div>
                <h4 className="font-semibold font-bengali text-sm lg:text-base">গ্রুপে পোস্ট বাটন চাপুন</h4>
                <p className="text-sm lg:text-base text-muted-foreground font-bengali">টেমপ্লেট কপি হবে এবং গ্রুপ খুলবে</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm lg:text-base flex-shrink-0">2</div>
              <div>
                <h4 className="font-semibold font-bengali text-sm lg:text-base">তথ্য পূরণ করুন</h4>
                <p className="text-sm lg:text-base text-muted-foreground font-bengali">সঠিক তথ্য দিয়ে পোস্ট তৈরি করুন</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-success text-success-foreground rounded-full flex items-center justify-center font-bold text-sm lg:text-base flex-shrink-0">3</div>
              <div>
                <h4 className="font-semibold font-bengali text-sm lg:text-base">ফেসবুক গ্রুপে পোস্ট করুন</h4>
                <p className="text-sm lg:text-base text-muted-foreground font-bengali">BOBDO গ্রুপে শেয়ার করুন</p>
              </div>
            </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default FindDonor;
