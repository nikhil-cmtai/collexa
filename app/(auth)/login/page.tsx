"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Mail, 
  Eye, 
  EyeOff, 
  Lock, 
  UserPlus, 
  KeyRound, 
  Loader2,
  GraduationCap,
  Building,
  Star,
  Globe,
  Zap,
} from "lucide-react";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const credentials = [
    { email: "admin@gmail.com", password: "admin123", role: "admin", name: "Admin User", color: "bg-purple-500" },
    { email: "company@gmail.com", password: "company123", role: "company", name: "TechCorp Solutions", color: "bg-blue-500" },
    { email: "institution@gmail.com", password: "institution123", role: "institution", name: "IIT Madras", color: "bg-green-500" },
    { email: "student@gmail.com", password: "student123", role: "student", name: "Student User", color: "bg-orange-500" },
  ];

  const features = [
    { icon: GraduationCap, text: "Expert-led courses", color: "text-blue-400" },
    { icon: Building, text: "Industry partnerships", color: "text-green-400" },
    { icon: Star, text: "5-star rated platform", color: "text-yellow-400" },
    { icon: Globe, text: "Global community", color: "text-purple-400" }
  ];

  const stats = [
    { number: "50K+", label: "Students" },
    { number: "200+", label: "Courses" },
    { number: "95%", label: "Success Rate" },
    { number: "4.9/5", label: "Rating" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Find the user with matching credentials
    const user = credentials.find(
      cred => cred.email === email && cred.password === password
    );

    if (user) {
      // Store user data in cookie
      const userData = {
        email: user.email,
        role: user.role,
        name: user.name,
        loginTime: new Date().toISOString()
      };

      // Set cookie with user data
      document.cookie = `user=${JSON.stringify(userData)}; path=/; max-age=${7 * 24 * 60 * 60}; secure; samesite=strict`;

      // Redirect based on user role
      switch (user.role) {
        case "admin":
          router.push("/dashboard");
          break;
        case "company":
          router.push("/companies");
          break;
        case "institution":
          router.push("/institution");
          break;
        case "student":
          router.push("/profile");
          break;
        default:
          setError("Unknown role");
          setIsLoading(false);
      }
    } else {
      setError("Invalid email or password");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-6 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 min-h-screen flex">
        {/* Left Side - Branding */}
        <div className="hidden lg:flex lg:w-1/2 flex-col justify-center px-12 text-foreground">
          <div className="max-w-md">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mr-4">
                <GraduationCap className="w-7 h-7 text-primary-foreground" />
              </div>
              <h1 className="text-3xl font-bold text-foreground">Collexa</h1>
            </div>
            
            <h2 className="text-4xl font-bold mb-6 leading-tight text-foreground">
              Transform Your Future with 
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Expert Education</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join thousands of students who have already transformed their careers with our industry-leading courses and expert mentorship.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border-2 border-background flex items-center justify-center shadow-sm">
                    <span className="text-xs font-medium text-muted-foreground">U{i}</span>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Join 50,000+ students</p>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">4.9/5 rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-8">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="lg:hidden text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl mb-4">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">Collexa</h1>
            </div>

            <Card className="bg-card/80 backdrop-blur-sm border-border shadow-xl">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-card-foreground mb-2">
                  Welcome Back
                </CardTitle>
                <p className="text-muted-foreground">
                  Sign in to continue your learning journey
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 text-sm text-destructive bg-destructive/10 rounded-lg border border-destructive/20">
                      {error}
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        autoComplete="username"
                        required
                        disabled={isLoading}
                        className="pl-12 h-12 bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 disabled:opacity-50"
                        placeholder="Enter your email"
                      />
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium text-foreground">
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        autoComplete="current-password"
                        required
                        disabled={isLoading}
                        className="pl-12 pr-12 h-12 bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 disabled:opacity-50"
                        placeholder="Enter your password"
                      />
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        disabled={isLoading}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center"
                    >
                      <KeyRound className="w-4 h-4 mr-1" />
                      Forgot Password?
                    </button>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full h-12 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-medium transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Signing In...
                      </>
                    ) : (
                      <>
                        <Zap className="w-5 h-5 mr-2" />
                        Sign In
                      </>
                    )}
                  </Button>
                </form>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-card text-muted-foreground">
                      New to Collexa?
                    </span>
                  </div>
                </div>

                {/* Sign Up Button */}
                <Button 
                  variant="outline" 
                  className="w-full h-12 border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                  onClick={() => router.push('/signup')}
                >
                  <UserPlus className="w-5 h-5 mr-2" />
                  Create New Account
                </Button>
              </CardContent>
            </Card>

            {/* Footer */}
            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground">
                By signing in, you agree to our{" "}
                <a href="/terms" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy-policy" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;