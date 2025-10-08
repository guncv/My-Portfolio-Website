import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: [
      '4803-49-228-103-139.ngrok-free.app', // Add your ngrok URL here
    ],
  },
});
