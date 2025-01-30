import agriculture from "@public/Services/Rectangle 12 (5).svg";
import machinery from "@public/Services/Rectangle 12 (6).svg";
import industrial from "@public/Services/Rectangle 12 (7).svg";
import pigments from "@public/Services/Rectangle 12 (8).svg";
import lubricant from "@public/Services/Rectangle 12 (9).svg";
import detergents from "@public/Services/Rectangle 12 (10).svg";
interface Services {
  name: string;
  discription: string;
  Image: string;
}
export const ServicesData: Services[] = [
  {
    name: "Agriculture Chemicals",
    discription:
      "We are importers and distributors of our agricultural products of all types. All the products we provide are of high quality and for specific purposes.",
    Image: agriculture,
  },
  {
    name: "Agriculture Machinery",
    discription:
      "We are importers and distributors of our agricultural products of all types. All the products we provide are of high quality and for specific purposes.",
    Image: machinery,
  },
  {
    name: "Industrial Chemicals",
    discription:
      "We are importers and distributors of our agricultural products of all types. All the products we provide are of high quality and for specific purposes.",
    Image: industrial,
  },
  {
    name: "Pigments",
    discription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since.",
    Image: pigments,
  },
  {
    name: "Lubricant",
    discription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since.",
    Image: lubricant,
  },
  {
    name: "Detergents",
    discription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since.",
    Image: detergents,
  },
];
