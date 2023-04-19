import { FaUserCircle } from "react-icons/fa";
import { ChangePasswordForm } from "../auth/components/ChangePasswordForm";
import { Modal } from "../components/Modal";
import { useAuthStore } from "../hooks/useAuthStore";
import { useModal } from "../hooks/useModal";

export const AccountPage = () => {
  const { user } = useAuthStore();
  const {
    close: closeChangePassword,
    isOpen: isOpenChangePassword,
    open: openChangePassword,
  } = useModal();

  return (
    <>
      <div className="grid grid-rows-6 place-items-center h-full">
        <div className="flex pt-20 pb-5 flex-col justify-center text-center gap-4 rounded-xl shadow-xl shadow-stone-300 bg-stone-50 w-1/2 border-H_brown col-span-full row-start-3 row-span-3 self-center">
          <h1 className="text-4xl text-H_green font-bold mb-2">My account</h1>

          <h1 className="text-3xl text-H_green font-semibold mb-1">
            Personal information
          </h1>
          <div className="">
            <h2 className="text-2xl text-H_green font-medium">Username</h2>
            <p className="text-lg text-H_green font-normal">{user?.username}</p>
          </div>
          <div>
            <h2 className="text-2xl text-H_green font-medium">Email</h2>
            <p className="text-lg text-H_green font-normal">{user?.email}</p>
          </div>
          <Modal isOpen={isOpenChangePassword} close={closeChangePassword}>
            <ChangePasswordForm />
          </Modal>

          <div className="flex items-center justify-evenly mt-2">
            <h1
              className="text-2xl rounded-xl p-2 text-H_brown font-semibold cursor-pointer hover:text-H_green hover:shadow-lg"
              onClick={openChangePassword}
            >
              Change password
            </h1>
          </div>
        </div>
        <FaUserCircle className="text-[10rem] text-H_green rounded-full bg-white col-span-full row-start-1 row-span-4 self-center" />
      </div>
    </>
  );
};
