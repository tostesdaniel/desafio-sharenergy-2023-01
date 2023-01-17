import { useState } from 'react';
import CatCover from '../assets/images/cat-cover.jpg';
import CatGeneratorModal from '../components/HttpCat/CatGeneratorModal';
import CatSection from '../components/HttpCat/CatSection';
import Title from '../components/Title';
import { CatContext } from '../context/CatContext';
import { httpStatusCodes } from '../services/constants';
import classNames from '../services/helpers/joinClassnames';

export default function HttpCat() {
  const [modalOpen, setModalOpen] = useState(false);
  const [showIntroduction, setShowIntroduction] = useState(true);
  const [image, setImage] = useState(CatCover);
  const [selectedStatusCode, setSelectedStatusCode] = useState(
    httpStatusCodes[0]
  );

  const context = {
    image,
    setImage,
    selectedStatusCode,
    setSelectedStatusCode,
    showIntroduction,
    setShowIntroduction,
  };

  return (
    <>
      <div className="min-[360px]:flex min-[360px]:items-center min-[360px]:justify-between">
        <Title title="Gatos HTTP" />
        <div className="mt-4 min-[360px]:mt-0 min-[360px]:ml-4">
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className={classNames(
              'inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
              showIntroduction && 'hidden'
            )}
          >
            Gerar gato
          </button>
        </div>
      </div>
      <div className="py-4">
        <CatContext.Provider value={context}>
          <CatSection setModalOpen={setModalOpen} />
          <CatGeneratorModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          />
        </CatContext.Provider>
      </div>
    </>
  );
}
