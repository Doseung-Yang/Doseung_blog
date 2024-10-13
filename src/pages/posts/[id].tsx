import { GetServerSideProps } from 'next'

type PostProps = {
  id: string
}
export default function Post({ id }: PostProps) {
  return (
    <div className="flex">
      <h1>더미 페이지 {id} 입니다.</h1>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query
  return {
    props: {
      id,
    },
  }
}
