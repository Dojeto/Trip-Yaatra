const AboutTrip = (props) => {
  const { about } = props;
  return (
    <div>
      <div>
        <h1 className="mt-10 text-3xl font-bold">About</h1>
        <div dangerouslySetInnerHTML={{ __html: about }}/>
      </div>
    </div>
  );
};

export default AboutTrip;