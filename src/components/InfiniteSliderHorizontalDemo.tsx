import { InfiniteSlider } from "@/components/ui/infinite-slider-horizontal"
import Image from "next/image";

const images = [
  {
    title: "Image 1",
    image:
      "https://cdn.21st.dev/assets/mirror/0e/0e4ff69a3646a45c73218ecf548f13f45e54577a996e4fc545338670a4c92754.jpg",
  },
  {
    title: "Image 2",
    image:
      "https://cdn.21st.dev/assets/mirror/82/82c2643b3a29dadc3913fa2a143a349f6faba789a6c42d9a64ffd62d312d356a.jpg",
  },
  {
    title: "Image 3",
    image:
      "https://cdn.21st.dev/assets/mirror/bf/bff595b3cfcfe4c67286a32d4c09845dc2e892dcf13ffaadf2555f93043dd7ef.jpg",
  },
  {
    title: "Image 4",
    image:
      "https://cdn.21st.dev/assets/mirror/b8/b85436923d648ed3676cbed1431a01df52eecb59940029675fdc752000ebf9c9.jpg",
  },
  {
    title: "Image 5",
    image:
      "https://cdn.21st.dev/assets/mirror/5a/5af6bbce1436b3e36defd34c3ebe2c883f4a8e0b7d4e594ce50062ce68227dc4.jpg",
  },
  {
    title: "Image 1 second row",
    image:
      "https://cdn.21st.dev/assets/mirror/0e/0e4ff69a3646a45c73218ecf548f13f45e54577a996e4fc545338670a4c92754.jpg",
  },
  {
    title: "Image 2 second row",
    image:
      "https://cdn.21st.dev/assets/mirror/82/82c2643b3a29dadc3913fa2a143a349f6faba789a6c42d9a64ffd62d312d356a.jpg",
  },
  {
    title: "Image 3 second row",
    image:
      "https://cdn.21st.dev/assets/mirror/bf/bff595b3cfcfe4c67286a32d4c09845dc2e892dcf13ffaadf2555f93043dd7ef.jpg",
  },
  {
    title: "Image 4 second row",
    image:
      "https://cdn.21st.dev/assets/mirror/b8/b85436923d648ed3676cbed1431a01df52eecb59940029675fdc752000ebf9c9.jpg",
  },
  {
    title: "Image 5 second row",
    image:
      "https://cdn.21st.dev/assets/mirror/5a/5af6bbce1436b3e36defd34c3ebe2c883f4a8e0b7d4e594ce50062ce68227dc4.jpg",
  },
];

export function InfiniteSliderHorizontal() {
  return (
    <div className="h-full flex flex-col justify-center gap-16">
      <div className="flex items-center space-x-4 mx-auto w-full max-w-max">
        <InfiniteSlider direction="horizontal">
          {images.map((image) => (
            <div key={image.title} className="aspect-square w-[300px] rounded-[8px]">
              <Image
                src={image.image}
                alt={image.title}
                width={1200}
                height={1200}
                className="object-cover h-full w-full rounded-[8px]"
              />
            </div>
          ))}
        </InfiniteSlider>
      </div>
      <div className="flex items-center space-x-4 mx-auto w-full max-w-max">
        <InfiniteSlider direction="horizontal" reverse>
          {images.map((image) => (
            <div key={image.title} className="aspect-square w-[300px] rounded-[8px]">
              <Image
                src={image.image}
                alt={image.title}
                width={1200}
                height={1200}
                className="object-cover h-full w-full rounded-[8px]"
              />
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </div>
  );
}
