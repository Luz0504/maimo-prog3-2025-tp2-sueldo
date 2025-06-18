import Image from "next/image"

const Loading = () => {
  return (
    <div className='flex align-middle justify-center bg-no-repeat bg-cover bg-center'>
        <Image
        src={'/assets/cine.gif'}
        width={100}
        height={100}
        alt="cine"
        />
    </div>
  )
}

export default Loading