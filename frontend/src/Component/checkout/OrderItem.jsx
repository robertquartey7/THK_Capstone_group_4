import {TrashIcon} from '@heroicons/react/24/outline'

function OrderItem() {


  function handleDelete(){


  }

  return (
    <div className=" h-16 w-full flex mb-4">
      <div className="flex flex-grow ">
        <div className=" w-14">
          <img src="/img/Bugger.png" alt="" className="h-full w-full" />
        </div>
        <div className="flex flex-col justify-between p-1">
          <span>Breakinfast</span>
          <div>
            <span className="bg-gray-200 h-5 w-5 cursor-pointer">-</span> 1 <span className="bg-gray-200 h-5 w-5 cursor-pointer">+</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between p-1 items-center">
        <span>$5.00</span>
        <span className='cursor-pointer  ml-auto' onClick={handleDelete}><TrashIcon className='h-4'/></span>
      </div>
    </div>
  );
}

export default OrderItem;
