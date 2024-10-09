import { cn, cva } from '@/utils/style'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient()
const button = cva('flex')
export default function Home() {
  supabase
  return <h3> 안녕 블로그</h3>
}
