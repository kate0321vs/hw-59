interface Props {
  name: string;
}

const Film: React.FC<Props> = ({name}) => {
  return (
    <>
      <input
        type="text"
        className="form-control my-3"
        value={name}
      />
    </>
  );
};

export default Film;