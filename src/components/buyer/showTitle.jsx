

const ShowTitle = ({text}) => {
  return (
    <div className="flex items-center gap-3">
        <div className="w-[20px] h-[40px] bg-primary-1 rounded">
        </div>
        <p className="text-primary-1 text-base font-semibold">{text}</p>
        
    </div>
  )
}

export default ShowTitle