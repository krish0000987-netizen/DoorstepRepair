import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import BrandPage from "@/pages/brand-page";
import ServicePage from "@/pages/service-page";
import AreasPage from "@/pages/areas-page";
import ServicesListingPage from "@/pages/services-listing-page";
import BrandsListingPage from "@/pages/brands-listing-page";
import AboutPage from "@/pages/about-page";
import ContactPage from "@/pages/contact-page";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={ServicesListingPage} />
      <Route path="/brands" component={BrandsListingPage} />
      <Route path="/areas" component={AreasPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/brands/:slug" component={BrandPage} />
      <Route path="/services/:slug" component={ServicePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
