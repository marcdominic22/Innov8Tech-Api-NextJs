import { getApiDocs } from "../lib/swagger";
import ReactSwagger from "./react-swagger";

export const metadata = {
  title: "Innov8tech Api",
  description: "Integrations and API Documentation for Innov8Tech",
};

export default async function IndexPage() {
  const spec = await getApiDocs();
  return (
    <section className="container">
      <ReactSwagger spec = {spec} />
    </section>
  );
}