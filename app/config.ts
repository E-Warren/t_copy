

//CHANGE LINE BELOW TO SWITCH BACKEND ROUTING AS NEEDED!!
const FE_ENVIRONMENT = 'local_dev';
//CHANGE LINE ABOVE TO SWITCH BACKEND ROUTING AS NEEDED!!

type ConfigType = {
  BE_HOST: string;
  WS_HOST: string;
};

const CONFIG: Record<string, ConfigType> = {
  local_dev: {
    BE_HOST: 'http://localhost:5000',
    WS_HOST: 'ws://localhost:5000'
  },
  development_site: {
    BE_HOST: 'https://dev.tappt.live',
    WS_HOST: 'wss://backend.tappt.live/join'
  },
  production_site: {
    BE_HOST: 'https://tappt.live',
    WS_HOST: 'wss://backend.tappt.live/join'
  },
};

export default CONFIG[FE_ENVIRONMENT];
