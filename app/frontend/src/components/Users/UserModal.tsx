import { Dialog, Transition } from '@headlessui/react';
import { AxiosResponse } from 'axios';
import {
  Dispatch,
  Fragment,
  SetStateAction,
  useEffect,
  useRef,
  useState
} from 'react';
import { IEditUser } from '../../services/interfaces/user.interface';
import { requestUser } from '../../services/requests';
import Form from './Form';

export type Mode = 'create' | 'edit' | 'view';
export type CleanUser = Omit<IEditUser, 'password'>;

interface Props {
  mode?: Mode;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  user?: IEditUser;
}

export default function UserModal({
  mode = 'create',
  open,
  setOpen,
  user,
}: Props) {
  const [userData, setUserData] = useState<CleanUser>();

  const cancelButtonRef = useRef(null);

  useEffect(() => {
    const editOrViewMode = mode === 'edit' || mode === 'view';
    if (editOrViewMode && user) {
      requestUser(user._id).then(({ data }: AxiosResponse<IEditUser>) => {
        const { password, ...cleanUser } = data;
        setUserData(cleanUser);
      });
    }
  }, [mode, user]);

  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-full transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:max-w-screen-sm sm:p-6">
                {mode === 'create' ? (
                  <Form setOpen={setOpen} cancelButtonRef={cancelButtonRef} />
                ) : (
                  <Form
                    setOpen={setOpen}
                    cancelButtonRef={cancelButtonRef}
                    mode={mode}
                    user={userData}
                  />
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
