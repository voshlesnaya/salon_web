type CardProps = {
  mini_title: string;
  title: string;
  description: string;
  image: string;
  date:string;
};

export default function Card({
    mini_title,
  title,
  description,
  image,
  date,
}: CardProps) {
  return (
    <div className="card">
        <p>{mini_title}</p>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{date}</p>
    </div>
  );
}