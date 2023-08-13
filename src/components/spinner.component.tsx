type Props = {
  className?: string;
};

const Spinner = ({ className }: Props) => {
  return <span className={`loading loading-spinner ${className}`} />;
};

export default Spinner;
