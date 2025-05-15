import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Esto permite que se acceda desde fuera de la instancia (como tu navegador)
    port: 5173,       // Puedes cambiar el puerto si lo prefieres, solo asegúrate de abrirlo en AWS
  },
})
