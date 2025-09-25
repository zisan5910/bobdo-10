import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const makeCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  const sendEmail = (email: string, subject: string) => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  };

  return (
    <Layout title="যোগাযোগ">
      <div className="px-4 lg:px-8 space-y-6 lg:space-y-8">
        {/* Header Message */}
        <Card className="border-primary/20 bg-gradient-to-br from-red-50 to-red-100">
          <CardContent className="p-6 lg:p-8 text-center">
            <Phone className="h-12 w-12 lg:h-16 lg:w-16 text-red-600 mx-auto mb-4 lg:mb-6" />
            <h3 className="text-lg lg:text-2xl font-semibold font-bengali mb-2 lg:mb-4">
              যোগাযোগ করুন
            </h3>
            <p className="text-muted-foreground font-bengali text-sm lg:text-base">
              রক্তদান সম্পর্কে আপনার কোন প্রশ্ন আছে বা সহায়তা প্রয়োজন? আমরা আপনাকে সাহায্য করতে এখানে আছি।
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Phone Contacts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-bengali text-lg lg:text-xl">
              <Phone className="h-5 w-5 lg:h-6 lg:w-6 text-primary" />
              ফোন
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 lg:space-y-6">
            <div className="p-4 lg:p-6 bg-primary/10 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bengali text-sm lg:text-base text-muted-foreground">পরিচালক:</span>
                <span className="font-mono text-lg lg:text-xl font-semibold">01780-703075</span>
              </div>
              <Button
                onClick={() => makeCall("01780703075")}
                className="w-full lg:py-3"
                size="sm"
              >
                <Phone className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                কল করুন
              </Button>
            </div>
            
            <div className="p-4 lg:p-6 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bengali text-sm lg:text-base text-red-600 font-semibold">জরুরি হটলাইন:</span>
                <span className="font-mono text-lg lg:text-xl font-semibold text-red-600">01722-528164</span>
              </div>
              <p className="text-xs lg:text-sm text-red-600 font-bengali mb-3">(২৪/৭)</p>
              <Button
                onClick={() => makeCall("01722528164")}
                className="w-full lg:py-3 bg-red-600 hover:bg-red-700"
                size="sm"
              >
                <Phone className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                এখনই কল করুন
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Email Contacts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-bengali text-lg lg:text-xl">
              <Mail className="h-5 w-5 lg:h-6 lg:w-6 text-primary" />
              ইমেইল
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 lg:space-y-4">
            <div className="p-3 lg:p-4 bg-muted rounded-lg">
              <p className="font-bengali text-sm lg:text-base mb-2">সাধারণ জিজ্ঞাসা:</p>
              <p className="text-sm lg:text-base font-mono mb-3">bobdo5800@gmail.com</p>
              <Button
                onClick={() => sendEmail("bobdo5800@gmail.com", "সাধারণ জিজ্ঞাসা")}
                variant="outline"
                size="sm"
                className="w-full lg:py-3"
              >
                <Mail className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                ইমেইল পাঠান
              </Button>
            </div>
            
            <div className="p-3 lg:p-4 bg-blue-50 rounded-lg">
              <p className="font-bengali text-sm lg:text-base mb-2">ডেভেলপমেন্ট সহায়তা:</p>
              <p className="text-sm lg:text-base font-mono mb-3">ridoan.zisan@gmail.com</p>
              <Button
                onClick={() => sendEmail("ridoan.zisan@gmail.com", "ডেভেলপমেন্ট সহায়তা")}
                variant="outline"
                size="sm"
                className="w-full lg:py-3"
              >
                <Mail className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                ইমেইল পাঠান
              </Button>
            </div>
          </CardContent>
        </Card>
        </div>

        {/* Address */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-bengali text-lg lg:text-xl">
              <MapPin className="h-5 w-5 lg:h-6 lg:w-6 text-primary" />
              ঠিকানা
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="font-bengali text-lg lg:text-xl mb-4 lg:mb-6">বগুড়া, বাংলাদেশ</p>
            
            <div className="bg-green-50 p-4 lg:p-6 rounded-lg border border-green-200">
              <h4 className="font-bengali font-semibold mb-2 lg:mb-4 text-sm lg:text-base">আমাদের রক্তদান কেন্দ্রসমূহ</h4>
              <div className="text-left space-y-2">
                <div>
                  <p className="font-bengali font-semibold text-sm lg:text-base">প্রধান কেন্দ্র</p>
                  <p className="font-bengali text-sm lg:text-base">সাতমাথা, বগুড়া</p>
                  <p className="font-bengali text-sm lg:text-base">ফোন: 01722-528164</p>
                  <p className="font-bengali text-sm lg:text-base">সময়: ২৪/৭</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Office Hours */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-bengali text-lg lg:text-xl">
              <Clock className="h-5 w-5 lg:h-6 lg:w-6 text-primary" />
              কর্মঘণ্টা
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center p-4 lg:p-6 bg-red-50 rounded-lg border border-red-200">
              <p className="font-bengali text-red-600 font-semibold text-lg lg:text-xl mb-2">
                জরুরি সেবা ২৪/৭ উপলব্ধ
              </p>
              <p className="font-bengali text-sm lg:text-base text-muted-foreground">
                যেকোনো সময় আমাদের সাথে যোগাযোগ করতে পারেন
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Map */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-bengali text-lg lg:text-xl">
              <MapPin className="h-5 w-5 lg:h-6 lg:w-6 text-primary" />
              আমাদের অবস্থান
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative w-full h-64 lg:h-96 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3620.4616418277187!2d89.372963!3d24.848078!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc5588105b94a3%3A0x5502254b1806651f!2sBogra%20Online%20Blood%20Donation%20Organization%20(BOBDO)!5e0!3m2!1sen!2sbd!4v1755846482885!5m2!1sen!2sbd" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
            <p className="text-center font-bengali text-sm lg:text-base text-muted-foreground mt-2">
              বগুড়া, বাংলাদেশ
            </p>
          </CardContent>
        </Card>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 lg:p-6">
          <p className="text-green-800 font-bengali text-center font-semibold">
            🤝 আমরা সবসময় আপনার সেবায় নিয়োজিত
          </p>
          <p className="text-green-700 font-bengali text-center text-sm lg:text-base mt-1">
            রক্তদান সম্পর্কিত প্রশ্ন, রক্তদান শিবির আয়োজন বা আমাদের সেবা সম্পর্কে তথ্যের জন্য আমাদের টিম উপলব্ধ
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
