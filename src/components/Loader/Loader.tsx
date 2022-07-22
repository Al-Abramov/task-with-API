import './Loader.scss';

export const Loader = () => {
  return (
    <div className="fetching">
      <span className="fetching__title"></span>
      <div className="fetching__spinner"></div>
    </div>
  );
};
