import { useState } from "react"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import { Ticket, Mail, Lock, User, ArrowRight } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

export function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle authentication here.
    // For this UI mockup, we'll just redirect to the dashboard.
    navigate('/dashboard');
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Left Side - Image/Branding */}
      <div className="hidden w-1/2 flex-col justify-between bg-muted p-12 lg:flex relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-brand-900/40 to-background/90" />
        <div 
          className="absolute inset-0 z-0 opacity-30" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')", 
            backgroundSize: "cover", 
            backgroundPosition: "center" 
          }} 
        />
        
        <div className="relative z-10 flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary">
            <Ticket className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">Eventrix</span>
        </div>

        <div className="relative z-10 mb-20 text-white">
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-5xl text-white font-heading">
            Discover moments that <br />
            <span className="text-brand-300">matter.</span>
          </h1>
          <p className="text-lg text-white/80 max-w-md">
            Join thousands of users finding and hosting incredible events, workshops, and experiences worldwide.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex w-full items-center justify-center p-8 lg:w-1/2">
        <div className="mx-auto w-full max-w-md space-y-6">
          <div className="text-center lg:text-left mb-8">
            <h1 className="text-3xl font-bold tracking-tight">{isLogin ? "Welcome back" : "Create an account"}</h1>
            <p className="mt-2 text-muted-foreground">
              {isLogin ? "Enter your details to access your account" : "Join Eventrix to discover and host events"}
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                  <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                </svg>
                Google
              </Button>
              <Button variant="outline" className="w-full">
                <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                </svg>
                Apple
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="space-y-2">
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="name" placeholder="Full Name" type="text" className="pl-10" required={!isLogin} />
                  </div>
                </div>
              )}
              
              <div className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="email" placeholder="name@example.com" type="email" className="pl-10" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="password" placeholder="Password" type="password" className="pl-10" required />
                </div>
              </div>

              {!isLogin && (
                <div className="space-y-2">
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="confirm-password" placeholder="Confirm Password" type="password" className="pl-10" required={!isLogin} />
                  </div>
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2 text-sm">
                    <input type="checkbox" className="rounded border-gray-300 text-brand-500 focus:ring-brand-500" />
                    <span>Remember me</span>
                  </label>
                  <a href="#" className="text-sm font-medium text-brand-500 hover:text-brand-400">
                    Forgot password?
                  </a>
                </div>
              )}

              <Button type="submit" variant="gradient" className="w-full group">
                {isLogin ? "Sign In" : "Create Account"}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>

            <div className="mt-4 text-center text-sm">
              <span className="text-muted-foreground">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
              </span>
              <button 
                type="button" 
                onClick={() => setIsLogin(!isLogin)}
                className="font-medium text-brand-500 hover:text-brand-400"
              >
                {isLogin ? "Sign up" : "Log in"}
              </button>
            </div>
          </div>
          
          <div className="mt-8 text-center text-xs text-muted-foreground lg:text-left">
            By clicking continue, you agree to our{" "}
            <Link to="/terms" className="underline underline-offset-4 hover:text-primary">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="underline underline-offset-4 hover:text-primary">
              Privacy Policy
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  )
}
