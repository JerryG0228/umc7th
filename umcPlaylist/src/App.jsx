import Footer from "./components/Footer";
import Header from "./components/header";
import MainBox from "./components/MainBox";
import Modal from "./components/Modal";
import ModalPortal from "./components/ModalPortal";
import { useSelector } from "react-redux";

function App() {
  const { isOpen } = useSelector((state) => state.modal);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", height: "100%" }}>
      <Header style={{ flex: 1 }} />
      <div style={{ flex: 1 }}>
        <MainBox />
        {isOpen && (
          <ModalPortal>
            <Modal>
              <div>담아두신 음반을 모두 삭제하시겠습니까?</div>
            </Modal>
          </ModalPortal>
        )}
      </div>
      <Footer style={{ flex: 1 }} />
    </div>
  );
}

export default App;
