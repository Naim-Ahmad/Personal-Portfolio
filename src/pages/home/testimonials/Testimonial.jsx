import { Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { axios } from "../../../hooks/useAxios";
import TestimonialCard from "./TestimonialCard";

export default function Testimonial() {

  const { data = [], isLoading } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const res = await axios.get("/testimonials");
      return res.data;
    },
  });

  return (
    <div className="container mt-16">
      <div className="text-center m-auto service-div">
        <Typography variant="h1" className="font-bold text-center text-capitalize">
          Testimonials
        </Typography>
        <p className="fs-6" style={{ color: "gray" }}>
          Explore firsthand accounts of collaboration with me. Clients and peers
          share insights into my commitment, problem-solving prowess, and the
          smooth experiences I bring to projects. See how I make a difference.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-16">
        {data?.slice(0, 2).map((d) => (
          <TestimonialCard key={d._id} data={d} />
        ))}
      </div>
    </div>
  );
}
