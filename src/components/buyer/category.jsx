const Category = ({ category }) => {
  return (
    <div className='p-12 flex flex-col w-[197px] cursor-pointer shrink-0 snap-center items-center justify-center group hover:bg-[#EEDFE2] transition-all bg-white shadow border rounded'>
      {category.image}
      <h2 className='text-base font-normal transition-all group-hover:font-bold'>
        {category.name}
      </h2>
    </div>
  )
}

export default Category
