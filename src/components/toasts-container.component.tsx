import Toast from "types/toast";
import ToastComponent from "./toast.component";

type Props = {
  toasts: Toast[];
};

const ToastsContainer = ({ toasts }: Props) => {
  return (
    <div className={`toasts-container`}>
      {toasts.map((toast) => (
        <ToastComponent key={toast.id} toast={toast} />
      ))}
    </div>
  );
};

export default ToastsContainer;
