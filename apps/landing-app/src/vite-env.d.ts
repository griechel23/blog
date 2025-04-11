/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PHOTO_URL: string;
  readonly VITE_OK_DEV_URL: string;
  readonly VITE_LOCAL_HOST_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}