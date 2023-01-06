import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginImp from 'vite-plugin-imp'
import path from 'path'
import alias from '@rollup/plugin-alias';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000,
    cors: true
  },
  build:{
    sourcemap: false
  },
  alias: {
    '@': path.resolve('src'),
  },
  plugins: [  
    vue(),
    alias ({
      entries:{
        '_PLGN_': path.resolve(__dirname, './src/plugin'),
        '_LESS_': path.resolve(__dirname, './src/assets/less'),
        '_IMG_': path.resolve(__dirname, './src/assets/img'),
        '_ROUTER_': path.resolve(__dirname, './src/router'),
        '_PAGE_': path.resolve(__dirname, './src/page'),
        '_COMP_': path.resolve(__dirname, './src/components'),
        '_STORE_': path.resolve(__dirname, './src/store'),
        '_API_': path.resolve(__dirname, './src/api'),
        '_TYPE_': path.resolve(__dirname, './src/types'),
        '_LAYOUT_': path.resolve(__dirname, './src/layout'),
      }
    }),
    vitePluginImp({
      libList: [
        {
          libName: 'ant-design-vue',
          style(name) {
            if (/popconfirm/.test(name)) {
              return `ant-design-vue/es/popover/style/index.css`
            }
            return `ant-design-vue/es/${name}/style/index.css`
          }
        }
      ],
    })
  ],
  css: {
    preprocessorOptions:{ 
      less: {
        modifyVars: { 
          'primary-color': '#7e35ff',
          'link-color': '#7e35ff'
        },
        javascriptEnabled: true,
      },
    },
  }
})
