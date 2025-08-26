import { calculateExperience } from "@/utils/calculate-experience";

export const personalInfo = {
  name: "Raghul R.",
  email: "hello@raghulr.com",
  phone: "+1 (555) 123-4567",
  location: "India, Chennai",
  linkedIn: "https://linkedin.com/in/raghulr",
  github: "https://github.com/raghulr",
  twitter: "https://twitter.com/raghulr",
  totalExperience: `${calculateExperience("2021-03-21")}+`,
  appsWorkedOn: "50+",
  companiesWorkedOn: "2",
};

export const cmsStaticData = {
  yearsOfExperience: "Years Experience",
  sassAppsWorkedOn: "real-world SaaS apps.",
  companies: "Companies Worked On",
};
