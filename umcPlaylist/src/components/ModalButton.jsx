import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";

export default function ModalButton() {
  const dispatch = useDispatch();

  return (
    <div className="btn-container">
      <button type="button" className="btn confirm-btn" onClick={() => dispatch(clearCart())}>
        네
      </button>
      <button type="button" className="btn clear-btn" onClick={() => dispatch(clearCart())}>
        아니요
      </button>
    </div>
  );
}
