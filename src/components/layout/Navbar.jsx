import { Link } from "react-router-dom"
import { CalendarDays, Menu, X, Ticket } from "lucide-react"
import { useState } from "react"
import { Button } from "../ui/Button"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "My Tickets", path: "/my-tickets" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
                <CalendarDays className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-gradient">
                Eventrix
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link to="/auth">Log In</Link>
            </Button>
            <Button variant="gradient" className="gap-2" asChild>
              <Link to="/create-event">
                <Ticket className="h-4 w-4" />
                Host Event
              </Link>
            </Button>
          </div>

          <div className="flex md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-border/40 bg-background/95 backdrop-blur">
          <div className="space-y-1 px-4 pb-3 pt-2 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2 px-3">
              <Button variant="outline" className="w-full justify-center" asChild onClick={() => setIsMobileMenuOpen(false)}>
                <Link to="/auth">Log In</Link>
              </Button>
              <Button variant="gradient" className="w-full justify-center gap-2" asChild onClick={() => setIsMobileMenuOpen(false)}>
                <Link to="/create-event">
                  <Ticket className="h-4 w-4" />
                  Host Event
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
