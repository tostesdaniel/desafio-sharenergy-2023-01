import { useState } from 'react';
import CatCover from '../assets/images/cat-cover.jpg';
import CatGeneratorModal from '../components/HttpCat/CatGeneratorModal';
import CatSection from '../components/HttpCat/CatSection';
import Title from '../components/Title';
import { CatContext } from '../context/CatContext';
import { httpStatusCodes } from '../services/constants';

export default function HttpCat() {
  const [modalOpen, setModalOpen] = useState(true);
  const [image, setImage] = useState(CatCover);
  const [selectedStatusCode, setSelectedStatusCode] = useState(
    httpStatusCodes[0]
  );

  const context = {
    image,
    setImage,
    selectedStatusCode,
    setSelectedStatusCode,
  };

  return (
    <>
      <Title title="Gatos HTTP" />
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
