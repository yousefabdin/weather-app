import { Box } from "@mui/material";
import ListTechnologies from "../components/about/ListTechnolgies";
import HeroSection from "../components/about/HeroSection";
import ProjectGoalsSection from "../components/about/ProjectGoalSection";
import FeatureSection from "../components/about/FeatureSection";
export default function About() {
  return (
    <>
      <Box>
        <HeroSection />
        <ProjectGoalsSection />
        <FeatureSection />
        <ListTechnologies />
      </Box>
    </>
  );
}
