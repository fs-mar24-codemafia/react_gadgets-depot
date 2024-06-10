import { ThreeCircles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ThreeCircles
        height="80"
        width="80"
        color="#89939a"
        ariaLabel="three-circles-loading"
      />
    </div>
  );
};
