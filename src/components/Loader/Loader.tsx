import { Grid } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid height="80" width="80" color="#89939a" ariaLabel="Grid" />
    </div>
  );
};
