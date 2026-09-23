import Breadcrumb from "./Breadcrumb";
import BreadcrumbSchema from "./BreadcrumbSchema";
import WebPageSchema from "./WebPageSchema";

type StaticPageSeoProps = {
  name: string;
  description: string;
  path: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
};

export default function StaticPageSeo(props: StaticPageSeoProps) {
  return (
    <>
      <WebPageSchema
        title={props.name}
        description={props.description}
        path={props.path}
        type={props.type}
      />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: props.name }]} />
      <Breadcrumb items={[{ label: props.name }]} />
    </>
  );
}
