const HeadingComponent = ({ heading }) => {
  return (
    <div>
      <p className="text-White capitalize text-4xl font-semibold ssm:text-2xl small:text-2xl">
        {heading}
      </p>
      <div className="border-b-2 border-Slate w-1/2 my-1"></div>
    </div>
  );
};

export default HeadingComponent;
