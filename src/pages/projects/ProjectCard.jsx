import {
  Card,
  CardBody,
  Dialog,
  DialogBody,
  DialogHeader,
  IconButton,
  Tooltip,
  Typography
} from "@material-tailwind/react";
import React from "react";
import { FaCode, FaEarthAfrica } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import projectFullImageCustom from '../../Assets/Life-Spring-Diagnostics.png';
import './projectCard.css';

export default function ProjectCard({ data }) {

  const { _id, projectTitle, projectDescription, projectImage, liveLink, codeLink, projectFullImage, category, favorite
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
            {/* view details hyper link */}
            <Tooltip content="View Details">
              <IconButton onClick={() => setOpen(!open)} variant="text">
                <MdOutlineRemoveRedEye color="white" className="h-6 w-6" />
              </IconButton>
            </Tooltip>

            {/* code hyper link */}
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

      <Dialog class="dialog" style={{ backgroundColor: 'white', "overflowY":'scroll', height: `90svh`}} open={open} handler={handleOpen} size="xl" >
        <DialogHeader className="flex justify-end p-0">
          <IconButton
            color="blue-gray"
            size="sm"
            variant="text"
            onClick={handleOpen}
            className="p-4"
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

        <DialogBody className="something">

          {/* full project image */}
          <div className=" overview_project mb-5" style={{backgroundImage: `url(${projectFullImage || projectFullImageCustom})`}}>
            {/* <img className="overview_project" src={projectFullImage} alt="" /> */}
          </div>

          {/* title */}
          <Typography as="h3" variant="h3">
            {projectTitle}
          </Typography>

          {/* description */}
          <Typography className="mt-3" as="p" variant="paragraph">
            {projectDescription}
          </Typography>

          <div className="mt-4">
            <ul>   
            {
              ["some features", "some features", "some features"].map(feature => (
                <li className="text-base">{feature}</li>
              ))
            }
            </ul>
          </div>

          {/* technology used */}
          <div className="mt-4 flex gap-2">
            <Typography as="h6" variant="h6">
              Used Technology:
            </Typography>
            {
              ["tecnology", "tecnology", "tecnology"].map(feature => (
                <span className="text-base">{feature} </span>
              ))
            }
          </div>

        </DialogBody>

      </Dialog>
    </>
  )
}