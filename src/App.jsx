//import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';
import './App.css';
import Router from './components/Router';

function App() {
  return (
    <ConfigProvider locale={ruRU}>
      <Router />
    </ConfigProvider>
  )
}

export default App
