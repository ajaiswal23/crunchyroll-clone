import { signOut } from "next-auth/react";
import React from "react";

import useCurrentUser from "@/hooks/useCurrentUser";
import { AiOutlineCrown } from "react-icons/ai";
import { BiLogInCircle } from "react-icons/bi";

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  const { data: currentUser } = useCurrentUser();

  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div className="px-3 group item flex flex-row gap-3 items-center w-full">
          <div>
            <img
              className="w-8 rounded-full "
              src="/assets/images/one-piece-chopper-3.png"
              alt=""
            />
          </div>
          <div className="flex-col">
            <p className=" text-white text-sm ">
              {currentUser?.name}
            </p>
            <p className="flex text-yellow-500 text-sm ">
              <AiOutlineCrown className="mr-2 mt-1" /> Premium Member
            </p>
          </div>
        </div>
      </div>
      <hr className="bg-gray-600 border-0 h-px my-4" />
      <div className="flex flex-col gap-3">
        <div 
        onClick={() => signOut()}
        className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <div>
            <BiLogInCircle className="w-8 h-8 bg-white rounded-full" />
          </div>
          <div className="flex-col">
            <p className=" text-white text-sm group-hover/item:underline">
              Log Out
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
