/** @jsxImportSource theme-ui */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { marginTop } from 'styled-system';
import commons from './../../src/sass/commons.module.scss';

const Config = () => {
  const { t } = useTranslation();
  const traslateble = t;

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          flexDirection: 'column'
        }}
      >
        <h1 style={{ fontSize: '50px' }}>{traslateble('Languages')}</h1>
        <div
          sx={{
            variant: 'general.position.centralize',
            justifyContent: 'space-between',
            maxWidth: '300px',
            width: '100%'
          }}
        >
          <button
            className={commons.removeBtnStyle}
            sx={{
              variant: 'navigation.LangBtn',
              backgroundColor: 'green'
            }}
          >
            🇧🇷
          </button>
          <button
            className={commons.removeBtnStyle}
            sx={{
              variant: 'navigation.LangBtn',
              backgroundColor: 'blue'
            }}
          >
            🇺🇸
          </button>
          <button
            className={commons.removeBtnStyle}
            sx={{
              variant: 'navigation.LangBtn',
              backgroundColor: 'red'
            }}
          >
            🇯🇵
          </button>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          flexDirection: 'column',
          marginTop: '35px'
        }}
      >
        <h1 style={{ fontSize: '50px' }}>{traslateble('Themes')}</h1>
        <div
          sx={{
            variant: 'general.position.centralize',
            justifyContent: 'space-between',
            maxWidth: '300px',
            width: '100%'
          }}
        >
          <button
            className={commons.removeBtnStyle}
            sx={{
              variant: 'navigation.LangBtn',
              backgroundColor: 'green'
            }}
          >
            🎍
          </button>
          <button
            className={commons.removeBtnStyle}
            sx={{
              variant: 'navigation.LangBtn',
              backgroundColor: 'blue'
            }}
          >
            ☃️
          </button>
          <button
            className={commons.removeBtnStyle}
            sx={{
              variant: 'navigation.LangBtn',
              backgroundColor: 'red'
            }}
          >
            🧨
          </button>
        </div>
      </div>
    </div>
  );
};

export default Config;
