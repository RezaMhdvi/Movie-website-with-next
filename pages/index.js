import { Inter } from 'next/font/google'
import HeaderSlider from '@/components/slider'
import FilmSlider from '@/components/film-slider'
import { Divider } from 'antd'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <HeaderSlider/>
      <Divider orientation="right">برترین فیلم ها</Divider>
      <FilmSlider/>
      <Divider orientation="right">بدترین فیلم ها</Divider>
      <FilmSlider/>
      <Divider orientation="right">کم بازدیدترین فیلم ها</Divider>
      <FilmSlider/>
    </div>
  )
}
