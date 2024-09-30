const AdminCard = ({children}) => {
  return (
    <div>
      <div className="relative w-[98%] min-h-20 bg-red-600 text-white border-none rounded-lg mt-4 py-5">
        {/* Gambar Close Button */}
        <img 
          src="/icons/x-close.svg" 
          alt="Close" 
          className="absolute top-5 right-7 w-4 cursor-pointer" 
        />
        
        <div className="ml-8 flex items-center text-center">
          <img src="/icons/lightbulb.svg" alt="" className="w-6" />
          <h1 className="ml-3 font-semibold text-md">Information</h1>
        </div>
        
        <div className="ml-[70px] mt-5 font-semibold">
          <p className="text-sm">{children}</p> {/* Add the message */}
        </div>
      </div>
    </div>
  );
}

export default AdminCard;