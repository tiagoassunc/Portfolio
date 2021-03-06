/** @jsxImportSource theme-ui */

import { useTranslation } from 'react-i18next';

const Presentation = ({ title, description }) => {
  const { t } = useTranslation();
  const traslateble = t;

  return (
    <div
      sx={{
        variant: 'containers.glass',
        height: '100%',
        width: '49%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '60px',
        textAlign: 'center'
      }}
    >
      <h1
        sx={{
          borderBottom: 'solid 1px rgba(255, 255, 255, 0.4)'
        }}
      >
        {title}
      </h1>
      <div
        sx={{
          height: '100%',
          width: '100%',
          overflowY: 'scroll'
        }}
      >
        <p>{traslateble(description)}</p>
      </div>
    </div>
  );
};

export default Presentation;
