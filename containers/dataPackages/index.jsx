import SectionPackages from "@/components/home/sectionPackages";
import DataPackagesPages from "../../components/dataPackagesPage /index";
import Faq from "@/components/home/questinAnswer";

export default function DataPackagesPageContainer() {
  return (
    <>
      <SectionPackages />
      <DataPackagesPages />
      <Faq />
    </>
  );
}
