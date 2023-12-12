
export default function Testimonial({ data }) {
  return (
    <div>
      <figure>
        <blockquote className="blockquote">
          <p>
            {data?.comment}
          </p>
          <img
            src={data?.photoURL}
            alt={data?.name}
            className="img-fluid mx-auto rounded-circle"
            width="120px"
          />
        </blockquote>
        <figcaption className="blockquote-footer">
          <cite title="Source Title" className="fs-4">
           {data?.name} {data?.position} at {data?.company}
          </cite>
        </figcaption>
      </figure>
    </div>
  );
}
