import { Ellips, Ellips2, Ellips3 } from "@public/testimonals";

interface Testimonial {
  name: string;
  company: string;
  message: string;
  Image: string;
}
export const testimonials: Testimonial[] = [
  {
    name: "Leslie Alexander",
    company: "Ferrari",
    message:
      "Aliquam porta nisi dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullam.",
    Image: Ellips,
  },
  {
    name: "Annette Black",
    company: "Louis Vuitton",
    message:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma.",
    Image: Ellips2,
  },
  {
    name: "Ralph Edwards",
    company: "Mitsubishi",
    message:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    Image: Ellips3,
  },
];
