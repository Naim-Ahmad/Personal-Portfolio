import {
  Card,
  CardBody,
  IconButton,
  Tooltip
} from "@material-tailwind/react";
import React from "react";
import { FaCode, FaEarthAfrica } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";

export default function ProjectCard({ data }) {

  const { _id, projectTitle, projectDescription, projectImage, liveLink, codeLink, category, favorite
  } = data;

  const [open, setOpen] = React.useState(false);


  const handleOpen = () => setOpen((cur) => !cur)

  const url = projectImage || 'https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg'



  return (
    <>
      <Card
        className="h-64 cursor-pointer group overflow-hidden relative transition-opacity hover:opacity-90"
        key={_id}
      >
        <img
          alt="nature"
          className="h-full w-full object-cover object-center"
          src={url}
        />
        <CardBody className="absolute opacity-0 group-hover:!opacity-100 group-hover:transition flex justify-center items-center h-full w-full hover:backdrop-brightness-50">
          <div className="flex gap-2">
            <Tooltip content="View Details">
              <IconButton variant="text">
                <MdOutlineRemoveRedEye color="white" className="h-6 w-6" />
              </IconButton>
            </Tooltip>
            <Tooltip content="Code Link">
              <a href={codeLink} target="__blank">
                <IconButton variant="text">
                  <FaCode className="h-6 w-6" color="white" />
                </IconButton>
              </a>
            </Tooltip>

            <Tooltip content="Live Link">
              <a href={liveLink} target="__blank">
                <IconButton variant="text">
                  <FaEarthAfrica className="h-6 w-6" color="white" />
                </IconButton>
              </a>
            </Tooltip>


          </div>
        </CardBody>
      </Card>

      {/* <Dialog open={open} handler={handleOpen} size="xl" >
                <DialogHeader className="flex justify-end">
                    <IconButton
                        color="blue-gray"
                        size="sm"
                        variant="text"
                        onClick={handleOpen}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </DialogHeader>

                <DialogBody>

                    <div className="hero flex justify-center bg-no-repeat bg-cover bg-center items-center min-h-[80svh]" style={{ backgroundImage: `url(${url})` }}>
                        <div className="hero-content text-center text-neutral-content  min-h-[80svh] w-full flex justify-center items-center backdrop-brightness-50">
                            <div className="max-w-md">
                                <Typography variant="h1" color="white">{banner?.bannerTitle}</Typography>
                                <Typography variant="paragraph" color="white" className="font-medium">{banner?.bannerDescription}</Typography>

                                <Button color="green" className="mt-3">Get Start</Button>
                            </div>
                        </div>
                    </div>
                </DialogBody>

            </Dialog> */}
    </>
  )
}