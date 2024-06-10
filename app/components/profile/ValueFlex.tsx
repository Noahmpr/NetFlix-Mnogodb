import React from 'react';
const ValueFlex = ({title,value,edite}:any) => {
  
  return     <div className='flex w-full items-center gap-3 rounded-xl p-2'>
  <div className="w-1/2 text-pink-700 p-2">
{value}
  </div>
  {edite === true ?<form >   
        <div className="relative w-full">
            <input type="phone" id="phone-input" className="block p-2.5 w-full z-20 text-sm text-pink-700  rounded-lg  " pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
        </div>

</form>:<div className="w-1/2 text-pink-700 p-2">{title}</div>}
  
</div>
}

export default ValueFlex