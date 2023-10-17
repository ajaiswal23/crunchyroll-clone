import React from "react";

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex z-60">
      <div className="flex flex-col gap-4">
        <div
          onClick={() =>
            alert(
              `Not implemented yet!, Click on Chopper from One Piece to Sign Out`
            )
          }
          className="px-3 text-center text-white hover:underline"
        >
          Browse
        </div>
        <div
          onClick={() =>
            alert(
              `Not implemented yet!, Click on Chopper from One Piece to Sign Out`
            )
          }
          className="px-3 text-center text-white hover:underline"
        >
          Manga
        </div>
        <div
          onClick={() =>
            alert(
              `Not implemented yet!, Click on Chopper from One Piece to Sign Out`
            )
          }
          className="px-3 text-center text-white hover:underline"
        >
          Games
        </div>
        <div
          onClick={() =>
            alert(
              `Not implemented yet!, Click on Chopper from One Piece to Sign Out`
            )
          }
          className="px-3 text-center text-white hover:underline"
        >
          Store
        </div>
        <div
          onClick={() =>
            alert(
              `Not implemented yet!, Click on Chopper from One Piece to Sign Out`
            )
          }
          className="px-3 text-center text-white hover:underline"
        >
          News
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
